export const trackResolver = {
    Query: {
        tracks: (_: any, { input }: any, { dataSources } : any) => {
            return dataSources.trackAPI.getAll(input);
        },

        track: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.trackAPI.getById(id);
        },
    },

    Track: {
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

        artists(parent: { artistsIds : Array<string> }, args: any, { dataSources }: any) {
            const getCollection = () => {
                const data = parent.artistsIds.map((id: string) =>
                    dataSources.artistAPI.getById(id)
                );

                return Promise.all(data);
            };

            return getCollection();
        },

        genres(parent: { genresIds : Array<string> }, args: any, { dataSources } : any) {
            const genres = async () => {
                const getCollection = parent.genresIds.map((id: string) =>
                    dataSources.genreAPI.getById(id)
                );

                return await Promise.all(getCollection);
            };

            return genres();
        },

        async album(parent: { albumId : string }, args: any, { dataSources } : any) {
            if (!parent.albumId) {
                return null
            }

            // Don't work in microservice
            // const res = await dataSources.albumAPI.getById(parent.albumId);

            const res = await dataSources.albumAPI.getAll();

            if (!res.items) {
                return null;
            }

            return res.items.filter((x: { id : string }) => x.id === parent.albumId);
        },
    },

    Mutation: {
        createTrack: (root: any, { input }: any, context: any) => {
            return context.dataSources.trackAPI.create(input);
        },

        updateTrack: (root: any, args: any, context: any) => {
            return context.dataSources.trackAPI.update(args);
        },

        deleteTrack: (root: any, args: any, context: any) => {
            return context.dataSources.trackAPI.deleteEntity(args);
        },
    },
}
