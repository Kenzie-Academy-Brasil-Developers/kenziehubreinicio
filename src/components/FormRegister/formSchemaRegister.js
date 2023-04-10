import { z } from "zod";

export const formSchemaRegister = z.object({
    name: z.string().nonempty('Nome obrigatório'),
    email: z.string().min(1, 'Email obrigatório').email('Forneça email válido'),
    password: z.string().min(8,'Senha tem que ter ao menos 8 caracteres.')
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirm: z.string().min(1, 'Confirmar sua senha!'),
    bio: z.string().optional(),
    contact: z.string().nonempty('Colocar ao menos uma opção diferente de contato'),
    course_module:z.string().nonempty('selecionar um módulo')
}).refine(({password, confirm}) => confirm === password, {
    message: 'As senhas precisam ser iguais',
    path:['confirm'],
})