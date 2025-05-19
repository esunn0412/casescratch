import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxwidthWrapper className="flex-1 flex flex-col">
      {children}
    </MaxwidthWrapper>
  );
};

export default Layout;
