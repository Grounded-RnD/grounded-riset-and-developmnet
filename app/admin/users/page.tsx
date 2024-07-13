import { LinkButton } from "@/app/utilities/Button";
import { findAllUsers, UserWithLastlog } from "@/lib/database/User.query";
import { stringifyCompleteDate } from "@/services/CompleteDate";
import Image from "next/image";
import React, { ReactNode } from "react";
import Action from "./_components/Action";

export default async function Users() {
  const user: UserWithLastlog[] = await findAllUsers();

  return (
    <div>
      <h1 className="font-semibold text-[32px] text-oranges-400">Data Users</h1>
      <p className="font-medium text-[20px] text-surface-200">Grounded Admin Page</p>
      <section className="mt-16">
        <div className="flex justify-end w-full">
          <LinkButton href="/admin/registerUser" variant="primary" className="w-fit mb-6">
            Add New Admin
          </LinkButton>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-surface-200">
          <thead className="text-sm text-surface-50 uppercase bg-dark-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Last Login
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((x: any, i: any) => (
              <tr key={i} className="bg-surface-800">
                <th scope="row" className="px-6 py-4 ">
                  {i + 1}
                </th>
                <td className="px-6 py-4 flex items-center gap-x-4">
                  <Image src={x?.user_img as string} width={20} height={10} alt={x.slug as string} />
                  <p>{x.fullname}</p>
                </td>
                <td className="px-6 py-4">{x.email}</td>
                <td className="px-6 py-4">{x.role}</td>
                <td className="px-6 py-4">{x.userAuth?.last_login ? stringifyCompleteDate(x.userAuth?.last_login) : "Nover Log In"}</td>
                <td>
                  <Action deleteId={x.id} updateId={x} data={user} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
