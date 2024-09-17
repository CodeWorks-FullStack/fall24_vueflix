<script setup>
import { moviesService } from '@/services/MoviesService.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';

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
  <h1>Movies</h1>
</template>

<style scoped lang="scss"></style>
