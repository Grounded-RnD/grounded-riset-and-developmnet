import { dataUser } from "@/app/data/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  return new NextResponse(JSON.stringify(dataUser), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
