"use client";
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useUser } from "../providers/AppContextProvider";

export default function AuthButtons() {
  const { name, setName, email, setEmail } = useUser();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name ?? "");
      setEmail(session.user.email ?? "");
    } else if (status === "unauthenticated") {
      setName("");
      setEmail("");
    }
  }, [session, status, setName, setEmail]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        <p>Hello {name}, signed in as {email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <p>Hello guest</p>
      <button onClick={() => signIn("github")}>Sign in</button>
    </>
  );
}
