import { z } from "zod";

export const messageSchema = z.object({
  content: z.string().min(1, { message: "Message cannot be empty" }),
  createdAt: z.date().optional()
});
