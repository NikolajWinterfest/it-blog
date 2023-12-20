<template>
    <article class="cards__list">
        <router-link class="cards__item card-item flex" :to="
            {
                name: 'article',
                params: {
                    id, text, author, title, image
                }
            }" :key="id">
            <img class="card-item__image" :src="require(`@/assets/img/photos-of-articles/${image}`)" alt="title">
            <div class="card-item__info">
                <div class="card-item__author">Article author: {{ author }}</div>
                <h3 class="card-item__title">{{ title }}</h3>
            </div>
        </router-link>
    </article>
</template>

<script setup>

const props = defineProps(['title', 'id', 'author', 'text', 'image']);

</script>

<style scoped>
h3 {
    margin: 0;
    padding: 0;
}

.card-item {
    align-items: center;
    width: 100%;
    height: 150px;
    border: 1px solid #e8e8e8;
    border-radius: 25px;
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

@media(any-hover: hover) {
    .card-item:hover {
        box-shadow: 0px 0px 20px 1px #dddddd;
        transition: box-shadow 0.3s ease;
    }
}

.card-item:active {
    transform: scale(0.98);
    transition: transform 0.3s ease;
}

.card-item__info {
    padding-left: 15px;
    padding-right: 5px;
}

.card-item__author {
    padding-left: 3px;
    padding-bottom: 3px;
    font-size: clamp(10px, 3vw, 14px);
}

.card-item__image {
    width: 150px;
    height: 150px;
    border-radius: 25px;
    object-fit: cover;
}

.card-item__title {
    max-width: 800px;
    max-height: 110px;
    font-weight: 100;
    font-size: clamp(16px, 4vw, 25px);
}
</style>