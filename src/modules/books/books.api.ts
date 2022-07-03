import { RESTDataSource } from 'apollo-datasource-rest';

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

export class BooksAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = process.env.USERS_URL;
  }

  async getBook(id: string) {
    // Send a GET request to the specified endpoint
    console.log(id)
    return new Promise(resolve => setTimeout(() => resolve(books), 1000))
    // return this.get(`books/${encodeURIComponent(id)}`);
  }

//   async getMostViewedBooks(limit = 10) {
//     const data = await this.get('books', {
//       // Query parameters
//       per_page: limit,
//       order_by: 'most_viewed',
//     });
//     return data.results;
//   }
}
