<template>
    <div class="dropshadow">
        <div class="top-bar" />
        <header class="container centered">
            <main-menu />
            <div class="brand-container">
                <nuxt-link to="/" class="brand">The Warcraft Journal</nuxt-link>
            </div>
        </header>
    </div>
</template>

<script>
import MainMenu from '~components/header/MainMenu.vue'

export default {
    components: {
        MainMenu
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables.scss';

.top-bar {
    height: 5px;
    background-color: #000;
    margin: 0;
    padding: 0;
    display: block;
}

.brand {
    font-family: 'Bree Serif',serif;
    font-size: 2em;
    margin: 0;
    margin-left: 16px;
    display: inline-block;
    line-height: 50px;
    font-weight: 600;
    border: none;
}

.brand-container {
    display:inline-block;
}

@media (max-width:767px) {
    .brand {
        font-size: 1.4em;
    }
}
</style>
