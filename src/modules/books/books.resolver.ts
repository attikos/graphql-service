const books = [
    {
      title: 'The Awakening 3',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

export const booksResolver = {
    Query: {
        books: () => books,
    },
}
