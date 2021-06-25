import { Router } from 'express';

import { CreateSchoolController } from '@modules/school/useCases/createSchoolTest/CreateSchoolTestController';
import { ListSchoolTestsController } from '@modules/school/useCases/listSchoolTests/ListSchoolTestController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureTeacher } from '../middlewares/ensureTeacher';

const SchoolTestRouter = Router();

const createSchoolController = new CreateSchoolController();
const listSchoolTestsController = new ListSchoolTestsController();
SchoolTestRouter.post(
  '/schoolTests',
  ensureAuthenticated,
  ensureTeacher,
  createSchoolController.handle
);

SchoolTestRouter.get(
  '/schoolTests',
  ensureAuthenticated,
  ensureTeacher,
  listSchoolTestsController.handle
);

export { SchoolTestRouter };
