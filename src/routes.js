import express from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import OngController from './controllers/OngController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);

// Validation
routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(12).max(13),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  OngController.create
);

routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object({
      page: Joi.number(),
    }),
  }),
  IncidentController.index
);

routes.post('/incidents', IncidentController.create);

routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.delete
);

routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

export default routes;
