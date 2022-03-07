import { Router } from 'express';
import { insertCategory, listCategories } from '../controllers/categoriesController.js';
import existingCategory from '../middlewares/existingCategoryMiddleware.js';
import treatCategoryName from '../middlewares/treatCategoryName.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import categorySchema from '../schemas/categorySchema.js';

const categoriesRouter = Router();
categoriesRouter.get('/categories', listCategories)
categoriesRouter.post('/categories', treatCategoryName, validateSchemaMiddleware(categorySchema), existingCategory, insertCategory)

export default categoriesRouter;