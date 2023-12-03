"use client";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

export default function Home() {
  const { data } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.user?.email ? (
        <div>
          <p>{data?.user?.name}</p>
          <Button
            onClick={async () => {
              await signOut();
            }}
            variant={"outline"}
          >
            Log out
          </Button>
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
    </main>
  );
}
