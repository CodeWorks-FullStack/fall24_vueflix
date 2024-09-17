<script setup>
import { AppState } from '@/AppState.js';
import MovieCard from '@/components/globals/MovieCard.vue';
import PageNavigation from '@/components/globals/PageNavigation.vue';
import { moviesService } from '@/services/MoviesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted, onUnmounted } from 'vue';

// explicit return
// const movies = computed(() => { return AppState.movies })
// implied return
const movies = computed(() => AppState.movies)

// NOTE onMounted will run as soon as a component is mounted into the view (is rendered)
onMounted(() => {
  discoverMovies()
})

onUnmounted(() => {
  moviesService.clearMovies()
})

async function discoverMovies() {
  try {
    await moviesService.discoverMovies()
  } catch (error) {
    // Pop.error(error)
    // NOTE meow!
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

<style scoped lang="scss"></style>
