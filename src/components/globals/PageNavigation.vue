<script setup>
import { AppState } from '@/AppState.js';
import { moviesService } from '@/services/MoviesService.js';
import Pop from '@/utils/Pop.js';
import { computed } from 'vue';

const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

async function changePage(pageNumber) {
  try {
    // if I have not typed in a search query (if I am on the Home Page)
    if (AppState.movieQuery == '') {
      await moviesService.changeDiscoverPage(pageNumber)
    }
    else {
      await moviesService.changeSearchPage(pageNumber, AppState.movieQuery)
    }
  } catch (error) {
    Pop.meow(error)
  }
}
</script>


<template>
  <div class="d-flex gap-3 align-items-center my-3">
    <!-- If our current page is 2, we pass down 1 as our argument -->
    <button @click="changePage(currentPage - 1)" :disabled="currentPage < 2" class="btn btn-outline-dark">
      Previous
    </button>
    <span class="fs-5">Page {{ currentPage }} of {{ totalPages }}</span>
    <!-- If our current page is 2, we pass down 3 as an argument -->
    <button @click="changePage(currentPage + 1)" :disabled="currentPage == 500 || currentPage == totalPages"
      class="btn btn-outline-dark">
      Next
    </button>
  </div>
</template>


<style lang="scss" scoped></style>