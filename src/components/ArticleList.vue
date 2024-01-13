<template>
  <div> 
    <div class="articles-title">
        <h1>Articles</h1>
    </div>
    <div class="articles-container">
        <div class="articles" v-for="article in articles.slice(firstIndex, lastIndex)" :key="article.id">
            <div class="article-img">
                <img :src="article.image">
            </div>
            <div class="preview-container">
                <p>{{ article.preview }}</p>
            </div>
            <div class="read-more">
                <RouterLink :to="`/article/${article.id}`">Read More</RouterLink>
            </div>
        </div>
    </div>
  </div>  
    
</template>

<script setup lang="ts">
import type Article from '@/types/IArticle'


interface Props {
    articles: Array<Article>,
    firstIndex: number,
    lastIndex: number
}


const props = defineProps<Props>()
</script>

<style scoped>
h1 {
  color: var(--Style, #101010);
  font-size: 84px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}

.articles-title {
  margin-top: 120px;
  margin-left: 110px;
}


.articles-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 30px;
  max-width: 1240px;

}
.articles {
  display: inline-flex;
  flex-direction: column;

  align-items: flex-start;
  width: 280px;

  transition: ease 0.5s;
  overflow-y: hidden;
}

.articles:hover {
  transform:translateY(-15px);
}

.articles:hover a {
  opacity: 1;
}

img {
  width: 280px;
  height: 280px;
  object-fit: cover;
}

.article-img {
  width: 280px;
  height: 280px;
}

.articles-container {
  margin-left: 110px;
}

.preview-container {
  margin-top: 20px;
}

p {
overflow: hidden;
color: var(--Style, #101010);
text-overflow: ellipsis;

font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 120%; 
}

a { 
opacity: 0;
  color: var(--Style, #E2BEFF);
  text-decoration: none;
  margin-top: 10px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
  transition: ease 0.5s;
}
a:hover {
  text-decoration: underline;
}

</style>