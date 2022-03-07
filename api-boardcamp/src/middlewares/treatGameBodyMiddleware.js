import treatString from "../utils/treatString.js";

export default function treatGameBodyMiddleware(req, res, next) {
    const body = {
        ...req.body,
        name: treatString(req.body.name),
        stockTotal: Number(req.body.stockTotal),
        pricePerDay: Number(req.body.pricePerDay)
    }
    req.body = body
    next();
}