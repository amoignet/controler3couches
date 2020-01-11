import express from 'express';
import loaders from './loaders';
import { userController } from './controller/user.controller';

async function startServer() {

    // la variable app initialise un serveur express
    const app = express();

    // j'appelle le chargement des loaders
    await loaders(app);

    // initialise les routes de l'application
    userController(app);

    // j'écoute le serveur
    app.listen(3000, () => console.log('Example app listening on port 3000!'));

}

startServer();
