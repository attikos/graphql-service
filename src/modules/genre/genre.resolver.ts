export const genreResolver = {
    Query: {
        genres: (_: any, args: any, { dataSources } : any) => {
            return dataSources.GenreAPI.getAll(args);
        },

        genre: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.GenreAPI.getBuyId(id);
        },
    },

    Mutation: {
        createGenre: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.GenreAPI.create({
                name,
                released,
            });
        },

        updateGenre: (root: any, args: any, context: any) => {
            return context.dataSources.GenreAPI.update(args);
        },

        deleteGenre: (root: any, args: any, context: any) => {
            return context.dataSources.GenreAPI.deleteEntity(args);
        },
    },
}
