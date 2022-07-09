export const artistResolver = {
    Query: {
        artists: (_: any, args: any, { dataSources } : any) => {
            return dataSources.artistAPI.getAll(args);
        },

        artist: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.artistAPI.getById(id);
        },
    },

    Mutation: {
        createArtist: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.artistAPI.create({
                name,
                released,
            });
        },

        updateArtist: (root: any, args: any, context: any) => {
            return context.dataSources.artistAPI.update(args);
        },

        deleteArtist: (root: any, args: any, context: any) => {
            return context.dataSources.artistAPI.deleteEntity(args);
        },
    },
}
