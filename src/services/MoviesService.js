import { AppState } from "@/AppState.js";
import { movieAPI } from "./AxiosService.js"
import { Movie } from "@/models/Movie.js";

class MoviesService {
  async getMovies() {
    const response = await movieAPI.get('3/discover/movie')
    console.log('GOT MOVIES 🎥🍿🎞️', response.data);
    const newMovies = response.data.results.map(moviePOJO => new Movie(moviePOJO))
    AppState.movies = newMovies
  }
}

export const moviesService = new MoviesService()