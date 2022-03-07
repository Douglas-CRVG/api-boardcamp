import { Router } from 'express';
import { insertCustomer, listCustomer, listCustomers, updateCustomer } from '../controllers/customersController.js';
import treatCustomer from '../middlewares/treatCustomer.js';
import validateCustomerMiddleware from '../middlewares/validateCustomerMiddleware.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateUpdateCustomerMiddleware from '../middlewares/validateUpdateCustomerMiddleware.js';
import customerSchema from '../schemas/customerSchema.js';

const customersRouter = Router();
customersRouter.get('/customers', listCustomers)
customersRouter.get('/customers/:id', listCustomer)
customersRouter.post('/customers', treatCustomer, validateSchemaMiddleware(customerSchema), validateCustomerMiddleware, insertCustomer)
customersRouter.put('/customers/:id', treatCustomer, validateSchemaMiddleware(customerSchema), validateUpdateCustomerMiddleware, updateCustomer)

export default customersRouter;