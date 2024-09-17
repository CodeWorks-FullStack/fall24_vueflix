<script setup>
import { AppState } from '@/AppState.js';
import MovieCard from '@/components/globals/MovieCard.vue';
import { moviesService } from '@/services/MoviesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

// explicit return
// const movies = computed(() => { return AppState.movies })
// implied return
const movies = computed(() => AppState.movies)
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)



// NOTE onMounted will run as soon as a component is mounted into the view (is rendered)
onMounted(() => {
  getMovies()
})

async function getMovies() {
  try {
    await moviesService.getMovies()
  } catch (error) {
    // Pop.error(error)
    // NOTE meow!
    Pop.meow(error)
  }
}

async function changePage(pageNumber) {
  try {
    await moviesService.changeMoviesPage(pageNumber)
  } catch (error) {
    Pop.meow(error)
  }
}

</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Movies</h1>
      </div>
      <div class="col-12">
        <div class="d-flex gap-3 align-items-center my-3">
          <button @click="changePage(currentPage - 1)" :disabled="currentPage == 1" class="btn btn-outline-dark">
            Previous
          </button>
          <span class="fs-5">Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="changePage(currentPage + 1)" :disabled="currentPage == 500 || currentPage == totalPages"
            class="btn btn-outline-dark">
            Next
          </button>
        </div>
      </div>
    </section>
    <section class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-6 col-md-3 mb-3">
        <MovieCard :movieProp="movie" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
