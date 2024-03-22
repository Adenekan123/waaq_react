import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { checkAuthUser } from "../API/auth";
import {IUserAuth } from "../types";

type TUserSession = {
  session: IUserAuth | undefined;
  updateSession: () => void;
};
export const UserContext = createContext<TUserSession>({
  session: {
    user: {
      name: "",
      email: "",
      phone: "",
      role: "",
      status: 0,
    },
    accesToken: "",
    refreshToken: "",
  },
  updateSession: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<IUserAuth>();

  const updateSession = useCallback(() => {
    const session = checkAuthUser();
    if (session) setSession(session);
  }, []);

  useEffect(() => {
    updateSession();
  }, [updateSession]);

  const value = {
    session,
    updateSession,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserSession = () => useContext(UserContext);
