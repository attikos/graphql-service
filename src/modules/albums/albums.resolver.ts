export const albumResolver = {
    Query: {
        albums: (_: any, __: any, { dataSources } : any) => {
            return dataSources.AlbumsAPI.getAll();
        },

        album: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.AlbumsAPI.getBuyId(id);
        },
    },

    Mutation: {
        createAlbum: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.AlbumsAPI.create({
                name,
                released,
            });
        },

        updateAlbum: (root: any, args: any, context: any) => {
            return context.dataSources.AlbumsAPI.update(args);
        },

        deleteAlbum: (root: any, args: any, context: any) => {
            return context.dataSources.AlbumsAPI.deleteAlbum(args);
        },
    },
}
