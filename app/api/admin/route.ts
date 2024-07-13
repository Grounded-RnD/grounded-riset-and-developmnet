import { CreateUserAuth, CreateUsers, findAllUsers } from "@/lib/database/User.query";
import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { fullname, email, password } = body;

  const checkEmail = email?.includes("@grounded.or.id");

  if (!fullname || !email || !password) {
    return NextResponse.json({ user: null, message: "All fields are required" }, { status: 401 });
  }
  if (password.length < 8) {
    return NextResponse.json({ message: "Password must be at least 8 characters" }, { status: 522 });
  }
  if (!checkEmail) {
    return NextResponse.json({ message: "Only email @grounded.or.id can register " }, { status: 403 });
  }
  // check email is already exist
  const existiingUserByEmail = await prisma.user.findUnique({
    where: { email: email },
  });
  const existiingUserByEmailAuth = await prisma.userAuth.findUnique({
    where: { userEmail: email },
  });
  if (existiingUserByEmail || existiingUserByEmailAuth) {
    return NextResponse.json({ user: null, message: "Email is already exist." }, { status: 455 });
  }

  const hashedPassword = await hash(password, 10);

  const newUserAuth = await CreateUserAuth({
    userEmail: email,
    password: hashedPassword,
    last_login: new Date(),
  });

  const newUser = await CreateUsers({
    fullname: fullname,
    email: email,
    role: "CoFounder",
    user_img: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1720580914/pgfrhzaobzcajvugl584.png",
    userAuth: {
      connect: { id: newUserAuth.id },
    },
    slug: fullname.replace(" ", "_").toLowerCase(),
  });
  return NextResponse.json({ user: { newUserAuth, newUser }, message: "User successsfuly to Create" }, { status: 200 });
}

export async function GET(req: Request) {
  const dataUser = await findAllUsers();
  return new NextResponse(JSON.stringify(dataUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
