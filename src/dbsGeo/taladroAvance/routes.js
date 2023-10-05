import Router from 'express-promise-router' // Evita que se tenga que capturar el error con try catch
import { getTaladroAvances, getTaladroAvance, createTaladroAvance, updateTaladroAvance, deleteTaladroAvance } from '../../dbsGeo/taladroAvance/controller.js';
import { getTaladroAvancesSchema, getTaladroAvanceSchema, createTaladroAvanceSchema, updateTaladroAvanceSchema } from '../../dbsGeo/taladroAvance/schema.js';
import { validarSchema } from '../../middlewares/validarSchema.handler.js';

const router = Router();

router
  .get('/:TaladroId', validarSchema(getTaladroAvancesSchema, 'params'), getTaladroAvances)
  .get('/:TaladroId/:TaladroAvanceId', validarSchema(getTaladroAvanceSchema, 'params'), getTaladroAvance)
  .post('/', validarSchema(createTaladroAvanceSchema, 'body'), createTaladroAvance)
  .put('/:TaladroAvanceId', validarSchema(getTaladroAvanceSchema, 'params'), validarSchema(updateTaladroAvanceSchema, 'body'), updateTaladroAvance)
  .delete('/:TaladroAvanceId', validarSchema(getTaladroAvanceSchema, 'params'), deleteTaladroAvance);

export default router;
