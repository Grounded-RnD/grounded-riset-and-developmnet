import { Prisma } from "@/prisma/generated/client";
import prisma from "../prisma";

export const CreateProject = async (data: Prisma.ProjectsUncheckedCreateInput) => {
  return await prisma.projects.create({
    data,
  });
};
export const findAllProject = async (filter?: Prisma.ProjectsWhereInput) => {
  return await prisma.projects.findMany({
    where: filter,
  });
};

export const updateProject = async (where: Prisma.ProjectsWhereUniqueInput, update: Prisma.ProjectsUncheckedUpdateInput | any) => {
  return await prisma.projects.update({ where, data: update });
};
export const deleteProject = async (project_id: string) => {
  return await prisma.projects.delete({ where: { id: project_id } });
};
