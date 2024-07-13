import { LinkButton } from "@/app/utilities/Button";
import { findAllProject } from "@/lib/database/Project.query";
import { ProjectPayLoad } from "@/lib/database/User.query";
import React from "react";
import Action from "./_components/Action";
import AddProject from "./_components/AddProject";

export default async function Project() {
  const project: ProjectPayLoad[] = await findAllProject();
  return (
    <div>
      <h1 className="font-semibold text-[32px] text-oranges-400">Data Projects</h1>
      <p className="font-medium text-[20px] text-surface-200">Grounded Admin Page</p>
      <section className="mt-16">
        <div className="flex justify-end w-full">
          <LinkButton href="/admin/addProjects" variant="primary" className="w-fit mb-6">
            Add New Project
          </LinkButton>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-surface-200">
          <thead className="text-sm text-surface-50 uppercase bg-dark-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Project Name
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                url
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {project.map((x, i) => (
              <tr key={i} className="bg-surface-800">
                <th scope="row" className="px-6 py-4 ">
                  {i + 1}
                </th>
                <td className="px-6 py-4">{x.title}</td>
                <td className="px-6 py-4 flex gap-x-2 items-center">
                  {x.type.map((t: any, ind: any) => (
                    <div key={ind} className="px-2 bg-warning-300 rounded-[4px] w-fit ">
                      <p className="xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[8px] text-surface-900 font-semibold">{t}</p>
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4">{x.link}</td>
                <td>
                  <div className="flex justify-center gap-x-2">
                    <Action deleteId={x.id} updateId={x} data={project} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
