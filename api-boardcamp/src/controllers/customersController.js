import connection from '../db.js';

async function listCustomers(req, res) {
    const query = req.query.cpf;
    let result;
    try {
        if(query){
            result = await connection.query(`
            SELECT
                *
            FROM
                customers
            WHERE
                LOWER(customers.cpf)
            LIKE
                LOWER($1)
            `, [`${query}%`]);
        } else{
            result = await connection.query(`
            SELECT
                *
            FROM
                customers
            `);
        }
        res.status(200).send(result.rows)
    } catch (err) {
        console.error(err);
        res.sendStatus(500)
    }
}

async function listCustomer(req, res) {
    try {
        const customerId = await connection.query(`
        SELECT
            *
            FROM
                customers
            WHERE
                id = $1
        `,[req.params.id]);
        if(!(customerId.rowCount > 0)){
            return res.sendStatus(404)
        }
        res.status(200).send(customerId.rows[0])
    } catch (err) {
        console.error(err);
        res.sendStatus(500)
    }
}

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
    listCustomers,
    listCustomer,
    insertCustomer
}