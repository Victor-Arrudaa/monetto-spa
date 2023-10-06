import z from "zod";

export const signinSchema = z.object({
    email: z.string().nonempty("O email é obrigatório").email().toLowerCase(),
    password: z
        .string()
        .nonempty("A senha é obrigatória")
        .min(8, "No minímo 8 caracteres"),
});
