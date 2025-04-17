"use client";
import Login from '@/components/Login';
import { RootState } from '@/redux/store';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

const LoginPage: React.FC = () => {
    const pathname: string = usePathname();
      console.log("Current Path", pathname);
    
      const user = useSelector((state: RootState) => state?.auth?.userType);
      console.log("Redux User:", user);
    
      const isAuthPage: boolean = pathname === "/login";
    
      if (isAuthPage || user === "admin") {
        window.location.href = "/";
        return null;
        }
    
    return (
        <div>
            <Login></Login>
        </div>
    );
};

export default LoginPage;