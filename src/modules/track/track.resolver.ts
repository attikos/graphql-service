export const trackResolver = {
    Query: {
        tracks: (_: any, { input }: any, { dataSources } : any) => {
            return dataSources.trackAPI.getAll(input);
        },

        track: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.trackAPI.getBuyId(id);
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
