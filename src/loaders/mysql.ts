import { DbHelper } from './../core/db.helper';
import mysql from 'mysql';

export default async () => {

    const db = DbHelper.get();

    const connexion = mysql.createConnection({
        // accès à la BDD avec variable d'environnement
        host: 'localhost',
        user: process.env.user3,
        password: process.env.password3,
        database: process.env.database3,
    });

    // connection à la BDD
    connexion.connect((err) => {
        if (err) { throw err; }
        console.log('Connected!');
      });

    return db.setConnection(connexion);
};
