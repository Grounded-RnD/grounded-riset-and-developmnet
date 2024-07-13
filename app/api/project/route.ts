import { CreateProject, findAllProject } from "@/lib/database/Project.query";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { title, desc } = body;

  if (!title || !desc) {
    return NextResponse.json({ user: null, message: "All fields are required" }, { status: 401 });
  }

  const newProject = await CreateProject({
    title: title,
    desc: desc,
    imgUrl: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1720798721/ymiemal55wb9ost3xrwd.webp",
  });
  return NextResponse.json({ user: { newProject }, message: "Project successsfuly to Create" }, { status: 200 });
}

export async function GET(req: Request) {
  const dataProject = await findAllProject();
  return new NextResponse(JSON.stringify(dataProject), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
