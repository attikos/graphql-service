import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { normalizeItemsId } from '../../common/helpers';

export class UserAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3004/v1/users';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    @normalizeItemsId
    verify() {
        return this.post('verify');
    }

    login(args: any) {
        return this.post('login', args);
    }

    @normalizeItemsId
    register(args: any) {
        return this.post('register', args);
    }

    @normalizeItemsId
    getById(id: string) {
        return this.get(id);
    }
}
