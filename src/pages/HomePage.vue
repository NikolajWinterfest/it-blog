<template>
  <main class="main">
    <HomePageContent :articles="articles" :is-admin="isAdmin" />
  </main>
</template>

<script setup>

import { ref } from 'vue'
import HomePageContent from '@/components/HomePageContent.vue'
import { articlesBlog } from '@/objects/articlesBlog.js'

const props = defineProps(['isAdmin'])
const articles = ref(articlesBlog);

</script>

<style scoped>
.main {
  padding: 50px 0;
}
</style>
