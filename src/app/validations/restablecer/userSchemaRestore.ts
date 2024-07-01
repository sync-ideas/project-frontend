import {z} from 'zod';

export const userSchemaRestore = z.object({
    email: z.string().email({
        message:"Ingresa un correo electrónico válido.",
    })
})