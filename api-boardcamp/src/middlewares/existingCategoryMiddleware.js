import connection from "../db.js";
import treatCategoryName from "../utils/treatString.js";

export default async function existingCategory(req, res, next) {
    const result = await connection.query(`
    SELECT
        *
        FROM
            categories
        WHERE
            name = $1
    `,[req.body.name]);
    if(result.rowCount > 0) {
        return res.sendStatus(409)
    }
    next();
}