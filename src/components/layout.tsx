import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar/sidebar";
import SidebarItem from "./sidebar/sidebar-item";
import { BookAIcon, HomeIcon, User2Icon } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex w-full">
      <Sidebar>
        <SidebarItem
          icon={<HomeIcon size={20} />}
          title="Classrooms"
          path="/classrooms"
        />
        <SidebarItem
          icon={<BookAIcon size={20} />}
          title="Courses"
          path="/courses"
        />
        <SidebarItem
          icon={<User2Icon size={20} />}
          title="Students"
          path="/students"
        />
      </Sidebar>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
