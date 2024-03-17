"use client";

import { useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiOutlineExternalLink } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsCaretDownFill } from "react-icons/bs";
import { Container, CustomButton, Drawer, Stack } from "../../ui";
import { Link, useParams } from "react-router-dom";
import { navigations } from "../../../static";
import { Navigation } from "./navigation";
import { UserGateway } from "./user-gateway";
import { useCartContext } from "../../../contexts";
import { Search } from "./search";
import { Cart } from "./cart";

const MobileMenu = () => {
  const [state, setState] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  return (
    <Container styles="block lg:hidden z-[2000] bg-transparent absolute top-0 left-0 w-full">
      <nav className="flex items-center justify-between py-3 ">
        <Link to={"#"} className="logo text-3xl">
          <img
            src={"/images/logo.png"}
            alt="logo"
            height={200}
            width={200}
            className=" brightness-0 invert"
          />
        </Link>
        <CustomButton
          title={!state ? <HiMenu size={24} /> : <IoClose size={24} />}
          whenClicked={() => setState((prev) => !prev)}
        />
      </nav>
      <div
        className={`menu absolute top-20 left-0 w-full   ${
          state ? "max-h-[700px]" : "max-h-0"
        } overflow-hidden transition-all duration-150 ease-linear`}
      >
        <Stack
          direction="flex-col"
          gap="gap-5"
          styles="bg-orange-50 px-6 py-6 text-lg font-semibold rounded-xl transition-all w-[93%] mx-auto capitalize shadow-2xl border-orange-500"
        >
          {navigations.map((navigation, i) => (
            <Navigation
              key={navigation.url + i + "url"}
              {...navigation}
              close={() => setState(false)}
            />
          ))}
          <UserGateway
            signin={showSignin}
            togglesignin={setShowSignin}
            mobile
          />
        </Stack>
      </div>
    </Container>
  );
};

const DesktopMenu = () => {
  const { state,toggleCart } = useCartContext();
  const [dropdown, setDropdown] = useState({ shop: false, solutions: false });
  const [showSignin, setShowSignin] = useState(false);
  const { signin } = useParams();

  useEffect(() => {
    if (signin) setShowSignin(true);
  }, [signin]);

  return (
    <div className="w-full py-4 text-white font-bold hidden lg:block absolute top-0 left-0 z-[200]">
      <Container>
        <div className="flex justify-between items-center">
          <nav className="flex items-center gap-16">
            <Link to={"/"} className="logo text-3xl">
              <img
                src={"/images/logo.png"}
                alt="logo"
                height={220}
                width={220}
                className=" brightness-0 invert"
              />
            </Link>
            <div className="ml-8 flex gap-8">
              <Link to={"/"}>Home</Link>
              <Link to={"/about-us"}>About</Link>
              <div className="relative z-10">
                <Link
                  to={"#"}
                  // href={dropShop ? "shop":'#'}
                  className="flex justify-between items-center gap-x-2 relative z-10"
                  onClick={() =>
                    setDropdown((prev) => ({
                      solutions: false,
                      shop: !prev.shop,
                    }))
                  }
                >
                  <span>Shop</span>
                  <BsCaretDownFill />
                </Link>
                <div
                  className={`bg-orange-50 text-slate-500 overflow-hidden shadow-2xl text-md absolute top-8 min-w-max rounded-lg -left-3/4 ${
                    dropdown.shop
                      ? "translate-y-0 visible"
                      : "-translate-y-2 invisible "
                  } transition-transform `}
                >
                  <Link
                    to={"/shop"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                    onClick={() =>
                      setDropdown({ shop: false, solutions: false })
                    }
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Kits
                  </Link>
                  <Link
                    to={"/shop"}
                    className="flex gap-3 items-center hover:bg-orange-100  px-6 py-3"
                    onClick={() =>
                      setDropdown({ shop: false, solutions: false })
                    }
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Courses
                  </Link>
                  <Link
                    to={"/shop"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                    onClick={() =>
                      setDropdown({ shop: false, solutions: false })
                    }
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Accessories
                  </Link>
                </div>
              </div>
              <div className="relative z-10">
                <Link
                  to={"#"}
                  // href={dropShop ? "shop":'#'}
                  className="flex justify-between items-center gap-x-2 relative z-10"
                  onClick={() =>
                    setDropdown((prev) => ({
                      shop: false,
                      solutions: !prev.solutions,
                    }))
                  }
                >
                  <span>Solutions</span>
                  <BsCaretDownFill />
                </Link>
                <div
                  className={`bg-orange-50 text-slate-500 overflow-hidden shadow-2xl text-md absolute top-8 min-w-max rounded-lg -left-3/4 ${
                    dropdown.solutions
                      ? "translate-y-0 visible"
                      : "-translate-y-2 invisible "
                  } transition-transform `}
                >
                  <Link
                    to={"/solutions/schools"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                    onClick={() =>
                      setDropdown({ shop: false, solutions: false })
                    }
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Schools
                  </Link>
                  <Link
                    to={"/solutions/partner"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                    onClick={() =>
                      setDropdown({ shop: false, solutions: false })
                    }
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Partners
                  </Link>
                  <Link
                    to={"/solutions/lab"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                    onClick={() =>
                      setDropdown({ shop: false, solutions: false })
                    }
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Lab
                  </Link>
                  <Link
                    to={"/product/65cf15b418be96a9d70022d0"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                    onClick={() =>
                      setDropdown({ shop: false, solutions: false })
                    }
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Robotics classroom bundle
                  </Link>
                </div>
              </div>{" "}
            </div>
          </nav>
          <nav className="flex items-center gap-8 relative">
            <Search/>
            <button
              className="text-white relative"
              onClick={toggleCart}
            >
              <FaCartShopping size={20} />
              {state.totalQty ? (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-white border-2 border-orange-200 rounded-full -top-3 -end-3 ">
                  {state.totalQty}
                </div>
              ) : null}
            </button>

            <UserGateway signin={showSignin} togglesignin={setShowSignin} />
          </nav>
        </div>
      </Container>
    </div>
  );
};

export const Header = () => {
  const { state, toggleCart } = useCartContext();

  return (
    <>
      <DesktopMenu />
      <MobileMenu />
      <Drawer open={state?.visible}>
        <Cart close={toggleCart} />
      </Drawer>
    </>
  );
};
