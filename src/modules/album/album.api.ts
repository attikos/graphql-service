import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Pagination } from 'src/types';
import { normalizeId } from '../../common/helpers';

export class AlbumAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3005/v1/albums';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    @normalizeId
    create(args: any) {
        return this.post('', args);
    }

    @normalizeId
    update({ id, args }: any) {
        return this.put(id, args);
    }

    @normalizeId
    deleteEntity({ id }: any) {
        return this.delete(id);
    }

    @normalizeId
    getAll(pagination: Pagination) {
        return this.get('', pagination);
    }

    async getBuyId(id: string) {
        return this.get(id);
    }
}
