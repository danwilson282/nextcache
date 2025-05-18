// lib/auth.ts
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export function getSession() {
  return getServerSession(authOptions);
}
