<script setup>
import { AppState } from '@/AppState.js';
import MovieCard from '@/components/globals/MovieCard.vue';
import PageNavigation from '@/components/globals/PageNavigation.vue';
import { moviesService } from '@/services/MoviesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted, onUnmounted } from 'vue';

// const movies = computed(() => { return AppState.movies }) // explicit return
const movies = computed(() => AppState.movies) // implied return

// NOTE onMounted is a lifecycle hook that will run as soon as a component is mounted into the view (is rendered)
// this fires off as soon as we land on the home page
onMounted(() => {
  discoverMovies()
})

// NOTE onUnmounted is a lifecycle hook that will run when the component is no longer mounted into the view (not rendered)
// this fires off as soon as we leave the home page
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
        <!-- NOTE movieProp is the name of our prop in the MovieCard.vue component -->
        <!-- NOTE movie is the value being passed down to the component -->
        <!-- Every time we iterate over the movies array, we pass down each object to generate a new unique MovieCard -->
        <MovieCard :movieProp="movie" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
