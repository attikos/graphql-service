import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class UsersAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'http://localhost:3004/v1/users';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    async verify() {
        return await this.post('verify');
    }

    async login(args: any) {
        return await this.post('login', args);
    }

    async register(args: any) {
        return await this.post('register', args);
    }

    async user(id: string) {
        return await this.get(id);
    }
}
