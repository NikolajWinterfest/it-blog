<template>
    <section class="login">
        <h1 class="login__title">Enter your login and password</h1>
        <form class="login__form form flex" @submit.prevent="handleSubmit">
            <label class="form__label flex">
                <input class="form__input form__input--log"
                    v-model="loginName"
                    type="text"
                    placeholder="login name"
                    required
                >
            </label>
            <label class="form__label flex">
                <input class="form__input form__input-pass"
                    v-model="password"
                    type="password"
                    placeholder="password"
                    required
                >
            </label>
            <div class="form__buttons buttons flex">
                <button class="buttons__submit btn" type="submit">Send</button>
                <button class="buttons__clear btn" type="reset">Clear</button>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import axios from 'axios'

const store = useStore()
const router = useRouter()

const loginName = ref('')
const password = ref('')

const handleSubmit = async () => {
    const data = {
        loginName: loginName.value,
        password: password.value
    }

    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        if (data.loginName === 'admin' && data.password === 'admin') {
            store.commit('loginUser')
            store.commit('loginAdmin', true)
        } else {
            store.commit('loginUser')
            store.commit('loginAdmin', false)
        }

        router.push('/')
    } catch (error) {
        console.error(error.message)
    }
};

</script>
<style scoped>
.login {
    margin: 0 auto;
    padding: 0 15px;
    width: max(40%, 290px);
}

.login__title {
    font-size: clamp(29px, 8vw, 39px);
    text-align: center;
}

.login__form {
    flex-direction: column;
    justify-content: center;
    gap: 25px;
}

.form__label {
    width: 100%;
    justify-content: center;
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