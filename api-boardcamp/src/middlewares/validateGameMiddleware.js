import connection from "../db.js";

export default async function validateGameMiddleware(req, res, next) {
    const game = req.body;
    const categoryId = await connection.query(`
    SELECT
        *
        FROM
            categories
        WHERE
            id = $1
    `,[game.categoryId]);
    if(!(categoryId.rowCount > 0)) {
        return res.sendStatus(400)
    }
    const gameName = await connection.query(`
    SELECT
        *
        FROM
            games
        WHERE
            name = $1
    `,[game.name]);
    if(gameName.rowCount > 0){
        return res.sendStatus(409)
    }
    next();
}