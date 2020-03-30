import { Joi } from 'celebrate';

const profileSchema = Joi.object({
  authorization: Joi.string().required(),
}).unknown();

export default profileSchema;
