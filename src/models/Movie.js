export class Movie {
  constructor(data) {
    this.id = data.id
    this.backdropPath = data.backdrop_path
    this.title = data.title
    this.originalTitle = data.original_title
    this.overview = data.overview
    this.posterPath = data.posterPath
    this.releaseDate = new Date(data.release_date)
    this.voteCount = data.vote_count
    this.voteAverage = data.vote_average
  }

  get lowQualityPosterImgUrl() {
    return `https://image.tmdb.org/t/p/w500${this.posterPath}`
  }
  get highQualityPosterImgUrl() {
    return `https://image.tmdb.org/t/p/original${this.posterPath}`
  }
  get lowQualityBackdropImgUrl() {
    return `https://image.tmdb.org/t/p/w500${this.backdropPath}`
  }
  get highQualityBackdropImgUrl() {
    return `https://image.tmdb.org/t/p/original${this.backdropPath}`
  }


}

const data = {
  "adult": false,
  "backdrop_path": "/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg",
  "genre_ids": [
    28,
    35,
    878
  ],
  "id": 533535,
  "original_language": "en",
  "original_title": "Deadpool & Wolverine",
  "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
  "popularity": 2838.675,
  "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
  "release_date": "2024-07-24",
  "title": "Deadpool & Wolverine",
  "video": false,
  "vote_average": 7.709,
  "vote_count": 2892
}

// https://image.tmdb.org/t/p/original