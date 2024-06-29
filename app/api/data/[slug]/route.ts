import { dataUser } from "@/app/data/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { slug: string } }) => {
  const { slug } = params;
  const user = dataUser.find((u) => u.slug === slug);

  if (user) {
    return new NextResponse(JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } else {
    return new NextResponse(JSON.stringify({ error: "User not found" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
};
