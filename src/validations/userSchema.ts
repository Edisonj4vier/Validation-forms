import { date, z } from 'zod';

export const userSchema = z.object({
  name: z.string().refine(data => data.length > 0, {
    message: 'El nombre es obligatorio'
  }).refine(data => data.length >= 3, {
    message: 'El nombre debe tener al menos 3 caracteres'
  }).refine(data => data.length <= 30, {
    message: 'El nombre debe tener menos de 30 caracteres'
  }),

  lastName: z.string().refine(data => data.length > 0, {
    message: 'El apellido es obligatorio'
  }).refine(data => data.length >= 3, {
    message: 'El apellido debe tener al menos 3 caracteres'
  }).refine(data => data.length <= 30, {
    message: 'El apellido debe tener menos de 30 caracteres'
  }),

  idRuc: z.string().refine(data => data.length > 0, {
    message: 'El RUC o cédula es obligatorio'
  }).refine(data => (data.length === 10 && !isNaN(parseInt(data))) || (data.length === 13 && !isNaN(parseInt(data.slice(0, 10)))), {
    message: 'El ID debe tener 10 caracteres para cédula o 13 caracteres para RUC y ser un número'
  }).refine(data => !isNaN(parseInt(data)), {
    message: 'El RUC debe ser un número'
  }),

  phone: z.string().refine(data => data.length > 0, { message: 'El teléfono es obligatorio' }).refine(data => data.length >= 10,
    { message: 'El teléfono debe tener 10 caracteres' }).refine(data => data.length <= 10,
      { message: 'El teléfono debe tener máximo 10 caracteres' }).refine(data => !isNaN(parseInt(data)),
        { message: 'El teléfono debe ser un número' }),

  birthday: z.string().refine(data => data.trim().length > 0, {
    message: 'La fecha de nacimiento es obligatoria'
  }).refine(data => new Date(data).toString() !== "Invalid Date", {
    message: 'La fecha de nacimiento debe ser una fecha'
  }).refine(date => { const limitDate = new Date('1900-01-01'); return new Date(date) > limitDate; }, {
    message: 'La fecha de nacimiento debe ser mayor a 1900-01-01'
  }),

  salary: z.string().refine(salary => salary.length > 0, {
    message: 'El salario es obligatorio',
  }).refine(salary => parseFloat(salary) >= 465, {
    message: 'El salario debe ser mayor o igual al salario básico unificado (465)'
  }).refine(salary => parseFloat(salary) <= 5000, {
    message: 'El salario debe ser menor o igual a 5000'
  }).refine(salary => !isNaN(parseFloat(salary)), {
    message: 'El salario debe ser un número'
  }),

  email: z.string().min(1, { message: 'El email es obligatorio' }).email({ 
    message: 'El email debe ser válido' }),

  url: z.string().min(1, {
    message: 'La url es obligatoria'
  }).url({ message: 'La url debe ser válida' }),

  password: z.string().refine(password => password.length > 0, {
    message: 'La contraseña es obligatoria',
  }).refine(password => password.length >= 8 && password.length <= 12, {
    message: 'La contraseña debe tener entre 8 y 12 caracteres',
  }).refine(password => /[A-Z]/.test(password), {
    message: 'La contraseña debe tener al menos una mayúscula',
  }).refine(password => /[a-z]/.test(password), {
    message: 'La contraseña debe tener al menos una minúscula',
  }).refine(password => /[\d]/.test(password), {
    message: 'La contraseña debe tener al menos un número',
  }).refine(password => /[\W]/.test(password), {
    message: 'La contraseña debe tener al menos un carácter especial',
  })
});
