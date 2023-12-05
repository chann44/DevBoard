import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { BoardValidator } from "@/lib/validators/board";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name } = BoardValidator.parse(body);

    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const board = await db.board.create({
      data: {
        name,
        creator: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });
    console.log(board);

    return new NextResponse("OK", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response(
      "Could not post to subreddit at this time. Please try later",
      { status: 500 }
    );
  }
}
