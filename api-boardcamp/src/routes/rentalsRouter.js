import { Router } from 'express';
import { insertRental } from '../controllers/rentalsController.js';
import treatRental from '../middlewares/treatRental.js';
import validateRentalMiddleware from '../middlewares/validateRentalMiddleware.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import rentalSchema from '../schemas/rentalSchema.js';

const rentalsRouter = Router();
rentalsRouter.post('/rentals', validateSchemaMiddleware(rentalSchema), validateRentalMiddleware, treatRental, insertRental)

export default rentalsRouter;