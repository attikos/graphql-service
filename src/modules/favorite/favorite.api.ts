import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { normalizeItemsId } from '../../common/helpers';

export class FavoriteAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3007/v1/favourites';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    @normalizeItemsId
    addTrackToFavourites(id: any) {
        return this.put('add', { id, type: 'tracks' });
    }

    @normalizeItemsId
    addBandToFavourites(id: any) {
        return this.put('add', { id, type: 'bands' });
    }

    @normalizeItemsId
    addArtistToFavourites(id: any) {
        return this.put('add', { id, type: 'artists' });
    }

    @normalizeItemsId
    addGenreToFavourites(id: any) {
        return this.put('add', { id, type: 'genres' });
    }

    @normalizeItemsId
    removeTrackToFavourites(id: any) {
        return this.put('remove', { id, type: 'tracks' });
    }

    @normalizeItemsId
    removeBandToFavourites(id: any) {
        return this.put('remove', { id, type: 'bands' });
    }

    @normalizeItemsId
    removeArtistToFavourites(id: any) {
        return this.put('remove', { id, type: 'artists' });
    }

    @normalizeItemsId
    removeGenreToFavourites(id: any) {
        return this.put('remove', { id, type: 'genres' });
    }

    @normalizeItemsId
    getAll(pagination: any) {
        return this.get('', pagination);
    }
}
