import { ActiveLink } from "@/components/common";
import { ModeToggle } from "@/components/common/ModeToggle";
import { menuItems } from "@/constants";
import { TMenuItem } from "@/types";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-gray-200 dark:border-opacity-10 bg-white flex flex-col dark:bg-grayDarker">
      <a href="/" className="logo font-bold text-3xl inline-block mb-10">
        Ucademy
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          return (
            <MenuItem
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          );
        })}
      </ul>
      <div className="mt-auto flex items-center justify-end">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon} {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
