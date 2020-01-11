import { UserService } from './../service/user.service';
import { Application, Request, Response } from 'express';

export const userController = (app: Application) => {

    const userService = new UserService();

    app.get('/playlists', (req: Request, res: Response) => {
        res.send(userService.getAll());
    });
};
