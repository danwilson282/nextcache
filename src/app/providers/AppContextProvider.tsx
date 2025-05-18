// app/context/ThemeContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type User = {
  name: string | undefined | null;
  email: string | undefined | null;
  setName: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  setEmail: React.Dispatch<React.SetStateAction<string | null | undefined>>;
};

const AppContext = createContext<User | undefined>(undefined);

export const AppContextProvider= ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string | null | undefined>(undefined);
  const [email, setEmail] = useState<string | null | undefined>(undefined);
  return (
    <AppContext.Provider value={{ name, email, setName, setEmail }}>
      {children}
    </AppContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useUser must be used inside AppContextProvider");
  return context;
};
