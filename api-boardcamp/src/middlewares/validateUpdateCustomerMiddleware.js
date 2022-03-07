import connection from "../db.js";
export default async function validateUpdateCustomerMiddleware(req, res, next){
    const customerCPF = await connection.query(`
    SELECT
        *
        FROM
            customers
        WHERE
            id= $1 AND cpf = $2
    `,[req.params.id, req.body.cpf]);
    if(customerCPF.rowCount > 1){
        return res.sendStatus(409)
    }
    next()
}