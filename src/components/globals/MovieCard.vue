<script setup>
import { Movie } from '@/models/Movie.js';


defineProps({
  movieProp: { type: Movie, required: true }
})

</script>


<template>
  <img :src="movieProp.lowQualityPosterImgUrl" :alt="`Poster for ${movieProp.title}`" class="img-fluid rounded"
    :title="movieProp.title">
</template>


<style lang="scss" scoped>
img {
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 1px 5px black
}
</style>