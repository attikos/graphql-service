import { userResolver } from './user/user.resolver';
import { albumResolver } from './album/album.resolver';
import { artistResolver } from './artist/artist.resolver';

export const resolvers = [
    userResolver,
    albumResolver,
    artistResolver,
];
