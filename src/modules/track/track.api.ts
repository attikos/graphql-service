import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { normalizeItemsId } from '../../common/helpers';

export class TrackAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3006/v1/tracks';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    @normalizeItemsId
    async create(args: any) {
        const res = await this.post('', args);

        return res;
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
    getAll(pagination: any) {
        return this.get('', pagination);
    }

    @normalizeItemsId
    getById(id: string) {
        return this.get(id);
    }
}
