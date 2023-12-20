<template>
    <div class="content">
        <div class="content__wrapper container">
            <h1 class="content__title">Welcome to the <span class="content__title-logo">it-BLOG</span></h1>
            <p class="content__descr">Here, you can read articles about information technologies and communicate with other people. Good luck!</p>
            <div class="content__blog-articles blog-articles">
                <h2 class="blog-articles__subtitle">Our articles</h2>
                <router-link to="/createpost" class="blog-articles__post-create post-create flex" v-if="isAdmin">
                    <button class="post-create__btn btn">Create a new post</button>
                </router-link>
                <section class="blog-articles__cards cards flex">
                    <ContentCards v-for="article in articles"
                        :key="article.id"
                        :title="article.title"
                        :id="article.id"
                        :text="article.text"
                        :author="article.author"
                        :image="article.image" />
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import ContentCards from '@/components/ContentCards.vue'

const store = useStore()

const props = defineProps(['articles']);

const isAdmin = ref(store.state.isAdmin)

watch(() => store.state.isAdmin, (newStatus) => {
    isAdmin.value = newStatus
});
</script>

<style scoped>
h1,
h2,
h3,
p {
    margin: 0;
    padding: 0;
}

.content__title-logo {
    white-space: nowrap;
}

.content__title {
    padding-bottom: 10px;
    font-weight: 100;
    font-size: clamp(39px, 10vw, 61px);
    text-align: center;
}

.content__descr {
    padding-top: 15px;
    font-size: clamp(16px, 3vw, 20px);
    text-align: center;
}


.content__blog-articles {
    padding-top: 50px;
}

.blog-articles__subtitle {
    font-weight: 100;
    font-size: clamp(25px, 6vw, 39px);
    text-align: center;
}

.cards {
    flex-direction: column;
    padding-top: 25px;
    gap: 15px;
    width: 100%;
}

.post-create {
    justify-content: center;
    padding-top: 25px;
}

.post-create__btn {
    padding: 0 10px;
    width: 100%;
    height: 55px;
    border: 1px solid #dadada;
    border-radius: 10px;
    font-size: clamp(16px, 3vw, 19px);
    transition: border-color 0.3s ease, background-color 0.3s ease;
    transition: all 0.3s ease;
    user-select: none;
    will-change: transform;
}

@media(any-hover: hover) {

    .post-create__btn:hover {
        border-color: #adff98;
        background-color: #adff98;
        transition: all 0.3s ease;
    }
}

.post-create__btn:active {
    transform: scale(0.95);
}
</style>
