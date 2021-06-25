import { Router } from 'express';

import { AuthenticateUSerController } from '@modules/school/useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '@modules/school/useCases/createUser/CreateUseController';
import { ListUsersController } from '@modules/school/useCases/listUser/ListUserController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureTeacher } from '../middlewares/ensureTeacher';

const userRouter = Router();

const createUserController = new CreateUserController();
const authenticateUSerController = new AuthenticateUSerController();
const listUsersController = new ListUsersController();

userRouter.post('/users', createUserController.handle);
userRouter.post('/login', authenticateUSerController.handle);
userRouter.get(
  '/users',
  ensureAuthenticated,
  ensureTeacher,
  listUsersController.handle
);

export { userRouter };
