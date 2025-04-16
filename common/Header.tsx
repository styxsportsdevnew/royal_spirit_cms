import React, { FC, useState, useRef, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { BsPerson } from "react-icons/bs";
import { BsPower } from "react-icons/bs";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const goToProfileUpdate = () => {
    router.push("/profile");
    setIsOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    router.push("/");
  };

  // Close dropdown when clicking outside of the icon + menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="bg-white shadow border rounded-lg mb-6 px-6 py-2">
        <div className="flex justify-end items-center space-x-4 relative">
          <div className="text-end text-gray-600">
            <h3 className="font-semibold">9944332255</h3>
            <p className="text-xs pr-10">Available</p>
          </div>

          <div
            className="cursor-pointer relative pr-10"
            ref={dropdownRef} // <-- wraps both icon and dropdown
            aria-label="User Profile Icon"
          >
            <BsPersonCircle
              size={40}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50 transition-all duration-200 ease-in-out">
                <ul className="py-2 text-sm text-gray-400 font-semibold">
                  <li
                    className="flex items-center px-4 py-2 hover:bg-red-800 cursor-pointer"
                    onClick={goToProfileUpdate}
                  >
                    <BsPerson className="mr-2" size={18} />{" "}
                    <span>Profile Update</span>
                  </li>
                  <li
                    className="flex items-center px-4 py-2 hover:bg-red-800 cursor-pointer"
                    onClick={logout}
                  >
                    <BsPower className="mr-2" size={18} /> <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
