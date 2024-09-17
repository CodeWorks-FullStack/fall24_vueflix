import { movieAPI } from "./AxiosService.js"

class MoviesService {
  async getMovies() {
    const response = await movieAPI.get('3/discover/movie?include_adult=false&api_key=545c6ef058e65396849dfbbf381cbca3')
    console.log('GOT MOVIES 🎥🍿🎞️', response.data);
  }
}

export const moviesService = new MoviesService()