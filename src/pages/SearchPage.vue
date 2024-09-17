<script setup>
import { moviesService } from '@/services/MoviesService.js';
import Pop from '@/utils/Pop.js';
import { ref } from 'vue';


const editableQuery = ref('')

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
      <div class="col-12">
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
    </section>
  </div>
</template>


<style lang="scss" scoped></style>