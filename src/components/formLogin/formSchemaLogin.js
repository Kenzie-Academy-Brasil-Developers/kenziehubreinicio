import { z } from "zod";

export const formSchemaLogin = z.object({
    email: z.string().min(1,'Email obrigatório').email('Forneça email válido'),
    password: z.string().min(8,'Senha tem que ter ao menos 8 caracteres.')
})