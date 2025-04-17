"use client";
import Login from "@/components/Login";
import { RootState } from "@/redux/store";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LoginPage: React.FC = () => {
  const pathname: string = usePathname();
  console.log("Current Path", pathname);

  const user = useSelector((state: RootState) => state?.auth?.userType);
  console.log("Redux User:", user);

  const isAuthPage: boolean = pathname === "/login";
  useEffect(() => {
    if (user === "admin") {
      window.location.href = "/";
    }
  }, [isAuthPage, user]);

  return (
    <div>
      <Login></Login>
    </div>
  );
};

export default LoginPage;
