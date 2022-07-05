export const artistResolver = {
    Query: {
        artists: (_: any, args: any, { dataSources } : any) => {
            return dataSources.ArtistAPI.getAll(args);
        },

        artist: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.ArtistAPI.getBuyId(id);
        },
    },

    Mutation: {
        createArtist: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.ArtistAPI.create({
                name,
                released,
            });
        },

        updateArtist: (root: any, args: any, context: any) => {
            return context.dataSources.ArtistAPI.update(args);
        },

        deleteArtist: (root: any, args: any, context: any) => {
            return context.dataSources.ArtistAPI.deleteEntity(args);
        },
    },
}
