import { Playlist } from './../models/Playlist';
import { DbHelper } from './../core/db.helper';

export class PlaylistRepository {

    private GET_ALL = 'SELECT * FROM playlist ';
    private GET_BY_ID = 'SELECT * FROM playlist WHERE id = ?';
    private POST_A_PLAYLIST = 'INSERT INTO playlist SET ?';
    private PUT_BY_ID = 'UPDATE playlist SET? WHERE id = ?';
    private DELETE_BY_ID = 'DELETE FROM playlist WHERE id = ?';

    private db: DbHelper;

    constructor() { this.db = DbHelper.get(); }

    async selectAll() {
        return await this.db.query( this.GET_ALL );
    }

    async selectById(id: number) {
        return await this.db.query( this.GET_BY_ID, id );
    }

    async createAPlaylist(playlist: Playlist) {
        const resultInsert: any =  await this.db.query( this.POST_A_PLAYLIST, playlist );
        playlist.id = resultInsert.insertId;
        return playlist;
    }

    async modifyById(playlist: Playlist, id: number) {
        return await this.db.query( this.PUT_BY_ID, [playlist, id] );
    }

    async deleteById(id: number) {
        return await this.db.query(this.DELETE_BY_ID, id );
    }

}
