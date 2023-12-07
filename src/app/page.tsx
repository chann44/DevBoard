"use client";

import { URLs } from "@/lib/network";
import axios from "axios";
import { stringify } from "querystring";
import { useQuery } from "react-query";

export default function Home() {
  // const getBoards = async () => {
  //   const response = await axios.get(URLs.getBoards);
  //   return response.data;
  // };

  // const { data } = useQuery("boards", getBoards);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {JSON.stringify(data)} */}
    </main>
  );
}
