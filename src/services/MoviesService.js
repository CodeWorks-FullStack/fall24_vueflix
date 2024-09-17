import { movieAPI } from "./AxiosService.js"

class MoviesService {
  async getMovies() {
    const response = await movieAPI.get('3/discover/movie')
    console.log('GOT MOVIES 🎥🍿🎞️', response.data);
  }
}

export const moviesService = new MoviesService()