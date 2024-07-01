import React from "react";

interface Proops {
  children: React.ReactNode;
  onCloce?: any;
  user: string;
  onOpen: any;
}

export default function ModalProfile({ children, onCloce, user, onOpen }: Proops) {
  return (
    <React.Fragment>
      {onOpen && (
        <section className={`w-full -mt-10 h-screen fixed  transition-all duration-300 bg-black/80 z-40 scroll-smooth`}>
          <div style={{ transition: "all 0.5s ease-in" }} className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4 w-full max-w-5xl mx-auto max-h-full">
              <div className="relative bg-dark-50 rounded-lg shadow ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 className="text-xl font-medium text-surface-50">Experience of {user}</h3>
                  <button
                    onClick={onCloce}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-surface-900 hover:text-surface-100 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    data-modal-hide="static-modal"
                  >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">{children}</div>
                <div className="flex items-center justify-end p-4 md:p-5 border-t border-surface-800 rounded-b">
                  <button
                    type="button"
                    onClick={onCloce}
                    className="font-semibold text-[16px] text-warning-200 border-2 rounded-[12px] border-warning-400 px-4 py-1 hover:ring-2 hover:ring-warning-200 hover:bg-gradient-to-r hover:from-warning-400 hover:to-warning-300 transition-all duration-200 hover:text-surface-50 focus:ring-2 focus:bg-warning-400 focus:text-surface-50 focus:ring-warning-100"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}
