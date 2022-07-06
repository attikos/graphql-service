import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { normalizeId } from '../../common/helpers';

export class BandAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3002/v1/bands';
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
    getAll(pagination: any) {
        return this.get('', pagination);
    }

    @normalizeId
    getBuyId(id: string) {
        return this.get(id);
    }
}
