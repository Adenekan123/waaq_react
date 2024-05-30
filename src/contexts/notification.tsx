"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { INotification } from "../types";
import { Socket, io } from "socket.io-client";
import { useUserSession } from "./user";

interface IContextType {
  notifications: INotification[];
  clear: () => void;
  socket: Socket | null;
}

const initial_context: IContextType = {
  notifications: [],
  clear: () => {},
  socket: null,
};

export const NotificationContext = createContext(initial_context);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const { session } = useUserSession();

  const socket = useMemo(
    () => io(import.meta.env.VITE_NOTIFICATION_BASE_URL),
    []
  );

  const clear = useCallback(() => {
    setNotifications([]);
  }, []);

  const listenToNotifications = useCallback(() => {
    if (!session || !socket) return;

    socket.on("connect", () => {
      console.log("Connected");
      socket.emit("userLoggedIn", session);

      socket.on("notification", (data) => {
        console.log(data);
        setNotifications((prevNotifications) =>
          prevNotifications ? [...prevNotifications, data] : prevNotifications
        );
      });

      socket.on("disconnect", () => {
        socket.off("notification");
      });
    });
  }, [socket, session]);



  useEffect(() => {
    listenToNotifications();
    return () => {
      socket.off("notification");
    };
  }, [socket, listenToNotifications]);

  const value = { notifications, clear, socket };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

// Create a custom hook to consume the cart context
export const useNotificationContext = () => {
  return useContext(NotificationContext);
};
