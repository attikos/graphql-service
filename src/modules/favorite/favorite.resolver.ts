export const favoriteResolver = {
    Query: {
        favorites: (_: any, args: any, { dataSources } : any) => {
            return dataSources.favoriteAPI.getAll(args);
        },
    },

    Mutation: {
        addTrackToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.favoriteAPI.addTrackToFavourites(args);
        },

        addBandToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.favoriteAPI.addBandToFavourites(args);
        },

        addArtistToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.favoriteAPI.addArtistToFavourites(args);
        },

        addGenreToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.favoriteAPI.addGenreToFavourites(args);
        },

        removeTrackToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.favoriteAPI.removeTrackToFavourites(args);
        },

        removeBandToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.favoriteAPI.removeBandToFavourites(args);
        },

        removeArtistToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.favoriteAPI.removeArtistToFavourites(args);
        },

        removeGenreToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.favoriteAPI.removeGenreToFavourites(args);
        },
    },
}
