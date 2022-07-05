import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class AlbumsAPI extends RESTDataSource {
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

    deleteAlbum({ id }: any) {
        return this.delete(id);
    }

    getAll() {
        return this.get('');
    }

    // getBuyId(id: string) {
    //     return this.get(id);
    // }
}
