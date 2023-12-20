<template>
    <section class="reg">
        <h1 class="reg__title">Registration</h1>
        <form action="" class="reg__form form" @submit.prevent="handleSubmit">
            <div class="form__list flex">
                <label class="form__label form__label--login flex">
                    <span class="form__label-text">Login</span>
                    <input class="form__input form__input--login" v-model="userLogin" type="text" required>
                </label>
                <label class="form__label form__label--password flex">
                    <span class="form__label-text">Password</span>
                    <input class="form__input form__input--password" v-model="userPassword" type="password" required>
                </label>
                <label class="form__label form__label--name flex">
                    <span class="form__label-text">Name</span>
                    <input class="form__input form__input--name" v-model="userName" type="text" required>
                </label>
                <label class="form__label form__label--surname flex">
                    <span class="form__label-text">Surname</span>
                    <input class="form__input form__input--surname" v-model="userSurname" required type="text">
                </label>
                <label class="form__label form__label--nickname flex">
                    <span class="form__label-text">Nickname</span>
                    <input class="form__input form__input--nickname" v-model="userNickname" required type="text">
                </label>
                <label class="form__label form__label--email flex">
                    <span class="form__label-text">E-mail</span>
                    <input class="form__input form__input--email" v-model="userEmail" required type="email">
                </label>
                <label class="form__label form__label--socialnetworks flex">
                    <span class="form__label-text">Social Networks</span>
                    <input class="form__input form__input--socialnetworks" v-model="userSocialNetworks" type="text">
                </label>
            </div>
            <div class="form__buttons buttons flex">
                <button class="buttons__submit btn" type="submit">Register</button>
                <button class="buttons__clear btn" type="reset">Clear</button>
            </div>
        </form>
    </section>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore();
const router = useRouter();

const userLogin = ref('')
const userPassword = ref('')
const userName = ref('')
const userSurname = ref('')
const userNickname = ref('')
const userEmail = ref('')
const userSocialNetworks = ref('')

const handleSubmit = async () => {
    const data = {
        userLogin: userLogin.value,
        userPassword: userPassword.value,
        userName: userName.value,
        userSurname: userSurname.value,
        userNickname: userNickname.value,
        userEmail: userEmail.value,
        userSocialNetworks: userSocialNetworks.value
    }
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        store.commit('loginUser')
        router.push('/')
    } catch (error) {
        console.error(error.message)
    }
};
</script>

<style scoped>
.reg {
    margin: 0 auto;
    padding: 0 15px;
    width: max(40%, 290px);
}

.reg__title {
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
    justify-content: space-between;
    width: 100%;
}

.form__label-text {
    margin-right: 15px;
    max-width: 200px;
    width: 100%;
    font-size: clamp(16px, 4vw, 19px);
}

.form__input {
    padding: 0 10px;
    max-width: 390px;
    width: 100%;
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