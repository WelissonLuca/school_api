import { Router } from 'express';

import { CreateUserController } from '@modules/school/useCases/createUser/CreateUseController';

const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post('/users', createUserController.handle);

export { userRouter };
