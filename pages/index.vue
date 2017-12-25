<template>
    <div>
        <div class="hero is-fullheight is-dark is-shaman">
            <div class="hero-head">
                <navigation-bar></navigation-bar>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        <strong>Welcome to The Warcraft Journal.</strong>
                    </h1>
                    <h2 class="subtitle">
                        Statistics and calculations on World of Warcraft guild and player data.
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '~/components/Header.vue'
export default {
    components: { NavigationBar }
}
</script>


<style scoped>
a:hover > .title {
  text-decoration: underline;
}
</style>
