import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/layout";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
