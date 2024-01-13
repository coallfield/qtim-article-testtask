<template>
<div class="single-article-page">
    <div class="article-title">
        <p>{{ article.title }}</p>
    </div>
    <div class="img-wrapper">
        <img :src="article.image">
    </div>
    <div class="about-part">
        <p>About</p>
        <div class="description">
            <p>{{ article.description }}</p>
        </div>
    </div>

</div>

</template>


<script setup lang="ts">
import useSingleArticle from '@/hooks/useSingleArticle'
const article = useSingleArticle()
</script>

<style scoped>
    .article-title {
        font-size: 84px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        margin-top: 120px;
        margin-left: 110px;
    }

    .img-wrapper {
        width: auto;
        height: auto;
        object-fit: contain;
        margin-top: 70px;
        margin-left: 110px;
    }

    .about-part {
        margin-top: 80px;
        margin-left: 110px;
    }

    .description {
        max-width: 700px;
        text-wrap: wrap;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 124%; 
        margin-top: 30px;
    }
</style>
