import treatString from "../utils/treatString.js";

export default function treatCustomer(req, res, next) {
    const  body = {
        ...req.body,
        name: treatString(req.body.name),
        birthday: req.body.birthday.substr(0,10)
    }
    req.body = body
    next()
}