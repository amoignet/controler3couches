import { DbHelper } from './../core/db.helper';

export class UserRepository {
    GET_ALL = 'SELECT * FROM user;';

    db = DbHelper.get();

    selectAll() {
        return this.db.query(this.GET_ALL);
    }
}
