import Router from 'express-promise-router' // Evita que se tenga que capturar el error con try catch
import { getTaladros, getTaladro, createTaladro, updateTaladro, deleteTaladro } from './controller.js';
import { getTaladroSchema, createTaladroSchema, updateTaladroSchema } from './schema.js'
import { validarSchema } from '../../middlewares/validarSchema.handler.js';

const router = Router();

router
  .get('/', getTaladros)
  .get('/:TaladroId', validarSchema(getTaladroSchema, 'params'), getTaladro)
  .post('/', validarSchema(createTaladroSchema, 'body'), createTaladro)
  .put('/:TaladroId', validarSchema(getTaladroSchema, 'params'), validarSchema(updateTaladroSchema, 'body'), updateTaladro)
  .delete('/:TaladroId', validarSchema(getTaladroSchema, 'params'), deleteTaladro);

export default router;
