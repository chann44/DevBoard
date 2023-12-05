"use client";

import { QueryClient, QueryClientProvider } from "react-query";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

const queryClient = new QueryClient();

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}
