import { AppState } from "@/AppState.js";
import { movieAPI } from "./AxiosService.js"
import { Movie } from "@/models/Movie.js";

class MoviesService {
  clearSearchQuery() {
    AppState.movieQuery = ''
  }
  async changeSearchPage(pageNumber, movieQuery) {
    const response = await movieAPI.get(`search/movie?page=${pageNumber}&query=${movieQuery}`)
    console.log('CHANGED SEARCH PAGE', response.data);
    this.handleResponseData(response.data)
  }
  clearMovies() {
    AppState.movies = []
    AppState.currentPage = 0
    AppState.totalPages = 0
  }
  async searchMovies(movieQuery) {
    const response = await movieAPI.get(`search/movie?query=${movieQuery}`)
    console.log('SEACRHED MOVIES 🔍🎥', response.data);
    AppState.movieQuery = movieQuery
    this.handleResponseData(response.data)
  }

  async discoverMovies() {
    const response = await movieAPI.get('discover/movie')
    console.log('GOT MOVIES 🎥🍿🎞️', response.data);
    this.handleResponseData(response.data)
  }

  async changeDiscoverPage(pageNumber) {
    const response = await movieAPI.get(`discover/movie?page=${pageNumber}`)
    console.log('CHANGED MOVIES PAGE 🍿🎥📃', response.data);
    this.handleResponseData(response.data)
  }

  handleResponseData(responseData) {
    const newMovies = responseData.results.map(moviePOJO => new Movie(moviePOJO))
    // REVIEW verify the data looks correct by using your Vue dev tools
    AppState.movies = newMovies
    AppState.currentPage = responseData.page
    AppState.totalPages = responseData.total_pages
  }
}

export const moviesService = new MoviesService()