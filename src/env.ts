import Joi from "joi";

export const env = Joi.object({
  PORT: Joi.number().default(3000),
  MONGODB: Joi.string().uri().default("mongodb://localhost:27017/mercury"),
  STARTING_NUMBER: Joi.number().default(14000000),
}).validate(process.env).value as {
  /** Default value: 3000 */
  PORT: number;
  /** Default value: mongodb://localhost:27017/mercury */
  MONGODB: string;
  /** Default value: 14000000 */
  STARTING_NUMBER: number
};
