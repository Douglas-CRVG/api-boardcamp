import joi from "joi";

const gameSchema = joi.object({
    name: joi.string().min(1).required(),
    image: joi.string().pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i).required(),
    stockTotal: joi.number().min(1).required(),
    categoryId: joi.number().min(1).required(),
    pricePerDay: joi.number().min(1).required()
});

export default gameSchema;