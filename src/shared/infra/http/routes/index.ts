import { Router } from 'express';

import { AlternativeRouter } from './alternatives.routes';
import { QuestionRouter } from './question.routes';
import { SchoolTestRouter } from './schoolTest.routes';
import { userRouter } from './users.routes';

const router = Router();

router.use(
  '/school',
  userRouter,
  SchoolTestRouter,
  QuestionRouter,
  AlternativeRouter
);
export { router };
