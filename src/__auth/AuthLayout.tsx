import { Link, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="bg-[url('/images/female-teacher-helping-kids-in-robotics-lab.jpg')] bg-cover bg-center min-h-screen flex flex-col ">
      <div className="overlay bg-gradient-to-r from-orange-800/70 to-orange-600/40 absolute top-0 left-0 w-full h-full"></div>
      <nav className="flex items-center gap-16 p-3 md:px-36 py-3">
        <Link to={"/"} className="logo text-3xl">
          <img
            src={"/images/logo.png"}
            alt="logo"
            height={220}
            width={220}
            className=" brightness-0 invert"
          />
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
