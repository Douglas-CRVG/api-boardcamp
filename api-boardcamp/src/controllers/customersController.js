import connection from '../db.js';

async function insertCustomer(req, res){
    const customer = req.body;
    try {
        await connection.query(`
        INSERT
            INTO
                customers (name, phone, cpf, birthday)
            VALUES
                ($1,$2, $3, $4)
        `, [customer.name, customer.phone, customer.cpf, customer.birthday])
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export {
    insertCustomer
}