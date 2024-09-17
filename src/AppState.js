import { reactive } from 'vue'
import { Movie } from './models/Movie.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /** @type {Movie[]} */
  movies: [],
  currentPage: 0,
  totalPages: 0
})
