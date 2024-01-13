<template>
  <div class="home-page">
    <ArticleList :articles="articles" :firstIndex="firstIndex" :lastIndex="lastIndex"></ArticleList>
    <Pagination  :totalPages="totalPages" :limit="limit" :pageNumber="pageNumber" @changePage="(page) => changePage(page)" @nextPage="(pageNumber) => changePage(++pageNumber)" ></Pagination>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import Pagination from '@/components/Pagination.vue';
import ArticleList from '@/components/ArticleList.vue';
import useArticles from '@/hooks/useArticles'


   


    const articles = useArticles()

   
    const currentPage = ref<number>(1)
    const limit: number = 8   
    const pageNumber = ref<number>(1)
    const lastIndex = ref<number>(currentPage.value * limit)
    const firstIndex = ref<number>(lastIndex.value - limit)
    const totalPages: number = Math.ceil(85 / limit)

    
    function changePage(page: number): void {
      if(page > totalPages) {
            page = 1
      }
        currentPage.value = page
        lastIndex.value = currentPage.value * limit
        firstIndex.value = lastIndex.value - limit
        pageNumber.value = page
       
    }




    
</script>


<style scoped>




</style>