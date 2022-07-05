import GraphQLUpload from 'graphql-upload';

export const albumResolver = {
    // FileUpload: GraphQLUpload,

    Query: {
        albums: (_: any, __: any, { dataSources } : any) => {
            return dataSources.AlbumAPI.getAll();
        },

        album: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.AlbumAPI.getBuyId(id);
        },
    },

    Mutation: {
        createAlbum: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.AlbumAPI.create({
                name,
                released,
            });
        },

        updateAlbum: (root: any, args: any, context: any) => {
            return context.dataSources.AlbumAPI.update(args);
        },

        deleteAlbum: (root: any, args: any, context: any) => {
            return context.dataSources.AlbumAPI.deleteAlbum(args);
        },
    },
}
