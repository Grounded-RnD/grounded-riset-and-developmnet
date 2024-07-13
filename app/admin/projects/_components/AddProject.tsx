"use client";

import { useState } from "react";

import Modal from "./Modal";
export default function AddProject() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  return (
    <>
      {showModalCreate && <Modal setOpenModal={setShowModalCreate} />}
      <button
        onClick={() => setShowModalCreate(true)}
        className="font-semibold text-[16px] text-warning-200 border-2 rounded-[12px] border-warning-400 px-4 py-1 hover:ring-2 hover:ring-warning-200 hover:bg-gradient-to-r hover:from-warning-400 hover:to-warning-300 transition-all duration-200 hover:text-surface-50 focus:ring-2 focus:bg-warning-400 focus:text-surface-50 focus:ring-warning-100 mb-6 w-fit"
      >
        Create new Project
      </button>
    </>
  );
}
