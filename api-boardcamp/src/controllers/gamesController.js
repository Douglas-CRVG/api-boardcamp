import connection from "../db.js";

async function listGames(req, res) {
    try {
        res.status(200).send([])
    } catch (err) {
        console.error(err);
        res.sendStatus(500)
    }
}

async function insertGame(req, res) {
    const game = req.body;
    try{
        console.log(req.body)
        await connection.query(`
        INSERT
            INTO
                games (name, image, "stockTotal", "categoryId", "pricePerDay")
            VALUES ($1, $2, $3, $4, $5)
        `, [game.name, game.image, game.stockTotal, game.categoryId, game.pricePerDay])
        res.sendStatus(201);
    }catch(err) {
        console.error(err)
        res.sendStatus(500)
    }
}

export{
    listGames,
    insertGame
}