<script setup>
import { Movie } from '@/models/Movie.js';


// NOTE defineProps allows this component to accept values to be passed down from a parent component 
// NOTE when you inject this component into another, you must supply a value for our movieProp
defineProps({
  // NOTE movieProp is the name of our prop, it's what we can access in our template tag
  // the type of our prop is an object, but more specifically it will be Movie class object
  // required denotes that you must pass down a prop when you inject this component, and Vue will fill up your console with warnings if you do not
  movieProp: { type: Movie, required: true }
})

</script>


<template>
  <img :src="movieProp.lowQualityPosterImgUrl" :alt="`Poster for ${movieProp.title}`" class="img-fluid rounded"
    :title="movieProp.title">
</template>

<!-- NOTE because this style tag is scoped, it will only apply to elements within this component -->
<style lang="scss" scoped>
// this will only target img tags within this component
img {
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 1px 5px black
}
</style>