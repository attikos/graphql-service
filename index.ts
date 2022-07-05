import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { resolvers } from './src/modules/resolvers';
import { UsersAPI } from './src/modules/users/users.api';
import { AlbumsAPI } from './src/modules/albums/albums.api';

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
            usersAPI: new UsersAPI(),
            albumsAPI: new AlbumsAPI(),
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
