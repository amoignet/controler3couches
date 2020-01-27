import { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

export default (app: Application) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/status', (req, res) => {
        res.status(200).end();
      });

    app.head('/status', (req, res) => {
        res.status(200).end();
      });

    return app;
};
