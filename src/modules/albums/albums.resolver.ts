export const albumResolver = {
    Query: {
        getAll: async (_: any, __: any, { dataSources } : any) => {
            return await dataSources.AlbumsAPI.getAll();
        },

        // getBuyId: async (_: any, { id }: any, { dataSources }: any) => {
        //     return await dataSources.AlbumsAPI.getBuyId(id);
        // },
    },

    Mutation: {
        create: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.AlbumsAPI.create({
                name,
                released,
            });
        },

        update: (root: any, args: any, context: any) => {
            return context.dataSources.AlbumsAPI.update(args);
        },

        deleteAlbum: (root: any, args: any, context: any) => {
            return context.dataSources.AlbumsAPI.deleteAlbum(args);
        },
    },
}
