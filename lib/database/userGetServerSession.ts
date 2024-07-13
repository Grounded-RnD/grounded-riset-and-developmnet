"use server";

import { nextGetServerSession } from "@/services/AuthOptions";
import { CreateUserAuth, CreateUsers, deleteUser, findUser, updateUser } from "./User.query";
import { revalidatePath } from "next/cache";
import { Role, SocialLink } from "@prisma/client";
import { hash } from "bcrypt";
import prisma from "../prisma";
import { getServerSession } from "next-auth";

export const deleteUserById = async (id: string) => {
  try {
    const session = await nextGetServerSession();
    if (session?.user?.role != "CoFounder") return { error: true, message: "Unauthorized" };

    const deletes = await deleteUser(id);

    if (!deletes) throw new Error("Delete failed");

    revalidatePath("/admin/users");
    return { message: "Success to Delete!", error: false };
  } catch (e) {
    console.error(e);
    return {
      message: "Failed to Delete",
      error: true,
    };
  }
};

export const updateUserWithId = async (id: string | null, data: FormData) => {
  try {
    // const session = await getServerSession();
    const user_img = data.get("user_img") as string;
    const email = data.get("email") as string;
    const fullname = data.get("fullname") as string;
    const role = data.get("role") as Role;
    const phone = data.get("phone") as string;
    const addrress = data.get("addrress") as string;
    const member_since = data.get("member_since") as string;
    const jabatan = data.get("jabatan") as string;
    const bidang = data.get("bidang") as string;
    const webTitle = data.get("webTitle") as string;
    const webHref = data.get("webHref") as string;
    const linkedinTitle = data.get("linkedinTitle") as string;
    const linkedinHref = data.get("linkedinHref") as string;
    const instagramTitle = data.get("instagramTitle") as string;
    const instagramHref = data.get("instagramHref") as string;
    const githubTitle = data.get("githubTitle") as string;
    const githubHref = data.get("githubHref") as string;
    const whatsappTitle = data.get("whatsappTitle") as string;
    const whatsappHref = data.get("whatsappHref") as string;
    const skills = JSON.parse(data.get("skills") as string) as { skill: string; tech_stack: string[] }[];
    const experience = JSON.parse(data.get("experience") as string) as string[];

    const findEmail = await prisma.user.findUnique({ where: { email } });

    if (id == null && !findEmail) {
      const create = await prisma.user.create({
        data: {
          email,
          fullname,
          role,
          user_img: user_img,
          addrress,
          phone,
          member_since,
          jabatan,
          bidang,
          web: webTitle && webHref ? { title: webTitle, href: webHref } : undefined,
          linkedin: linkedinTitle && linkedinHref ? { title: linkedinTitle, href: linkedinHref } : undefined,
          instagram: instagramTitle && instagramHref ? { title: instagramTitle, href: instagramHref } : undefined,
          github: githubTitle && githubHref ? { title: githubTitle, href: githubHref } : undefined,
          whatsapp: whatsappTitle && whatsappHref ? { title: whatsappTitle, href: whatsappHref } : undefined,
          skills,
          experience,
          slug: fullname.replace(" ", "_").toLowerCase(),
        },
      });
      console.log("Updating user image to:", user_img);

      if (!create) throw new Error("Create failed");
    } else if (id) {
      const findUserWithId = await prisma.user.findUnique({ where: { id } });
      if (findUserWithId) {
        const update = await prisma.user.update({
          where: { id: id ?? findUserWithId.id },
          data: {
            email: email ?? findUserWithId.email,
            fullname: fullname ?? findUserWithId.fullname,
            role: role ?? findUserWithId.role,
            phone: phone ?? findUserWithId.phone,
            user_img: user_img ?? findUserWithId.user_img,
            slug: fullname.replace(" ", "_").toLowerCase(),
            addrress: addrress ?? findUserWithId.addrress,
            member_since: member_since ?? findUserWithId.member_since,
            jabatan: jabatan ?? findUserWithId.jabatan,
            bidang: bidang ?? findUserWithId.bidang,
            web: webTitle && webHref ? { title: webTitle, href: webHref } : findUserWithId.web,
            linkedin: linkedinTitle && linkedinHref ? { title: linkedinTitle, href: linkedinHref } : findUserWithId.linkedin,
            instagram: instagramTitle && instagramHref ? { title: instagramTitle, href: instagramHref } : findUserWithId.instagram,
            github: githubTitle && githubHref ? { title: githubTitle, href: githubHref } : findUserWithId.github,
            whatsapp: whatsappTitle && whatsappHref ? { title: whatsappTitle, href: whatsappHref } : findUserWithId.whatsapp,
            skills: skills.length ? skills : findUserWithId.skills,
            experience: experience.length ? experience : findUserWithId.experience,
          },
        });
        console.log("Updating user image to:", user_img);
        if (!update) throw new Error("Update failed");
      } else throw new Error("User not found");
    }

    revalidatePath("/admin/users");
    return { message: "Success to Update Data!", error: false };
  } catch (e) {
    console.error(e);
    const error = e as Error;
    return {
      message: error.message.includes("PRIMARY") ? "Email already exists" : "Failed to update user",
      error: true,
    };
  }
};
