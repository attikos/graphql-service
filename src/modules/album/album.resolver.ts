// import GraphQLUpload from 'graphql-upload';

export const albumResolver = {
    // FileUpload: GraphQLUpload,

    Query: {
        albums: (_: any, args: any, { dataSources } : any) => {
            return dataSources.albumAPI.getAll(args);
        },

        album: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.albumAPI.getById(id);
        },
    },

    Mutation: {
        createAlbum: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.albumAPI.create({
                name,
                released,
            });
        },

        updateAlbum: (root: any, args: any, context: any) => {
            return context.dataSources.albumAPI.update(args);
        },

        deleteAlbum: (root: any, args: any, context: any) => {
            return context.dataSources.albumAPI.deleteEntity(args);
        },
    },
}
