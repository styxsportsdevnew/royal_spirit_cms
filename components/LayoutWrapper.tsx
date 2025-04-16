import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/common/Sidebar";
import Header from "@/common/Header";

interface LayoutWrapperProps {
  children: React.ReactNode;
  title?: string; // Optional prop for dynamic header title
}

const LayoutWrapper: FC<LayoutWrapperProps> = ({
  children,
  title = "Header",
}) => {
  const pathname: string = usePathname();
  console.log("Current Path", pathname);

  const isAuthPage: boolean = pathname === "/auth/signin";

  if (isAuthPage) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="p-6 bg-white shadow rounded w-full max-w-md">
          {children}
        </div>
      </main>
    );
  }

  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden p-6">
        <header className="bg-white shadow border rounded-lg mb-6 px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="bg-white rounded-lg shadow p-6 w-full h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
