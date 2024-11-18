import { z } from "zod";

export const studentSchemaNew = z.object({
  nombre: z.string().regex(/^[a-zA-Z\s]+$/, {
    message: "El nombre solo puede contener letras .",
  }),
  apellido: z.string().regex(/^[a-zA-Z\s]+$/, {
    message: "El apellido solo puede contener letras .",
  }),
  identificacion: z.string().regex(/^[1-9\s]+$/, {
    message: "El campo solo puede contener números.",
  }),
  fechaNacimiento: z
    .string()
    .regex(/\d{2,4}\-\d{1,2}\-\d{1,2}/, {
      message: "El nombre solo puede contener letras y números.",
    })
    .nullish(),
  email: z.union([
    z.string().email({
      message: "Ingresa un correo electrónico válido.",
    }),
    z.null(),
  ]),
  curso: z.number(),
});
