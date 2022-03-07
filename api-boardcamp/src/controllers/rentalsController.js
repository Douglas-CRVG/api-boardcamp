import connection from '../db.js';

async function insertRental(req, res) {
    const rental = req.body;
    try {
        await connection.query(`
        INSERT
            INTO rentals ("customerId", "gameId", "daysRented", "rentDate", "returnDate", "originalPrice", "delayFee")
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            `,[rental.customerId, rental.gameId, rental.daysRented, rental.rentDate, rental.returnDate, rental.originalPrice, rental.delayFee])
        res.sendStatus(201)
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export{
    insertRental
}