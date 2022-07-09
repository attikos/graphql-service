import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Pagination } from 'src/types';
import { normalizeItemsId } from '../../common/helpers';

export class AlbumAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3005/v1/albums';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    @normalizeItemsId
    create(args: any) {
        return this.post('', args);
    }

    @normalizeItemsId
    update({ id, args }: any) {
        return this.put(id, args);
    }

    @normalizeItemsId
    deleteEntity({ id }: any) {
        return this.delete(id);
    }

    @normalizeItemsId
    getAll(pagination: Pagination) {
        return this.get('', pagination);
    }

    async getById(id: string) {
        return this.get(id);
    }
}
