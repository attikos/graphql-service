import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { resolvers } from './src/modules/resolvers';
import { UserAPI } from './src/modules/user/user.api';
import { AlbumAPI } from './src/modules/album/album.api';
import { ArtistAPI } from './src/modules/artist/artist.api';
import { TrackAPI } from './src/modules/track/track.api';
import { BandAPI } from './src/modules/band/band.api';
import { GenreAPI } from './src/modules/genre/genre.api';
import { FavoriteAPI } from './src/modules/favorite/favorite.api';

const typeDefs = loadSchemaSync("./**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    dataSources: () => {
        return {
            userAPI: new UserAPI(),
            albumAPI: new AlbumAPI(),
            artistAPI: new ArtistAPI(),
            trackAPI: new TrackAPI(),
            bandAPI: new BandAPI(),
            genreAPI: new GenreAPI(),
            favoriteAPI: new FavoriteAPI(),
        };
    },
    context: ({ req }) => {
        const token = req.headers.authorization || '';

        return { token };
    },
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});
