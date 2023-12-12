"use client";
import { Snippet } from "prisma/prisma-client";
import { URLs } from "@/lib/network";
import axios from "axios";
import { useQuery } from "react-query";
import { SnippetCard } from "@/components/snippetCard";

export default function Home() {
  const getFeed = async () => {
    const response = await axios.get(URLs.getFeed);
    return response.data;
  };

  const { data } = useQuery<Snippet[]>("feed", getFeed);

  return (
    <main className="px-6 my-6">
      <div className="columns-4 gap-5">
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
