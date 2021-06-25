import { Router } from 'express';

import { CreateQuestionController } from '@modules/school/useCases/createQuestion/CreateQuestionController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureTeacher } from '../middlewares/ensureTeacher';

const QuestionRouter = Router();

const createQuestionController = new CreateQuestionController();

QuestionRouter.post(
  '/question',
  ensureAuthenticated,
  ensureTeacher,
  createQuestionController.handle
);

export { QuestionRouter };
