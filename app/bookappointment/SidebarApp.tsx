import { Sidebar, SidebarItem } from "./Sidebar";
import { UserCircle, Package, Mic, HomeIcon } from "lucide-react";

export default function SidebarApp() {
  return (
    <main>
      <Sidebar>
        <SidebarItem text="Home" />
        <SidebarItem text="Bookings" />
        <SidebarItem text="Announcments" />
        <SidebarItem redirect="/login" text="Logout" />
      </Sidebar>
    </main>
  );
}
