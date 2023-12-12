import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SnippetValidator } from "@/lib/validators/snippet";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { description, language, title, code } = SnippetValidator.parse(body);

    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const snippet = await db.snippet.create({
      data: {
        title,
        description,
        lanaguage: language,
        code,
        creator: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });
    console.log(snippet);

    return new NextResponse("OK", {
      status: 200,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response(
      "Could not post to subreddit at this time. Please try later",
      { status: 500 }
    );
  }
}
