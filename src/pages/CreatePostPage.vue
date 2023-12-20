<template>
    <section class="create">
        <h1 class="create__title">Create a new post</h1>
        <form class="create__form form">
            <div class="form__list flex">
                <label class="form__label form__label--title flex">
                    <span class="form__label-text">Header for Your Article</span>
                    <input class="form__input form__input--title" type="text">
                </label>
                <label class="form__label form__label--descr flex">
                    <span class="form__label-text">Substrate for Your Article</span>
                    <textarea class="form__input form__input--descr"></textarea>
                </label>
                <label class="form__label form__label--image flex">
                    <span class="form__label-text">The Content of Your Article</span>
                    <input class="form__input form__input--image" type="file" accept="image/*">
                </label>
            </div>
            <div class="form__buttons buttons flex">
                <button class="buttons__submit btn" type="submit">Send</button>
                <button class="buttons__clear btn" type="reset">Clear</button>
            </div>
        </form>
    </section>
</template>

<script setup></script>

<style scoped>
.create {
    margin: 0 auto;
    padding: 0 15px;
    width: max(40%, 290px);
}

.create__title {
    font-size: clamp(29px, 8vw, 39px);
    text-align: center;
}

.form__list {
    flex-direction: column;
    justify-content: center;
    padding: clamp(25px, 3vw, 50px);
    gap: 25px;
    border: 1px solid #cccccc;
    border-radius: 10px;
}

.form__label {
    flex-direction: column;
    width: 100%;
}

.form__label-text {
    display: block;
    padding-left: 10px;
    padding-bottom: 10px;
    max-width: 350px;
    width: 100%;
    font-size: clamp(16px, 4vw, 19px);
}

.form__input {
    padding: 0 10px;
    height: 35px;
    border: 1px solid #dadada;
    border-radius: 10px;
    font-weight: 100;
    font-size: clamp(16px, 4vw, 19px);
    transition: background-color 0.3s ease;
}

.form__input:focus-visible {
    background-color: #f7f7f7;
    transition: background-color 0.3s ease;
}

@media(any-hover: hover) {
    .form__input:hover {
        background-color: #f7f7f7;
        transition: background-color 0.3s ease;
    }
}
.form__input--image {
    border: none;
}
.form__input--descr {
    padding: 10px;
    min-height: 250px;
    resize: none;
}
.form__buttons {
    justify-content: center;
    padding-top: 25px;
    gap: 25px;
}

.buttons__submit,
.buttons__clear {
    padding: 10px;
    width: 100px;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    background-color: #e8e8e8;
    transition: all 0.3s ease;
    user-select: none;
    will-change: transform;
}

.buttons__submit:active,
.buttons__clear:active {
    transform: scale(0.95);
}

@media(any-hover: hover) {
    .buttons__submit:hover {
        border-color: #adff98;
        background-color: #adff98;
        transition: all 0.3s ease;
    }

    .buttons__clear:hover {
        border-color: #cccccc;
        background-color: #cccccc;
        transition: all 0.3s ease;
    }
}
</style>