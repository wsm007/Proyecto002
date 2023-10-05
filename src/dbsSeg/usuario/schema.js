import Joi from 'joi';
import Mensajes from '../../config/mensajesJoi.js';

const Nombre = Joi.string().max(30).required().messages(Mensajes);
const Email = Joi.string().min(6).max(400).required().email().messages(Mensajes);
const Password = Joi.string().min(6).max(256).required().messages(Mensajes);
const ConfirmPassword = Joi.string().min(6).max(256).required().messages(Mensajes);
const Estado = Joi.string().max(1).required().messages(Mensajes);
const FechaAlta = Joi.date().required().messages(Mensajes);
const RegistroActivo = Joi.number().integer().positive().required().messages(Mensajes);
const FechaActualizacion = Joi.date().required().messages(Mensajes);
const UsuarioActualizacion = Joi.string().max(50).required().messages(Mensajes);

export const signinSchema = Joi.object({
  Email: Email,
  Password: Password
});

export const signupSchema = Joi.object({
  Nombre: Nombre,
  Password: Password,
  ConfirmPassword: ConfirmPassword,
  Email: Email,
  Estado: Estado,
  FechaAlta: FechaAlta,
  RegistroActivo: RegistroActivo,
  FechaActualizacion: FechaActualizacion,
  UsuarioActualizacion: UsuarioActualizacion,
});
