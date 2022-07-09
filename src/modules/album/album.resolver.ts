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

    Album: {
        id(parent: { id : string }) {
            return parent.id;
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

        bands(parent: { bandsIds : Array<string> }, args: any, { dataSources }: any) {
            const getCollection = () => {
                const data = parent.bandsIds.map((id: string) =>
                    dataSources.bandAPI.getById(id)
                );

                return Promise.all(data);
            };

            return getCollection();
        },

        tracks(parent: { tracksIds : Array<string> }, args: any, { dataSources }: any) {
            const getCollection = () => {
                const data = parent.tracksIds.map((id: string) =>
                    dataSources.trackAPI.getById(id)
                );

                return Promise.all(data);
            };

            return getCollection();
        },

        genres(parent: any, args: any, { dataSources } : any) {
            const genres = () => {
                const getCollection = parent.genresIds.map((id: string) =>
                    dataSources.genreAPI.getById(id)
                );

                return Promise.all(getCollection);
            };

            return genres();
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
