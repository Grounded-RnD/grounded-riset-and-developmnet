import { PrismaClient } from "@/prisma/generated/client";

declare global {
  var prisma: PrismaClient;

  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
    }
  }
}
