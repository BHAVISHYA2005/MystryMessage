import { z } from "zod";

export const acceptinMessagegSchema = z.object({
  isAcceptingMessage: z.boolean()
});
