import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const globalForPrisma = global as unknown as { db: PrismaClient };
export const prisma = globalForPrisma.db || db;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.db = prisma;
}
export default prisma;
