import { Joi } from 'celebrate';

const deleteIncidentSchema = Joi.object().keys({
  id: Joi.number().required(),
});

export default deleteIncidentSchema;
