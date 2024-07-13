import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth;

    if (!token) return NextResponse.redirect("/auth/login");
  },
  {
    pages: { signIn: "auth/login" },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/admin"],
};
