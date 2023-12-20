<template>
    <main class="main">
        <div class="page-error container flex">
            <img src="@/assets/img/error.jpg" alt="Error 404">
            <h1 class="page-error__title">Error 404</h1>
            <p class="page-error__descr">Page not found</p>
        </div>
    </main>
</template>

<style scoped>
.page-error {
    flex-direction: column;
    align-items: center;
}

.page-error {
    padding-top: 50px;
}

.page-error__title {
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-size: 39px;
}

.page-error__descr {
    margin: 0;
    padding-top: 15px;
    font-size: 20px;
}
</style>