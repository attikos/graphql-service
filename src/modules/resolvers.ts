import { userResolver } from './user/user.resolver';
import { albumResolver } from './album/album.resolver';
import { artistResolver } from './artist/artist.resolver';
import { trackResolver } from './track/track.resolver';
import { bandResolver } from './band/band.resolver';
import { genreResolver } from './genre/genre.resolver';
import { favoriteResolver } from './favorite/favorite.resolver';

export const resolvers = [
    userResolver,
    albumResolver,
    artistResolver,
    trackResolver,
    bandResolver,
    genreResolver,
    favoriteResolver,
];
