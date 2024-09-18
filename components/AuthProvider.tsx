"use client";

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
