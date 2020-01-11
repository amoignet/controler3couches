import { DbHelper } from './../core/db.helper';

export class UserRepository {
    GET_ALL = 'SELECT * FROM user;';

    db = DbHelper.get();

    selectAll() {
        this.db.query(this.GET_ALL);
    }
}
