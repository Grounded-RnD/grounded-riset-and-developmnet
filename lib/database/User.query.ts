import { Prisma } from "@prisma/client";
import prisma from "../prisma";

export const findUserAuth = async (email: string) => {
  return await prisma.userAuth.findUnique({ where: { userEmail: email } });
};

export const CreateUsers = async (data: Prisma.UserUncheckedCreateInput) => {
  return await prisma.user.create({
    data,
  });
};
export const CreateUserAuth = async (data: Prisma.UserAuthCreateInput | Prisma.UserAuthUncheckedCreateInput) => {
  return await prisma.userAuth.create({
    data,
  });
};

export const findAllUsers = async (filter?: Prisma.UserWhereInput) => {
  return await prisma.user.findMany({
    where: filter,
    include: { userAuth: { select: { last_login: true } } },
  });
};
export const findUser = async (filter: Prisma.UserWhereInput) => {
  return await prisma.user.findFirst({
    where: filter,
    include: { userAuth: { select: { last_login: true } } },
  });
};
export const updateUser = async (where: Prisma.UserWhereUniqueInput, update: Prisma.UserUncheckedUpdateInput | any) => {
  return await prisma.user.update({ where, data: update });
};
export const deleteUser = async (user_id: string) => {
  return await prisma.user.delete({ where: { id: user_id } });
};

export type UserWithLastlog = Prisma.UserGetPayload<{
  include: { userAuth: { select: { last_login: true } } };
}>;

export type ProjectPayLoad = Prisma.ProjectsGetPayload<{}>;

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email: email },
    include: { userAuth: { select: { last_login: true } } },
  });
};

export const findUsers = async (filter?: Prisma.UserWhereInput) => {
  return await prisma.user.findMany({
    where: filter,
  });
};
