import { AppState } from "@/AppState.js";
import { movieAPI } from "./AxiosService.js"
import { Movie } from "@/models/Movie.js";

class MoviesService {
  async searchMovies(movieQuery) {
    const response = await movieAPI.get(`search/movie?query=${movieQuery}`)
    console.log('SEACRHED MOVIES 🔍🎥', response.data);
  }

  async getMovies() {
    const response = await movieAPI.get('discover/movie')
    console.log('GOT MOVIES 🎥🍿🎞️', response.data);
    this.handleResponseData(response.data)
  }

  async changeMoviesPage(pageNumber) {
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