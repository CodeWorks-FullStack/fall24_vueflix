<script setup>
import { AppState } from '@/AppState.js';
import MovieCard from '@/components/globals/MovieCard.vue';
import PageNavigation from '@/components/globals/PageNavigation.vue';
import { moviesService } from '@/services/MoviesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onUnmounted, ref } from 'vue';

const movies = computed(() => AppState.movies)

const editableQuery = ref('')

onUnmounted(() => {
  moviesService.clearSearchQuery()
})

async function searchMovies() {
  try {
    await moviesService.searchMovies(editableQuery.value)
  } catch (error) {
    Pop.meow(error)
  }
}


</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Search Movies</h1>
      </div>
      <div class="col-12 my-3">
        <form @submit.prevent="searchMovies()">
          <div>
            <label for="" class="form-control-label">Movie Title</label>
            <div class="d-flex">
              <input v-model="editableQuery" type="text" class="form-control flex-grow-1" name="query" id="query"
                placeholder="Movie Title..." required>
              <button class="btn btn-outline-dark" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-12">
        <PageNavigation />
      </div>
    </section>
    <section class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-6 col-md-3 mb-3">
        <MovieCard :movieProp="movie" />
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped></style>