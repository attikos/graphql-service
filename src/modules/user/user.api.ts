import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { normalizeId } from '../../common/helpers';

export class UserAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3004/v1/users';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    @normalizeId
    async verify() {
        return await this.post('verify');
    }

    async login(args: any) {
        return await this.post('login', args);
    }

    @normalizeId
    async register(args: any) {
        return await this.post('register', args);
    }

    @normalizeId
    async user(id: string) {
        return await this.get(id);
    }
}
