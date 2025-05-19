import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { ReactNode } from "react";
import Steps from "@/components/Steps";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxwidthWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxwidthWrapper>
  );
};

export default Layout;
