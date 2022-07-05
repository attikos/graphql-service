import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class AlbumAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3002/v1/artists';
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

    getAll(pagination: any) {
        return this.get('', pagination);
    }

    getBuyId(id: string) {
        return this.get(id);
    }
}
