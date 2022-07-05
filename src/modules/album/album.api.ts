import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Pagination } from 'src/types';

export class AlbumAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3005/v1/albums';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    create(args: any) {
        return this.post('', args);
    }

    update({ id, args }: any) {
        return this.put(id, args);
    }

    deleteEntity({ id }: any) {
        return this.delete(id);
    }

    getAll(pagination: Pagination) {
        return this.get('', pagination);
    }

    getBuyId(id: string) {
        return this.get(id);
    }
}
