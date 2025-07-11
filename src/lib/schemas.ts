import z from "zod";

export const searchSchema = z.object({
  query: z
    .string()
    .max(20, { message: "제목은 20글자를 넘을 수 없습니다." })
    .min(1, { message: "" }),
});
