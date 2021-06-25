import { Router } from 'express';

import { AuthenticateUSerController } from '@modules/school/useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '@modules/school/useCases/createUser/CreateUseController';

const userRouter = Router();

const createUserController = new CreateUserController();
const authenticateUSerController = new AuthenticateUSerController();

userRouter.post('/users', createUserController.handle);
userRouter.post('/login', authenticateUSerController.handle);

export { userRouter };
