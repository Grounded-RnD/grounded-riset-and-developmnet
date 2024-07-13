import { findAllProject } from "@/lib/database/Project.query";
import { findAllUsers } from "@/lib/database/User.query";
import React from "react";

export default async function dashboard() {
  const dataUser = await findAllUsers();
  const dataAdmin = await findAllUsers({ role: "CoFounder" });
  const dataProject = await findAllProject();
  return (
    <div>
      <h1 className="font-semibold text-[32px] text-oranges-400">Dashboard</h1>
      <p className="font-medium text-[20px] text-surface-200">Grounded Admin Page</p>
      <section className="mt-16">
        <div className="grid grid-cols-4 gap-4">
          <div className="block max-w-sm p-6 bg-surface-900 border border-surface-709 rounded-lg shadow">
            <h5 className="mb-2 text-6xl font-medium tracking-tight text-surface-50">{dataUser.length}</h5>
            <p className="font-normal text-surface-400">Total User</p>
          </div>
          <div className="block max-w-sm p-6 bg-surface-900 border border-surface-709 rounded-lg shadow">
            <h5 className="mb-2 text-6xl font-medium tracking-tight text-surface-50">0</h5>
            <p className="font-normal text-surface-400">Total Member</p>
          </div>
          <div className="block max-w-sm p-6 bg-surface-900 border border-surface-709 rounded-lg shadow">
            <h5 className="mb-2 text-6xl font-medium tracking-tight text-surface-50">{dataAdmin.length}</h5>
            <p className="font-normal text-surface-400">Total Admin</p>
          </div>
          <div className="block max-w-sm p-6 bg-surface-900 border border-surface-709 rounded-lg shadow">
            <h5 className="mb-2 text-6xl font-medium tracking-tight text-surface-50">{dataProject.length}</h5>
            <p className="font-normal text-surface-400">Total Projects</p>
          </div>
        </div>
      </section>
    </div>
  );
}
