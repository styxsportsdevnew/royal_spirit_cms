import React, { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { BsArrowLeftCircle } from "react-icons/bs";
import { RiCreativeCommonsNdLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { BsController } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { BsEnvelopePaper } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import Link from "next/link";
import { RiPhoneLine } from "react-icons/ri";

interface Menu {
  title: string;
  spacing?: boolean;
  submenu?: boolean;
  subMenuItems?: Array<{ title: string; subId: number; icon: any; path: any }>;
  icon?: any;
  path?: any;
}

const Sidebar: FC = () => {
  const pathname: string = usePathname();
  console.log("Current Path", pathname);
  const [open, setOpen] = useState<boolean>(true);
  const [openSubMenus, setOpenSubMenus] = useState<Record<number, boolean>>({});
  const Menus: Menu[] = [
    {
      title: "Dashboard",
      icon: <MdOutlineSpaceDashboard size={20} />,
      path: "/",
    },
    {
      title: "Best Selling Products",
      spacing: false,
      icon: <BsList size={20} />,
      path: "/profile",
    },
    {
      title: "Blogs",
      submenu: true,
      subMenuItems: [
        {
          title: "Blog",
          subId: 0,
          icon: <BsList size={20} />,
          path: "#",
        },
        {
          title: "Blog Category",
          subId: 1,
          icon: <BsList size={20} />,
          path: "#",
        },
      ],
      icon: <BsDisplay size={20} />,
      path: "#",
    },
    {
      title: "Comment List",
      spacing: false,
      icon: <BsEnvelopePaper size={20} />,
      path: "/profile/contact",
    },
    {
      title: "Brand List",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },

    {
      title: "Category",
      submenu: true,
      subMenuItems: [
        {
          title: "Category",
          subId: 3,
          icon: <BsList size={20} />,
          path: "#",
        },
        {
          title: "Sub Category",
          subId: 4,
          icon: <BsList size={20} />,
          path: "#",
        },
      ],
      icon: <BsDisplay size={20} />,
      path: "#",
    },
    { title: "Contact Us", icon: <RiPhoneLine size={20} />, path: "#" },
    {
      title: "Coupon Codes",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    { title: "FAQ's", icon: <BsEnvelopePaper size={20} />, path: "#" },
    {
      title: "Featured On",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    {
      title: "Gallery",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    { title: "News", icon: <BsEnvelopePaper size={20} />, path: "#" },
    {
      title: "Offer List",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    { title: "Orders", icon: <BsList size={20} />, path: "#" },
    {
      title: "Platinum Club Member List",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    {
      title: "Product",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    {
      title: "Product Quotations",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    {
      title: "Registered Users",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    {
      title: "Reviews",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    {
      title: "Subscribers",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    {
      title: "Testimonials",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    {
      title: "Top Shelf Picks",
      icon: <BsList size={20} />,
      path: "#",
    },
    {
      title: "Variation List",
      submenu: true,
      subMenuItems: [
        {
          title: "Variation",
          subId: 5,
          icon: <BsList size={20} />,
          path: "#",
        },
        {
          title: "Variation Values",
          subId: 6,
          icon: <BsList size={20} />,
          path: "#",
        },
      ],
      icon: <BsList size={20} />,
      path: "#",
    },
  ];

  const isAuthPage: boolean = pathname === "/auth/signin";

  const toggleSidebar = (): void => {
    setOpen(!open);
  };

  const toggleSubMenu = (index: number) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className={`bg-gray-900 h-screen ${
        open ? "w-65" : "w-20"
      } relative duration-300 z-1111`}
    >
      <BsArrowLeftCircle
        className={`text-2xl rounded-full absolute -right-2 top-9 cursor-pointer  ${
          !open && "rotate-180"
        }`}
        onClick={toggleSidebar}
        style={{ fill: "#821A1A" }}
      />
      <div className="inline-flex px-5 pt-8">
        <h3
          style={{ color: "#821A1A", fontWeight: 700, fontSize: "25px" }}
          className={`duration-300 ${!open && "scale-0"}`}
        >
          Royal Spirit
        </h3>
      </div>

      {/* Scrollable content container */}
      <div className="px-5 mt-10 h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden bg-gray-900">
        <div className="flex items-center rounded-md bg-light-white px-4 py-2 text-lg cursor-pointer mb-4">
          <input
            type="search"
            className={`text-white -ml-1 border border-white  focus:border-red-800 bg-black focus:outline-2 focus:outline-offset-8 focus:outline-gray-900 pl-2 ${
              !open && "hidden"
            }`}
            placeholder="Search Menu"
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, id) => {
            return (
              <>
                <li
                  key={id}
                  className={`text-gray-400 text-md font-semibold flex items-center gap-x-4 cursor-pointer ${
                    open ? "p-2" : "p-1"
                  } hover:bg-red-800 rounded-md mt-2 
                     ${menu.spacing ? "mt-9" : "mt-2"} ${
                    pathname === menu.path
                      ? "bg-red-800 active:bg-red-800 shadow-2xl"
                      : ""
                  }  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 `}
                >
                  <span className="text-2xl block float-left">{menu.icon}</span>
                  <span
                    className={`font-base text-medium flex-1  ${
                      !open && "hidden"
                    }`}
                    onClick={() => menu.submenu && toggleSubMenu(id)}
                  >
                    <Link href={menu.path}> {menu.title} </Link>
                  </span>
                  {menu.submenu && (
                    <BsChevronDown
                      className={`${openSubMenus[id] ? "rotate-180" : ""}`}
                      onClick={() => toggleSubMenu(id)}
                    />
                  )}
                </li>
                {menu.submenu && openSubMenus[id] && open && (
                  <ul>
                    {menu.subMenuItems?.map((subMenuItem) => (
                      <li
                        key={subMenuItem.subId}
                        className="text-gray-400 text-md font-semibold flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-red-800 rounded-md mt-2 transition duration-300 ease-in-out"
                      >
                        {subMenuItem.icon}
                        {subMenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
