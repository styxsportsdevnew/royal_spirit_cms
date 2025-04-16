import React, { FC } from "react";
import Link from "next/link";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const NotFound: FC<LayoutWrapperProps> = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for is under development.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
