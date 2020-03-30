import { Joi } from 'celebrate';

const pageSchema = Joi.object().keys({
  page: Joi.number(),
});

export default pageSchema;
