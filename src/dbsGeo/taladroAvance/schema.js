import Joi from 'joi';
import Mensajes from '../../config/mensajesJoi.js';

const TaladroAvanceId = Joi.number().integer().positive().required().messages(Mensajes);
const TaladroId = Joi.number().integer().positive().required().messages(Mensajes);
const Fecha = Joi.date().required().messages(Mensajes);
const Turno = Joi.string().max(1).required().messages(Mensajes);
const TipoDiametro = Joi.number().integer().positive().required().messages(Mensajes);
const Desde = Joi.number().positive().required().messages(Mensajes);
const Hasta = Joi.number().positive().required().messages(Mensajes);
const FechaActualizacion = Joi.date().required().messages(Mensajes);
const UsuarioActualizacion = Joi.string().max(50).required().messages(Mensajes);

export const getTaladroAvancesSchema = Joi.object({
  TaladroId: TaladroId.required()
});

export const getTaladroAvanceSchema = Joi.object({
  TaladroId: TaladroId.required(),
  TaladroAvanceId: TaladroAvanceId.required()
});

export const createTaladroAvanceSchema = Joi.object({
  TaladroId: TaladroId,
  Fecha: Fecha,
  Turno: Turno,
  TipoDiametro: TipoDiametro,
  Desde: Desde,
  Hasta: Hasta,
  FechaActualizacion: FechaActualizacion,
  UsuarioActualizacion: UsuarioActualizacion,
});

export const updateTaladroAvanceSchema = Joi.object({
  TaladroId: TaladroId,
  Fecha: Fecha,
  Turno: Turno,
  TipoDiametro: TipoDiametro,
  Desde: Desde,
  Hasta: Hasta,
  FechaActualizacion: FechaActualizacion,
  UsuarioActualizacion: UsuarioActualizacion,
});

