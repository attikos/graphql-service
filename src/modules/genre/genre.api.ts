import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { normalizeItemsId } from '../../common/helpers';

export class GenreAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3001/v1/genres';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    @normalizeItemsId
    create(args: any) {
        return this.post('', {...args});
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
