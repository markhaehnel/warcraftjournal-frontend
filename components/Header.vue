<template>
    <nav class="navbar is-dark has-shadow" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <div div class="navbar-item navbar-brand-font">The Warcraft Journal</div>

                <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
                <div class="navbar-end">
                    <nuxt-link exact class="navbar-item" to="/">Home</nuxt-link>
                    <nuxt-link class="navbar-item" to="/guilds">Guilds</nuxt-link>
                    <nuxt-link class="navbar-item" to="/token">Token</nuxt-link>
                    <nuxt-link class="navbar-item" to="/mythicplus/affixes">Mythic Dungeons</nuxt-link>
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
