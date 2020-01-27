import { Playlist } from './../models/Playlist';
import { PlaylistRepository } from './../repository/playlist.repository';

export class PlaylistService {

    private repository: PlaylistRepository;

    constructor() {  this.repository = new PlaylistRepository(); }

    async getAll() {
        return await this.repository.selectAll();
    }

    async getById(id: number) {
        return await this.repository.selectById(id);
    }

    async postAPlaylsit(playlist: Playlist) {
        const updatePlaylist = await this.repository.createAPlaylist(playlist);
        return updatePlaylist;
    }

    async putById(playlist: Playlist, id: number) {
        return await this.repository.modifyById(playlist, id);
    }

    async delById(id: number) {
        return await this.repository.deleteById(id);
    }
}
