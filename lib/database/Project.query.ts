import { Prisma } from "@prisma/client";
import prisma from "../prisma";

export const CreateProject = async (data: any) => {
  return await prisma.projects.create({
    data,
  });
};
export const findAllProject = async (filter?: any) => {
  return await prisma.projects.findMany({
    where: filter,
  });
};

export const updateProject = async (where: any, update: any) => {
  return await prisma.projects.update({ where, data: update });
};
export const deleteProject = async (project_id: string) => {
  return await prisma.projects.delete({ where: { id: project_id } });
};
