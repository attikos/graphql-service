import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

// const users = [
//     {
//         name: 'Kate Chopin',
//     },
//     {
//         name: 'Paul Auster',
//     },
// ];

export class UsersAPI extends RESTDataSource {
    constructor() {
        // Always call super()
        super();
        // Sets the base URL for the REST API
        this.baseURL = process.env.USERS_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    async verify() {
        return await this.post('verify');
    }

    async login(userData: any) {
        return await this.post('login', userData);
    }

    async register(userData: any) {
        return await this.post('register', userData);
    }
}
