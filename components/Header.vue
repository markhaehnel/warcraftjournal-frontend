<template>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <div class="navbar-item navbar-brand-font" to="/" exact>The Warcraft Journal</div>

                <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
                <div class="navbar-end">
                    <nuxt-link exact class="navbar-item" to="/">Home</nuxt-link>
                    <nuxt-link exact class="navbar-item" to="/mythic-plus/affixes">Mythic+ Affixes</nuxt-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return { isMenuActive: false }
    },
    methods: {
        toggleMenu () {
            this.isMenuActive = !this.isMenuActive
        }
    }
}
</script>

<style scoped>
    .navbar-brand-font {
        font-family: 'Bree Serif', serif;
        color: #000;
        font-weight: 700;
        font-size: 1.4em;
    }
</style>
