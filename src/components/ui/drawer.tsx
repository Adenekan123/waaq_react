import { ReactNode } from "react";
export const Drawer = ({
  children,
  open,
  left,
}: {
  children: ReactNode;
  open: boolean;
  left?: boolean;
}) => {
  return (
    <>
      <div
        id="drawer-example"
        className={`fixed top-0 ${
          left ? "left-0" : "right-0"
        } z-[2000]  h-screen overflow-y-auto transition-transform ${
          open
            ? "translate-x-0"
            : left
            ? "-translate-x-full"
            : "translate-x-full"
        }  bg-orange-50 shadow-2xl w-[100%] md:w-[45%] lg:w-[25%] `}
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
        {children}
      </div>
    </>
  );
};
