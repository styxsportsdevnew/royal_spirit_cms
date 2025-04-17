"use client";
import Counter from "@/components/Counter";
import { RootState } from "@/redux/store";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const CollapsibleSidebar: React.FC = () => {
  const pathname: string = usePathname();
  console.log("Current Path", pathname);

  const user = useSelector((state: RootState) => state?.auth?.userType);
  console.log("Redux User:", user);

  const isAuthPage: boolean = pathname === "/login";

  if (isAuthPage || user != "admin") {
    window.location.href = "/login";
    return null;
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <h3>Counter App</h3>
        <Counter />
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
