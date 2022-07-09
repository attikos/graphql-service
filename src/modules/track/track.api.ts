import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { normalizeId } from '../../common/helpers';

export class TrackAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3006/v1/tracks';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    @normalizeId
    async create(args: any) {
        const res = await this.post('', args);

        return res;
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
    getAll(pagination: any) {
        return this.get('', pagination);
    }

    @normalizeId
    getById(id: string) {
        return this.get(id);
    }
}
