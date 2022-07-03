export const booksResolver = {
    Query: {
        books: async (_: any, __: { id: string }, { dataSources } : any) => {
            return dataSources.booksAPI.getBook(__.id);
        },
    },
}
