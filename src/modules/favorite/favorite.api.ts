import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { normalizeId } from '../../common/helpers';

export class FavoriteAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3007/v1/favourites';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    @normalizeId
    addTrackToFavourites(id: any) {
        return this.put('add', { id, type: 'tracks' });
    }

    @normalizeId
    addBandToFavourites(id: any) {
        return this.put('add', { id, type: 'bands' });
    }

    @normalizeId
    addArtistToFavourites(id: any) {
        return this.put('add', { id, type: 'artists' });
    }

    @normalizeId
    addGenreToFavourites(id: any) {
        return this.put('add', { id, type: 'genres' });
    }

    @normalizeId
    removeTrackToFavourites(id: any) {
        return this.put('remove', { id, type: 'tracks' });
    }

    @normalizeId
    removeBandToFavourites(id: any) {
        return this.put('remove', { id, type: 'bands' });
    }

    @normalizeId
    removeArtistToFavourites(id: any) {
        return this.put('remove', { id, type: 'artists' });
    }

    @normalizeId
    removeGenreToFavourites(id: any) {
        return this.put('remove', { id, type: 'genres' });
    }

    @normalizeId
    getAll(pagination: any) {
        return this.get('', pagination);
    }
}
