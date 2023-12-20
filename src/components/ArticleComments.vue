<template>
    <section class="comments">
        <h1 class="comments__title" style="display: none;">Hero title</h1>
        <h2 class="comments__subtitle" style="display: none;">Subtitle</h2>
        <div class="comments__usercomments usercomments usercomments-container container flex">
            <router-link class="usercomments__comment comment" v-for="comment in conversComments " :to="{
                name: 'comment',
                params:
                {
                    id: comment.id,
                    userName: comment.userName,
                    userPost: comment.userPost,
                }
            }" :key="comment.id">
                <div class="comment__userpost">
                    <span class="comment__username">{{ comment.userName }}</span>
                    <p class="comment__descr">{{ comment.userPost }}</p>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['comments']);
const conversComments = ref(props.comments.map((comment) => {
    return {
        ...comment,
        id: +(comment.id)
    }
}))

</script>

<style scoped>
p {
    margin: 0;
}

.comments {
    margin-top: 50px;
    padding-bottom: 0;
}

.usercomments {
    flex-direction: column;
    gap: 25px;
}

.comment__userpost {
    padding: 15px;
    border: 1px solid #cccccc;
    border-radius: 10px;
    transition: ease 0.3s all;
    will-change: transform;
}

.comment__userpost:active {
    transform: scale(0.95);
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