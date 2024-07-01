import {z} from 'zod';

export const userSchemaLogin = z.object({
    email: z.string().email({
        message:"Ingresa un correo electrónico válido.",
    }),
    password: z.string().min(3, {
        message: "La contraseña debe ser al menos de 3 caracteres.",
    })
})