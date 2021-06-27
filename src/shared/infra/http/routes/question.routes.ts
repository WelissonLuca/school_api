import { Router } from 'express';

import { CreateQuestionController } from '@modules/school/useCases/createQuestion/CreateQuestionController';
import { ListQuestionController } from '@modules/school/useCases/listQuestions/ListQuestionsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureTeacher } from '../middlewares/ensureTeacher';

const QuestionRouter = Router();

const createQuestionController = new CreateQuestionController();
const listQuestionController = new ListQuestionController();

QuestionRouter.post(
  '/question',
  ensureAuthenticated,
  ensureTeacher,
  createQuestionController.handle
);

QuestionRouter.get(
  '/question/:test_id',
  ensureAuthenticated,
  ensureTeacher,
  listQuestionController.handle
);
export { QuestionRouter };
