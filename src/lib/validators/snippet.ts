import { z } from "zod";

export const SnippetValidator = z.object({
  title: z.string(),
  lanaguage: z.string(),
  description: z.string(),
  boardId: z.string(),
  code: z.string(),
});
