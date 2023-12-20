<template>
    <main class="main">
        <div class="usercomments container" :userName="user.userName" :userPost="user.userPost" :key="user.id">
            <div class="usercomments__comment comment">
                <span class="comment__username">{{ user.userName }}</span>
                <p class="comment__descr">{{ user.userPost }}</p>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { allPosts } from '@/objects/allPosts.js'

const route = useRoute()
const userId = +(route.params.id)
const users = ref(allPosts)
const user = users.value.find((a) => +(a.id) === userId)

</script>

<style scoped>
p {
    margin: 0;
}

.comment {
    padding: 15px;
    border: 1px solid #cccccc;
    border-radius: 10px;
}

.comment__username {
    display: inline-block;
    padding-bottom: 5px;
    font-size: 14px;
    color: #cccccc;
}

.comment__descr {
    font-size: clamp(16px, 4vw, 19px);
    text-align: justify;
}
</style>