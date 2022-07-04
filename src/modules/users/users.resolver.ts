export const userResolver = {
    Query: {
        verify: async (_: any, __: any, { dataSources } : any) => {
            return await dataSources.usersAPI.verify();
        },

        getBuyId: async (_: any, { id }: any, { dataSources }: any) => {
            return await dataSources.usersAPI.getBuyId(id);
        },
    },

    Mutation: {
        register: async (root: any, args: any, context: any) => {
            const {
                firstName,
                lastName,
                password,
                email,
                favouriteArtistIds,
            } = args;

            return await context.dataSources.usersAPI.register({
                firstName,
                lastName,
                password,
                email,
                favouriteArtistIds,
            });
        },

        login: async (root: any, args: any, context: any) => {
            const {
                email,
                password,
            } = args;

            return await context.dataSources.usersAPI.login({
                email,
                password,
            });
        },
    },
}
