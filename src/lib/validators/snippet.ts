import { z } from "zod";

export const SnippetValidator = z.object({
  title: z.string(),
  language: z.string(),
  description: z.string(),
  code: z.string(),
});
