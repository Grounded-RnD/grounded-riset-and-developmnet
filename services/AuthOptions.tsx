import { findUser, updateUser } from "@/lib/database/User.query";
import prisma from "@/lib/prisma";
import { compareSync } from "bcrypt";
import { AuthOptions, getServerSession } from "next-auth";

import type { DefaultJWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      name: string;
      email: string;
      slug: string;
      role: string;
      image: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    name: string;
    email: string;
    slug: string;
    role: string;
    image: string;
  }
}
export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  theme: {
    logo: "/logo/main-logo.svg",
    brandColor: "#161616",
    colorScheme: "dark",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "admin@example.or.id",
        },
        fullname: {
          label: "Fullname",
          type: "text",
          placeholder: "name",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        try {
          const findUser = await prisma.user.findUnique({
            where: { email: credentials?.email },
            include: { userAuth: true },
          });
          if (!findUser) return null;

          const ComparePassword = compareSync(credentials?.password as string, findUser.userAuth?.password as string);
          if (!ComparePassword) return null;

          const user = {
            id: findUser.id,
            fullname: findUser.fullname,
            role: findUser.role,
            email: findUser.email,
            slug: findUser.slug,
            user_img: findUser.user_img,
            image: findUser.user_img,
          };
          return user;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      const redirectUrl = url.startsWith("/admin") ? new URL(url, baseUrl).toString() : url;
      return redirectUrl;
    },
    async signIn({ user }) {
      if (user.email) {
        await findUser({ email: user.email });
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user?.email) {
        const userData = await findUser({ email: user.email });
        token.id = userData?.id || "";
        token.name = userData?.fullname || "";
        token.role = userData?.role || "Users";
        token.email = userData?.email || "";
        token.user_img = userData?.user_img || "";
        token.image = userData?.user_img || "";
        token.slug = userData?.slug || "";
      }

      return token;
    },
    async session({ session, token }) {
      if (token.email && session.user) {
        session.user.role = token?.role || "Users";
        session.user.id = token.id as string;
        session.user.email = token?.email as string;
        session.user.name = token.name as string;
        session.user.slug = token.slug as string;
        session.user.image = token.user_img as string;
        await updateUser({ email: token.email }, { user_img: token.user_img, userAuth: { update: { last_login: new Date() } } });
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const nextGetServerSession = () => getServerSession(authOptions);
