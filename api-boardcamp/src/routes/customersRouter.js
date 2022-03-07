import { Router } from 'express';
import { insertCustomer } from '../controllers/customersController.js';
import treatCustomer from '../middlewares/treatCustomer.js';
import validateCustomerMiddleware from '../middlewares/validateCustomerMiddleware.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import customerSchema from '../schemas/customerSchema.js';

const customersRouter = Router();
customersRouter.post('/customers', treatCustomer, validateSchemaMiddleware(customerSchema), validateCustomerMiddleware, insertCustomer)

export default customersRouter;