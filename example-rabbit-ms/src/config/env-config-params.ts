import * as Joi from 'joi';

export const envConfigParam = {
  envFilePath: [`.env.${process.env.NODE_ENV || 'local'}`],
  cache: true,
  validationSchema: Joi.object({
    NODE_ENV: Joi.string().valid('test', 'local', 'dev', 'prod').required(),
    PORT: Joi.number().required(),
    RABBIT_MQ_URI: Joi.string().required(),
    RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
  }),
  isGlobal: true,
};
