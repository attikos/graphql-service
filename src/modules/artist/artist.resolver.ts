export const artistResolver = {
    Query: {
        artists: (_: any, args: any, { dataSources } : any) => {
            return dataSources.artistAPI.getAll(args);
        },

        artist: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.artistAPI.getById(id);
        },
    },

    Artist: {
        id(parent: { id : string }) {
            return parent.id;
        },

        bands(parent: { bandsIds : Array<string> }, args: any, { dataSources }: any) {
            const getCollection = () => {
                const data = parent.bandsIds.map((id: string) =>
                    dataSources.bandAPI.getById(id)
                );

                return Promise.all(data);
            };

            return getCollection();
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
