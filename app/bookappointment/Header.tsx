import React from "react";
import nccLogo from "../../public/URC22PunjabLogo.png";

export function Header() {
  return (
    <main>
      <div className="grid">
        <div className="m-2 p-2 px-10 flex justify-self-center place-items-center ring ring-white-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 rounded-md">
          <img
            className="object-contain h-36 w-40"
            src={nccLogo.src}
            alt="URC 22 Punjab Canteen Logo"
          />
          <h1 className="text-center text-[#cbd5e1] font-bold text-xl">
            URC 22 PUNJAB CANTEEN
          </h1>
        </div>
      </div>
    </main>
  );
}
