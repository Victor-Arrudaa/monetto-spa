import { z } from "zod";

export const transactionSchema = z.object({
    value: z
        .string()
        .min(1, "O valor precisa ter no minímo 1 caracter")
        .transform((value) => Number(value)),
    description: z
        .string()
        .min(3, "A descrição precisa ter no minímo 3 caracteres"),
});
