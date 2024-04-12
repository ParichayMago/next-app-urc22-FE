import React, { PureComponent } from "react";
import { SidebarIcon, HomeIcon, AnnouncementIcon } from "@/public/Icons";

export const Sidebar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button bg-indigo-500 shadow-lg shadow-indigo-500/50"
        >
          {SidebarIcon}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>{HomeIcon}Home</a>
          </li>
          <li>
            <a>{AnnouncementIcon}Announcement</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
