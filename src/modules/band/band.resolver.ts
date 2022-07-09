export const bandResolver = {
    Query: {
        bands: (_: any, args: any, { dataSources } : any) => {
            return dataSources.bandAPI.getAll(args);
        },

        band: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.bandAPI.getById(id);
        },
    },

    Band: {
        id(parent: { id : string }) {
            console.log('Band id parent', parent);

            return parent.id;
        },

        genres(parent: any, args: any, { dataSources } : any) {
            const genres = async () => {
                const getCollection = parent.genresIds.map((id: string) =>
                    dataSources.genreAPI.getById(id)
                );

                return await Promise.all(getCollection);
            };

            return genres();
        },
    },

    Mutation: {
        createBand: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.bandAPI.create({
                name,
                released,
            });
        },

        updateBand: (root: any, args: any, context: any) => {
            return context.dataSources.bandAPI.update(args);
        },

        deleteBand: (root: any, args: any, context: any) => {
            return context.dataSources.bandAPI.deleteEntity(args);
        },
    },
}
