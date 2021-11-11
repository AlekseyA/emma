import express, { NextFunction, Request, Response } from 'express';

import userController from '../controllers/users'

const usersRouter = express.Router();

usersRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { fromDate, endDate } = req.query;
  const { id } = req.params;
  try {
    const stream = await userController.getOneAsStream(+id, fromDate as string, endDate as string);
    res.set('content-type', 'application/json')
    return stream.pipe(res);
  } catch (error) {
    res.status(500).json({ message: `Get one user error: ${(error as Error).message}` })
  }
})

export default usersRouter;
