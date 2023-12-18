"use client";

import { SnippetCard } from "@/components/snippetCard";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { LucideGithub, LucideLinkedin, LucideTwitter } from "lucide-react";

import { Snippet } from "prisma/prisma-client";
import { URLs } from "@/lib/network";
import axios from "axios";
import { useQuery } from "react-query";

export default function UserProfile() {
  const getFeed = async () => {
    const response = await axios.get(URLs.getFeed);
    return response.data;
  };

  const { data } = useQuery<Snippet[]>("feed", getFeed);
  return (
    <main className="max-w-7xl mx-auto my-10 px-4">
      <div className="flex items-center gap-10 w-full">
        <UserAvatar size={"lg"} />
        <div>
          <h2 className="text-xl font-semibold">Chan44</h2>
          <p className="text-sm mt-1 max-w-md">Snippets About React</p>
        </div>
        <div className="flex gap-4 ml-auto">
          <Button className="rounded-md" variant={"outline"} size={"icon"}>
            <LucideTwitter />
          </Button>
          <Button className="rounded-md" variant={"outline"} size={"icon"}>
            <LucideGithub />
          </Button>
          <Button className="rounded-md" variant={"outline"} size={"icon"}>
            <LucideLinkedin />
          </Button>
        </div>
      </div>
      <hr className="my-4 h-[1px] w-full" />
      <div className="columns-3 gap-5">
        {data?.map((item, index) => {
          return (
            <>
              <SnippetCard key={index} snippet={item} />
              <SnippetCard key={index} snippet={item} />
              <SnippetCard key={index} snippet={item} />
              <SnippetCard key={index} snippet={item} />
              <SnippetCard key={index} snippet={item} />{" "}
              <SnippetCard key={index} snippet={item} />{" "}
              <SnippetCard key={index} snippet={item} />{" "}
              <SnippetCard key={index} snippet={item} />{" "}
              <SnippetCard key={index} snippet={item} />{" "}
              <SnippetCard key={index} snippet={item} />
            </>
          );
        })}
      </div>
    </main>
  );
}
