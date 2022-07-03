export const booksResolver = {
    Query: {
        users: async (_: any, __: { id: string }, { dataSources } : any) => {
            return dataSources.usersAPI.getUsers(__.id);
        },
    },
}
