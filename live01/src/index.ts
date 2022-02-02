import express, { Request, Response, NextFunction, urlencoded } from 'express';
import statusRoutes from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoute);
app.use(statusRoutes);

app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000')
})



