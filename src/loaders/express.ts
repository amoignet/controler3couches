import { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

export default (app: Application) => {
    app.use(cors());
    app.use(bodyParser.json());
};
