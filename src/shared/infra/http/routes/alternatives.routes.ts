import { Router } from 'express';

import { CreateAlternativesController } from '@modules/school/useCases/createAlternatives/CreateAlternativesController';
import { ListAlternativesController } from '@modules/school/useCases/listAlternatives/ListAlternativesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureTeacher } from '../middlewares/ensureTeacher';

const AlternativeRouter = Router();

const createAlternativesController = new CreateAlternativesController();
const listAlternativesController = new ListAlternativesController();

AlternativeRouter.post(
  '/alternative',
  ensureAuthenticated,
  ensureTeacher,
  createAlternativesController.handle
);

AlternativeRouter.get(
  '/alternatives',
  ensureAuthenticated,
  ensureTeacher,
  listAlternativesController.handle
);

export { AlternativeRouter };
