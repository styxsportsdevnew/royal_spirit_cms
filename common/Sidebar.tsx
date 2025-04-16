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
import Image from "next/image";
import Logo from "../assests/images/royallogo.jpeg";
import { RiSearchLine } from "react-icons/ri";
import { RiAwardLine } from "react-icons/ri";
import { RiFileList3Line } from "react-icons/ri";
import { RiListCheck } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { BsFillDiagram2Fill } from "react-icons/bs";
import { BsImage } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { BsBoxes } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";

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
      icon: <RiListCheck size={20} />,
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
      icon: <RiFileList3Line size={20} />,
      path: "#",
    },

    {
      title: "Brand List",
      icon: <BsCardList size={20} />,
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
      icon: <BsList size={20} />,
      path: "#",
    },
    { title: "Contact Us", icon: <RiPhoneLine size={20} />, path: "#" },
    {
      title: "Coupon Codes",
      icon: <BsCheck2Circle size={20} />,
      path: "#",
    },

    { title: "FAQ's", icon: <BsQuestionCircle size={20} />, path: "#" },
    {
      title: "Featured On",
      icon: <BsFillDiagram2Fill size={20} />,
      path: "#",
    },

    {
      title: "Gallery",
      icon: <BsImage size={20} />,
      path: "#",
    },
    { title: "News", icon: <BsFileText size={20} />, path: "#" },
    {
      title: "Offer List",
      icon: <BsCardList size={20} />,
      path: "#",
    },
    { title: "Orders", icon: <RiListCheck size={20} />, path: "#" },
    {
      title: "Platinum Club Member List",
      icon: <BsCardList size={20} />,
      path: "#",
    },
    {
      title: "Product",
      icon: <BsBoxes size={20} />,
      path: "#",
    },
    {
      title: "Product Quotations",
      icon: <BsBriefcase size={20} />,
      path: "#",
    },
    {
      title: "Registered Users",
      icon: <BsFillPeopleFill size={20} />,
      path: "#",
    },
    {
      title: "Reviews",
      icon: <BsStar size={20} />,
      path: "#",
    },
    {
      title: "Subscribers",
      icon: <BsPersonLinesFill size={20} />,
      path: "#",
    },
    {
      title: "Testimonials",
      icon: <BsEnvelopePaper size={20} />,
      path: "#",
    },
    {
      title: "Top Shelf Picks",
      icon: <RiListCheck size={20} />,
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
      icon: <BsCardList size={20} />,
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

  const handleMouseEnter = () => {
    if (!open) setOpen(true);
  };

  const handleMouseLeave = () => {
    if (open) setOpen(false);
  };

  return (
    <div
      className={`bg-gray-900 h-screen ${
        open ? "w-65" : "w-20"
      } relative duration-300 z-1111`}
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
    >
      {!open && (
        <Image
          src={Logo}
          alt="logo"
          className="mr-5 rounded-full absolute -right-4 top-9 cursor-pointer"
        />
      )}

      <BsArrowLeftCircle
        className={`text-2xl rounded-full absolute -right-2 ${
          !open ? "top-6" : "top-9"
        } cursor-pointer  ${!open && "rotate-180"}`}
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
            className={`text-white -ml-1 border border-white focus:border-red-800 bg-black focus:outline-2 focus:outline-offset-8 focus:outline-gray-900 pl-1 ${
              !open && "hidden"
            } rounded-sm`}
            placeholder="Search Menu"
          />
        </div>
        {!open && (
          <RiSearchLine
            className="cursor-pointer"
            style={{ color: "#991B1B" }}
            onClick={() => setOpen(true)}
            size={30}
          />
        )}

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
                  }  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100`}
                >
                  <span
                    className="text-2xl block float-left"
                    onClick={() => setOpen(true)}
                  >
                    {menu.icon}
                  </span>
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
                        key={`${menu.title}-${subMenuItem.subId}`}
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
