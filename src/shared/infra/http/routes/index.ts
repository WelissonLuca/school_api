import { Router } from 'express';
import { QuestionRouter } from './question.routes';

import { SchoolTestRouter } from './schoolTest.routes';
import { userRouter } from './users.routes';

const router = Router();

router.use('/school', userRouter, SchoolTestRouter, QuestionRouter);
export { router };
