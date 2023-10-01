import Joi from 'joi';
import Mensajes from '../../config/mensajesJoi.js';

const TaladroId = Joi.number().integer().positive().required().messages(Mensajes);
const Codigo = Joi.string().max(30).required().messages(Mensajes);
const Descripcion = Joi.string().min(6).max(400).required().messages(Mensajes);
const RegistroActivo = Joi.number().integer().positive().required().messages(Mensajes);
const FechaActualizacion = Joi.date().required().messages(Mensajes);
const UsuarioActualizacion = Joi.string().max(50).required().messages(Mensajes);

export const getTaladroSchema = Joi.object({
  TaladroId: TaladroId.required()
});

export const createTaladroSchema = Joi.object({
  Codigo: Codigo,
  Descripcion: Descripcion,
  RegistroActivo: RegistroActivo,
  FechaActualizacion: FechaActualizacion,
  UsuarioActualizacion: UsuarioActualizacion,
});

export const updateTaladroSchema = Joi.object({
  Codigo: Codigo,
  Descripcion: Descripcion,
  RegistroActivo: RegistroActivo,
  FechaActualizacion: FechaActualizacion,
  UsuarioActualizacion: UsuarioActualizacion,
});

