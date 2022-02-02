import { NextFunction, Request, Response, Router } from "express";


const statusRoutes = Router();

statusRoutes.get("/status", (req: Request,res: Response,next: NextFunction) => {
    res.status(200).send({ foo: 'bar 4'});

});

export default statusRoutes;