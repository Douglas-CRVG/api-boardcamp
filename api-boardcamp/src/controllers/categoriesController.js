import connection from '../db.js';

async function listCategories(req, res) {
    try{
        const categories = await connection.query(`
        SELECT
            *
        FROM
            categories
        `);
        res.send(categories.rows).status(200);
    } catch(err) {
        console.error(err);
        res.sendStatus(500)
    }
}

export{
    listCategories
}