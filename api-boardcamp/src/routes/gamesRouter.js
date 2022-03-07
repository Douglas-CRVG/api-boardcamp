import { Router } from 'express';
import { insertGame, listGames } from '../controllers/gamesController.js';
import treatGameBodyMiddleware from '../middlewares/treatGameBodyMiddleware.js';
import validateGameMiddleware from '../middlewares/validateGameMiddleware.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import gameSchema from '../schemas/gameSchema.js';

const gamesRouter = Router();
gamesRouter.get('/games', listGames)
gamesRouter.post('/games', treatGameBodyMiddleware, validateSchemaMiddleware(gameSchema), validateGameMiddleware, insertGame)

export default gamesRouter;