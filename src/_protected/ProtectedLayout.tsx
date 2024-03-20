import { Outlet, useNavigate } from "react-router-dom";
import { checkAuthUser } from "../API/auth";
import { useEffect } from "react";

const ProtectedLayout = () => {
  const session = checkAuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session?.user) navigate("/");
  }, [session?.user, navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
