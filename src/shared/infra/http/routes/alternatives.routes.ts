import { Router } from 'express';

import { CreateAlternativesController } from '@modules/school/useCases/createAlternatives/CreateAlternativesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureTeacher } from '../middlewares/ensureTeacher';

const AlternativeRouter = Router();

const createAlternativesController = new CreateAlternativesController();

AlternativeRouter.post(
  '/alternative',
  ensureAuthenticated,
  ensureTeacher,
  createAlternativesController.handle
);

export { AlternativeRouter };
