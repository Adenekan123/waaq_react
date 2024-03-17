import NextAuth from "next-auth";
import { PatientModel } from "./patient";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    apiToken: string | undefined;
  }

  interface User {
    apiToken: string | undefined;
  }
}
