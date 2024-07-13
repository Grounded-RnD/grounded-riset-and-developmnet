"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider refetchOnWindowFocus refetchInterval={300}>
      {children}
    </SessionProvider>
  );
}
