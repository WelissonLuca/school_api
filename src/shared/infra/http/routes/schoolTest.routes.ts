import { Router } from 'express';

import { CreateSchoolController } from '@modules/school/useCases/createSchoolTest/CreateSchoolTestController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureTeacher } from '../middlewares/ensureTeacher';

const SchoolTestRouter = Router();

const createSchoolController = new CreateSchoolController();

SchoolTestRouter.post(
  '/schoolTest',
  ensureAuthenticated,
  ensureTeacher,
  createSchoolController.handle
);

export { SchoolTestRouter };
