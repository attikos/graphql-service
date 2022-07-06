export const trackResolver = {
    Query: {
        tracks: (_: any, args: any, { dataSources } : any) => {
            return dataSources.TrackAPI.getAll(args);
        },

        track: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.TrackAPI.getBuyId(id);
        },
    },

    Mutation: {
        createTrack: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.TrackAPI.create({
                name,
                released,
            });
        },

        updateTrack: (root: any, args: any, context: any) => {
            return context.dataSources.TrackAPI.update(args);
        },

        deleteTrack: (root: any, args: any, context: any) => {
            return context.dataSources.TrackAPI.deleteEntity(args);
        },
    },
}
