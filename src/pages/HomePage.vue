<script setup>
import { AppState } from '@/AppState.js';
import { moviesService } from '@/services/MoviesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

// explicit return
// const movies = computed(() => { return AppState.movies })
// implied return
const movies = computed(() => AppState.movies)

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

</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Movies</h1>
      </div>
    </section>
    <section class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-3">
        {{ movie.title }}
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
