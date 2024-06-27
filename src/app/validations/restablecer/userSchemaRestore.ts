import {z} from 'zod';

export const userSchema = z.object({
    email: z.string().email({
        message:"Ingresa un correo electrónico válido.",
    })
})