export const userResolver = {
    Query: {
        verify: (_: any, __: any, { dataSources } : any) => {
            return dataSources.userAPI.verify();
        },

        user: (_: any, { id }: any, { dataSources }: any) => {
            return dataSources.userAPI.getById(id);
        },
    },

    Mutation: {
        register: (root: any, {input}: any, context: any) => {
            const {
                firstName,
                lastName,
                password,
                email,
                favouriteArtistIds,
            } = input;

            return context.dataSources.userAPI.register({
                firstName,
                lastName,
                password,
                email,
                favouriteArtistIds,
            });
        },

        login: (root: any, args: any, context: any) => {
            const {
                email,
                password,
            } = args;

            return context.dataSources.userAPI.login({
                email,
                password,
            });
        },
    },
}
