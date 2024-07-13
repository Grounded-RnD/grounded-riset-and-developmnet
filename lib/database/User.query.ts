import { Prisma } from "@prisma/client";
import prisma from "../prisma";

export const findUserAuth = async (email: string) => {
  return await prisma.userAuth.findUnique({ where: { userEmail: email } });
};

export const CreateUsers = async (data: any) => {
  return await prisma.user.create({
    data,
  });
};
export const CreateUserAuth = async (data: any) => {
  return await prisma.userAuth.create({
    data,
  });
};

export const findAllUsers = async (filter?: any) => {
  return await prisma.user.findMany({
    where: filter,
    include: { userAuth: { select: { last_login: true } } },
  });
};
export const findUser = async (filter: any) => {
  return await prisma.user.findFirst({
    where: filter,
    include: { userAuth: { select: { last_login: true } } },
  });
};
export const updateUser = async (where: any, update: any) => {
  return await prisma.user.update({ where, data: update });
};
export const deleteUser = async (user_id: string) => {
  return await prisma.user.delete({ where: { id: user_id } });
};

export type UserWithLastlog = any;

export type ProjectPayLoad = any;

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email: email },
    include: { userAuth: { select: { last_login: true } } },
  });
};

export const findUsers = async (filter?: any) => {
  return await prisma.user.findMany({
    where: filter,
  });
};
