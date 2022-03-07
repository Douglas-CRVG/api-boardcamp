import treatString from "../utils/treatString.js";

export default function treatCategoryName(req, res, next) {
    req.body.name = treatString(req.body.name);
    next();
}