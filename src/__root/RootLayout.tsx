import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/layout";
import { FloatingCartButton } from "../components/layout/FloatingCart";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FloatingCartButton/>
      <Footer />
    </>
  );
};

export default RootLayout;
