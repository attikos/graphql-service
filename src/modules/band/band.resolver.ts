export const bandResolver = {
    Query: {
        bands: (_: any, args: any, { dataSources } : any) => {
            return dataSources.BandAPI.getAll(args);
        },

        band: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.BandAPI.getBuyId(id);
        },
    },

    Mutation: {
        createBand: (root: any, args: any, context: any) => {
            const {
                name,
                released,
            } = args;

            return context.dataSources.BandAPI.create({
                name,
                released,
            });
        },

        updateBand: (root: any, args: any, context: any) => {
            return context.dataSources.BandAPI.update(args);
        },

        deleteBand: (root: any, args: any, context: any) => {
            return context.dataSources.BandAPI.deleteEntity(args);
        },
    },
}
