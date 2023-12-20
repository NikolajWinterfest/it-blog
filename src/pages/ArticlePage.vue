<template>
    <main class="main">
        <ArticlePageContent
            :author="article.author"
            :title="article.title"
            :text="article.text"
            :image="article.image"
            :comments="comments" />
    </main>
</template>

<script setup>

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { articlesBlog } from '@/objects/articlesBlog.js'
import { allPosts } from '@/objects/allPosts.js'
import ArticlePageContent from '@/components/ArticlePageContent.vue'

const route = useRoute()
const articleId = Number(route.params.id)
const articles = ref(articlesBlog)
const article = articles.value.find((a) => a.id === articleId)

const comments = ref(allPosts);


</script>

<style scoped></style>