export const userResolver = {
    Query: {
        verify: async (_: any, __: any, { dataSources } : any) => {
            return await dataSources.userAPI.verify();
        },

        user: async (_: any, { id }: any, { dataSources }: any) => {
            return await dataSources.userAPI.getBuyId(id);
        },
    },

    Mutation: {
        register: async (root: any, {input}: any, context: any) => {
            const {
                firstName,
                lastName,
                password,
                email,
                favouriteArtistIds,
            } = input;

            const res = await context.dataSources.userAPI.register({
                firstName,
                lastName,
                password,
                email,
                favouriteArtistIds,
            });

            console.log('res', res);

            return res;
        },

        login: async (root: any, args: any, context: any) => {
            const {
                email,
                password,
            } = args;

            return await context.dataSources.userAPI.login({
                email,
                password,
            });
        },
    },
}
