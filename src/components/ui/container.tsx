import { IContainer } from "../../types";

export const Container = ({ children, styles }: IContainer) => {
  return (
    <div className={`px-4 md:px-20 xl:px-80 w-full ${styles}`}>{children}</div>
  );
};
