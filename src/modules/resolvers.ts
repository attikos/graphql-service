import { userResolver } from './users/users.resolver';
import { albumResolver } from './albums/albums.resolver';

export const resolvers = [
    userResolver,
    albumResolver,
];
