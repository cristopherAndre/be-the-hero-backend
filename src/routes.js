import express from 'express';
import { celebrate, Segments } from 'celebrate';
import OngController from './controllers/OngController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';
import ongSchema from './schemaValidation/ongSchema';
import pageSchema from './schemaValidation/pageSchema';
import deleteIncidentSchema from './schemaValidation/deleteIncidentSchema';
import profileSchema from './schemaValidation/profileSchema';

const routes = express.Router();

routes.post('/sessions', SessionController.create);

// ONGS
routes.get('/ongs', OngController.index);

routes.post(
  '/ongs',
  celebrate({ [Segments.BODY]: ongSchema }),
  OngController.create
);

// INCIDENTS
routes.get(
  '/incidents',
  celebrate({ [Segments.QUERY]: pageSchema }),
  IncidentController.index
);

routes.post('/incidents', IncidentController.create);

routes.delete(
  '/incidents/:id',
  celebrate({ [Segments.PARAMS]: deleteIncidentSchema }),
  IncidentController.delete
);

// PROFILE
routes.get(
  '/profile',
  celebrate({ [Segments.HEADERS]: profileSchema }),
  ProfileController.index
);

export default routes;
