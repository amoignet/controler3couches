import { Connection } from 'mysql';

export class DbHelper {

    private connection!: Connection;
    private static instance: DbHelper;

    // Si il n'y a pas d'instance j'en créée une
    public static get() {
        if (!this.instance) {
            this.instance = new DbHelper();
        }
        return this.instance;
    }

    private  constructor() {
    }

    // Création de setConnection qui relie connection de ma class DbHelper à connection de mysql
    public setConnection(connection: Connection) {
        this.connection = connection;
    }

    // Création de la method de class query de la class dbHelper
    public query( sqlRequest: string, params?: any ) {
        // La method de class query connecte ma class DbHelper à la fonction query de mysql
        return this.connection.query(sqlRequest, params);
    }
}
