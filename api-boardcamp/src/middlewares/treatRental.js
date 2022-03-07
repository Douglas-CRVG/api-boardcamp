import connection from '../db.js';
import dayjs from 'dayjs';

export default async function treatRental(req, res, next) {
    const rental = req.body
    const result = await connection.query(`
    SELECT
        *
        FROM
            games
        WHERE
            id = $1
    `, [rental.gameId])



    const body ={
        ...req.body,
        rentDate: dayjs().format('YYYY-MM-DD'),
        returnDate: null,
        originalPrice: rental.daysRented*result.rows[0].pricePerDay,
        delayFee: null  
    }
    req.body = body
    next()
}