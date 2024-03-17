import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/layout";
import { CartProvider } from "../contexts";

const RootLayout = () => {
  return (
    <>
      <CartProvider>
        <Header />
      </CartProvider>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
