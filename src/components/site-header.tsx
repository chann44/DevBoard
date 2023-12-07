"use client";

import { LucideSearch } from "lucide-react";
import { Logo } from "./logo";
import { CreateBoard } from "./modals/modal-create-board";
import { UserNav } from "./user-nav";
import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { ModalCreateSnippet } from "./modals/modal-create-snippet";

export function SiteHeader() {
  const { data } = useSession();
  return (
    <nav className="flex justify-between h-16 items-center px-4 sm:px-8 w-full border-b">
      <div className="flex">
        <Logo />
      </div>
      <div className="bg-popover w-full max-w-md rounded-full flex items-center px-4 border-input border">
        <LucideSearch />
        <input
          role="search"
          className="bg-transparent py-2 px-1 focus:outline-none"
        />
      </div>
      {data?.user.email ? (
        <div className="flex items-center gap-10">
          <CreateBoard />
          <ModalCreateSnippet />
          <UserNav />
        </div>
      ) : (
        <Button
          onClick={async () => {
            await signIn("google");
          }}
          variant={"outline"}
        >
          Continue with Google
        </Button>
      )}
    </nav>
  );
}
