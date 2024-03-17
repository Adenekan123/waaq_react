"use client";

import { useEffect, useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { TbShoppingCartCog } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserAccount } from "../../../lib/react-query/queriesAndMutations";
import { removeUser } from "../../../API/auth";
import { toast } from "react-toastify";

export const ProfileDropdown = () => {
  const [hide, setHide] = useState(true);
  const { mutateAsync: signOut, isPending, isSuccess } = useLogoutUserAccount();
 const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      removeUser();
      toast.success("Logged out successfully");
      navigate("/");
    }
  }, [isSuccess,navigate]);

  return (
    <div className="relative">
      <button
        onClick={() => setHide((prev) => !prev)}
        className="border-8 border-white rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-2 0px 1px 1px rgba(0, 0, 0, 0.5) inline-flex items-center gap-x-6"
      >
        <FaUserCircle size={22} />
        <span>Adenekan</span>
        <BsCaretDownFill size={16} />
      </button>
      {hide ? null : (
        <div className="pt-6 rounded-md shadow-2xl shadow-orange-500 text-black bg-orange-50 relative md:absolute top-3 md:top-24 md:left-4 before:w-6 before:h-4 before:bg-orange-100 before:absolute before:z-10 triangle-clip-path">
          <div className="flex flex-col">
            {/* <Link
              href={"/profile"}
              className="flex items-center border-b border-slate-300 px-6 py-3 gap-x-4 hover:bg-orange-100"
            >
              <LuUser size={18} />
              <span>My profile</span>
            </Link> */}
            <Link
              to={"/my-orders"}
              className="flex items-center border-b border-slate-300 px-6 py-3 gap-x-4 hover:bg-orange-100"
              onClick={() => setHide(true)}
            >
              <TbShoppingCartCog size={18} />
              <span>My orders</span>
            </Link>
            <Link
              to={"/settings"}
              className="flex items-center border-b border-slate-300 px-6 py-3 gap-x-4 hover:bg-orange-100"
              onClick={() => setHide(true)}
            >
              <MdSettings size={18} />
              <span>Settings</span>
            </Link>
            <Link
              to={"#"}
              onClick={() => signOut()}
              className="flex items-center border-b border-slate-300 px-6 py-3 gap-x-4 hover:bg-orange-100"
            >
              <CgLogOut size={18} />
              <span>{isPending ? "Signing Out ..." : "Sign Out"}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
