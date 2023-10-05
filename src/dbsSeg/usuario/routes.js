import Router from 'express-promise-router' // Evita que se tenga que capturar el error con try catch
import { signin, signup } from './controller.js';
import { signinSchema, signupSchema } from './schema.js';
import { validarSchema } from '../../middlewares/validarSchema.handler.js';
import { checkApiKey } from '../../middlewares/auth.handler.js';

const router = Router();
router
  .post('/signin', checkApiKey, validarSchema(signinSchema), signin)
  .post('/signup', validarSchema(signupSchema), signup)
  // .post('/signout', signout)
  // .get('/profile', profile);

export default router;
