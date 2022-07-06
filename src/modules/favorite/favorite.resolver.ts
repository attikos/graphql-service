export const favoriteResolver = {
    Query: {
        favorites: (_: any, args: any, { dataSources } : any) => {
            return dataSources.FavoriteAPI.getAll(args);
        },
    },

    Mutation: {
        addTrackToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.FavoriteAPI.addTrackToFavourites(args);
        },

        addBandToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.FavoriteAPI.addBandToFavourites(args);
        },

        addArtistToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.FavoriteAPI.addArtistToFavourites(args);
        },

        addGenreToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.FavoriteAPI.addGenreToFavourites(args);
        },

        removeTrackToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.FavoriteAPI.removeTrackToFavourites(args);
        },

        removeBandToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.FavoriteAPI.removeBandToFavourites(args);
        },

        removeArtistToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.FavoriteAPI.removeArtistToFavourites(args);
        },

        removeGenreToFavourites: (root: any, args: any, context: any) => {
            return context.dataSources.FavoriteAPI.removeGenreToFavourites(args);
        },
    },
}
