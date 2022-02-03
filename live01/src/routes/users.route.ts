import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";
// get /users 
// get /users/:uuid 
// post /users 
// put /URLSearchParams/:uuid 
// delete /users/:uuid


const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  const users = await userRepository.findAllUsers();
  res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', async (req: Request, res: Response, next: NextFunction) => {

  try {
    const uuid = req.params.uuid;
    const users = await userRepository.findById(uuid);
    res.status(StatusCodes.OK).send(users);

  } catch (error) {
    console.log(error);
    res.send(StatusCodes.INTERNAL_SERVER_ERROR);

  }






});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  const uuid = await userRepository.create(newUser);
  res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', async (req: Request, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;

  const modifiedUser = req.body;

  modifiedUser.uuid = uuid;

  await userRepository.update(modifiedUser);

  res.status(StatusCodes.OK).send({ modifiedUser })
})

usersRoute.delete('/users/:uuid', async (req: Request, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;

  await userRepository.remove(uuid);
  res.sendStatus(StatusCodes.OK)
})


export default usersRoute;