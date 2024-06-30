import {z} from 'zod';

export const userSchemaNew= z.object({
    username: z.string().regex(/^[a-zA-Z0-9]+$/, {
        message: "El nombre de usuario solo puede contener letras y números.",
    }),
    email: z.string().email({
        message:"Ingresa un correo electrónico válido.",
    }),
    fullname: z.string().regex(/^[a-zA-Z\s]+$/, {
        message: "El nombre solo puede contener letras y espacios.",
    }),
    password: z.string().min(8, {
        message: "La contraseña debe ser al menos de 8 caracteres.",
    })
})