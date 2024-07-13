"use server";

import { nextGetServerSession } from "@/services/AuthOptions";
import { deleteProject } from "./Project.query";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export const deleteProjectById = async (id: string) => {
  try {
    const session = await nextGetServerSession();
    if (session?.user?.role != "CoFounder") return { error: true, message: "Unauthorized" };

    const deletes = await deleteProject(id);

    if (!deletes) throw new Error("Delete failed");

    revalidatePath("/admin/projects");
    return { message: "Success to Delete!", error: false };
  } catch (e) {
    console.error(e);
    return {
      message: "Failed to Delete",
      error: true,
    };
  }
};

export const updateProjectsWithId = async (id: string | null, data: FormData) => {
  try {
    // const session = await getServerSession();
    const imgUrl = data.get("imgUrl") as string;
    const title = data.get("title") as string;
    const desc = data.get("desc") as string;
    const link = data.get("link") as string;
    const type = JSON.parse(data.get("type") as string) as string[];

    const FinduserName = await prisma.projects.findMany();

    if (id == null && !FinduserName) {
      const create = await prisma.projects.create({
        data: {
          imgUrl: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1720798721/ymiemal55wb9ost3xrwd.webp",
          title: title || "",
          desc: desc || "",
          link: link || "",
          type: type || [],
        },
      });
      if (!create) throw new Error("Create failed");
    } else if (id) {
      const findProjectWithId = await prisma.projects.findUnique({ where: { id } });
      if (findProjectWithId) {
        const update = await prisma.projects.update({
          where: { id: id ?? findProjectWithId.id },
          data: {
            imgUrl: imgUrl ?? findProjectWithId.imgUrl,
            title: title ?? findProjectWithId.title,
            desc: desc ?? findProjectWithId.desc,
            link: link ?? findProjectWithId.link,
            type: type ?? findProjectWithId.type,
          },
        });
        if (!update) throw new Error("Update failed");
      } else throw new Error("Data not found");
    }

    revalidatePath("/admin/projects");
    return { message: "Success to Update Data!", error: false };
  } catch (e) {
    console.error((e as Error).message);
    return {
      message: "Failed to Update Data",
      error: true,
    };
  }
};
