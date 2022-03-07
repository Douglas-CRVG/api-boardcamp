import connection from "../db.js";
export default async function validateRentalMiddleware(req, res, next){
    const rental = req.body
    const customerId = await connection.query(`
    SELECT
        *
        FROM
            customers
        WHERE
            id = $1
    `,[rental.customerId]);
    if(!(customerId.rowCount > 0)){
        return res.sendStatus(400)
    }

    const gameName = await connection.query(`
    SELECT
        *
        FROM
            games
        WHERE
            id = $1
    `,[rental.gameId]);
    if(!(gameName.rowCount > 0)){
        return res.sendStatus(400)
    }
    next()
}