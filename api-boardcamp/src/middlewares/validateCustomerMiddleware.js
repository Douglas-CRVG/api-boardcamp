import connection from "../db.js";
export default async function validateCustomerMiddleware(req, res, next){
    const customerCPF = await connection.query(`
    SELECT
        *
        FROM
            customers
        WHERE
            cpf = $1
    `,[req.body.cpf]);
    if(customerCPF.rowCount > 0){
        return res.sendStatus(409)
    }
    next()
}