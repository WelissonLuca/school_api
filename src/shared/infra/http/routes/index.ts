import { Router } from 'express';

import { SchoolTestRouter } from './schoolTest.routes';
import { userRouter } from './users.routes';

const router = Router();

router.use('/school', userRouter, SchoolTestRouter);
export { router };
