import { z } from "zod";

export const BoardValidator = z.object({
  name: z.string(),
});

// export type PostCreationRequest = z.infer<typeof PostValidator>;
