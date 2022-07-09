export const genreResolver = {
    Query: {
        genres: (_: any, args: any, { dataSources } : any) => {
            return dataSources.genreAPI.getAll(args);
        },

        genre: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.genreAPI.getById(id);
        },
    },

    Mutation: {
        createGenre: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.genreAPI.create({
                name,
                released,
            });
        },

        updateGenre: (root: any, args: any, context: any) => {
            return context.dataSources.genreAPI.update(args);
        },

        deleteGenre: (root: any, args: any, context: any) => {
            return context.dataSources.genreAPI.deleteEntity(args);
        },
    },
}
