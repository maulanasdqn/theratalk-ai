import { DefaultSession } from "next-auth";
import { TUser, TToken } from "@/entities";

declare module "@auth/core/types" {
  interface User extends TUser {}

  interface Session {
    user: TUser;
  }
}

declare module "@auth/core/jwt" {
  interface JWT extends TToken {}
}
