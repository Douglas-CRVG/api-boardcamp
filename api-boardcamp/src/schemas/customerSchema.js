import joi from "joi";

const customerSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string().pattern(/^[0-9]{10,11}$/).required(),
    cpf: joi.string().pattern(/^[0-9]{11}$/).required(),
    birthday: joi.string().pattern(/^(0[0-9]|1[0-9]|20)([0-9][0-9])\-(0[1-9]|1[0-2])\-(0[1-9]|1[0-9]|3[0-1])$/).required()
});

export default customerSchema;