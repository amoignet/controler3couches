import { PlaylistService } from './../service/playlist.service';
import express, { Application, Request, Response, Router } from 'express';

export const playlistController = (app: Application) => {
  const playlistRouter: Router = express.Router();
  const playlistService = new PlaylistService();

  playlistRouter.get('/', async (req: Request, res: Response) => {
    return res.send(await playlistService.getAll());
  });

  playlistRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
      return res.send(await playlistService.getById(id));
    } catch (error) {
      res.status(404).send('L\'id ' + id + ' n\'a pas été trouvé');
    }
  });

  playlistRouter.post('/', async (req: Request, res: Response) => {
    const playlist = req.body;
    return res.send(await playlistService.postAPlaylsit(playlist));
  });

  // playlistRouter.put('/:id', async (req: Request, res: Response) => {
  //     const id = Number(req.params.id);
  //     const playlist = req.body;

  //     try {
  //       return res.send( await playlistService.putById(id));
  //     } catch (error) {
  //       res.status(404).send('L\'id ' + id + ' n\'a pas été trouvé');
  //     }
  //   });

  playlistRouter.put('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const playlist = req.body;
    playlistService.putById(playlist, id);
    res.send(playlist);
});

  playlistRouter.delete('/:id', async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        try {
          return res.send( await playlistService.delById(id));
        } catch (error) {
          res.status(404).send('L\'id ' + id + ' n\'a pas été trouvé');
        }
      } );

  app.use('/playlists', playlistRouter);
};
