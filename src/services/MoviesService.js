import { AppState } from "@/AppState.js";
import { movieAPI } from "./AxiosService.js"
import { Movie } from "@/models/Movie.js";

class MoviesService {
  async getMovies() {
    const response = await movieAPI.get('discover/movie')
    console.log('GOT MOVIES 🎥🍿🎞️', response.data);
    const newMovies = response.data.results.map(moviePOJO => new Movie(moviePOJO))
    // REVIEW verify the data looks correct by using your Vue dev tools
    AppState.movies = newMovies

  }
}

export const moviesService = new MoviesService()