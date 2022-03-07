import treatString from "../utils/treatString.js";

export default function treatCustomer(req, res, next) {
    const  body = {
        ...req.body,
        name: treatString(req.body.name)
    }
    req.body = body
    next()
}