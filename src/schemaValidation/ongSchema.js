import { Joi } from 'celebrate';

const ongSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  whatsapp: Joi.string().required().min(12).max(13),
  city: Joi.string().required(),
  uf: Joi.string().required().length(2),
});

export default ongSchema;
