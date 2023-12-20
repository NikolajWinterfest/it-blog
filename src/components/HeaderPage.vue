<template>
    <header class="header">
        <div class="header__wrapper container">
            <div class="header__logo">
                <router-link to="/">
                    it-BLOG
                </router-link>
            </div>
            <nav class="nav-menu flex">
                <ul class="nav-menu__list flex">
                    <li class="nav-menu__userprofile userprofile flex" v-if="!isAuthenticated">
                        <router-link to="/registration" @click="signUp">
                            <div class="userprofile__signup">Sign Up</div>
                        </router-link>
                        <router-link to="/login" @click="logIn">
                            <div class="userprofile__login">Log In</div>
                        </router-link>
                    </li>
                    <li class="nav-menu__userprofile userprofile" v-else @click="logOut">
                        <div class="userprofile__logout">Log Out</div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()

const isAuthenticated = ref(store.state.isAuthenticated)
const isAdmin = ref(JSON.parse(localStorage.getItem('isAdmin')) || false)

watch(() => store.state.isAuthenticated, (newStatus) => {
    isAuthenticated.value = newStatus;
})

watch(isAdmin, (newStatus) => {
    store.commit('loginAdmin', newStatus)
})

const logOut = () => {
    store.commit('logoutUser');
    store.commit('loginAdmin', false);
    localStorage.removeItem('isAdmin')
    if (router.currentRoute.value.path === '/createpost') {
        router.push('/')
    }
};
</script>

<style scoped>
.header {
    padding: 25px 0;
    width: 100%;
    height: 40px;
    border-bottom: 50px solid #e8e8e8;
    font-family: 'Open Sans';
    color: #515151;
    background-color: #ffffff;
}

.header__logo {
    display: block;
    text-align: center;
    font-weight: 100;
    font-size: 39px;
    letter-spacing: 2px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.nav-menu {
    justify-content: center;
    transform: translateY(35px);
}

.userprofile {
    justify-content: center;
    padding-bottom: 10px;
    gap: 50px;
    max-width: 250px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 2px;
}

.userprofile__signup,
.userprofile__login,
.userprofile__logout {
    cursor: pointer;
    transition: color 0.3s ease;
}

.userprofile__signup:hover,
.userprofile__login:hover,
.userprofile__logout:hover {
    color: #a5a5a5;
    transition: color 0.3s ease;
}
</style>