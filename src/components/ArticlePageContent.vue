<template>
    <section class="article article--container container">
        <div class="article__content flex">
            <div class="article__author">{{ author }}</div>
            <h1 class="article__title">{{ title }}</h1>
            <img class="article__image"
                :src="require(`@/assets/img/photos-of-articles/${image}`)"
                alt="Article Photo">
            <p class="article__descr">{{ text }}</p>
        </div>
        <h3 class="article__recommendation">
            You can discuss this article below
        </h3>
        <ArticleComments :comments="comments" />
        <div class="article__comment comment" v-if="isAuthenticated">
            <form class="comment__form form flex">
                <textarea class="form__inputcomment" placeholder="You can leave a comment"></textarea>
                <button class="form__btn btn">Post a comment</button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import ArticleComments from '@/components/ArticleComments.vue'
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps(['author', 'title', 'text', 'id', 'image', 'comments'])

const isAuthenticated = ref(store.state.isAuthenticated);

watch(() => store.state.isAuthenticated, (newStatus) => {
    isAuthenticated.value = newStatus;
});
</script>

<style scoped>
.article--container {
    max-width: 1000px;
}

.article__content {
    position: relative;
    flex-direction: column;
    padding-bottom: 50px;
}

.article__author {
    padding-left: 29px;
    padding-bottom: 5px;
    font-size: 14px;
}

.article__title {
    margin: 0;
    padding: 0 25px 25px;
    max-width: 800px;
    font-size: clamp(25px, 6vw, 39px);
}

.article__image {
    border-radius: 25px;
    box-shadow: 0 0 clamp(10px, 2vw, 20px) 1px #b3b3b3;
}

.article__descr {
    margin: 0;
    padding: 25px 25px 0;
    font-size: clamp(16px, 4vw, 20px);
    text-align: justify;
}

.article__recommendation {
    position: relative;
    padding: 25px 0;
    font-size: clamp(16px, 4vw, 25px);
    text-align: center;
}

.article__content::before,
.article__recommendation::before {
    content: '';
    position: absolute;
    max-width: 1000px;
    top: 0;
    left: 10%;
    right: 10%;
    bottom: 0;
    border-bottom: 2px solid #cccccc;
}

.article__comment {
    padding: 25px 15px 0;
}

.form {
    flex-direction: column;

}

.form__inputcomment {
    margin-bottom: 30px;
    padding: 10px;
    min-height: 150px;
    border: 2px solid #cccccc;
    border-radius: 10px;
    font-weight: 100;
    font-size: clamp(16px, 4vw, 19px);
    resize: none;
}

.form__btn {
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

    .form__btn:hover {
        border-color: #adff98;
        background-color: #adff98;
        transition: all 0.3s ease;
    }
}

.form__btn:active {
    transform: scale(0.95);
}
</style>