<template>
    <div class="has-text-centered">
        <div class="hero is-error is-large">
            <div class="hero-head">
                <navigation-bar></navigation-bar>
            </div>
            <div class="hero-body">
                <h1 class="title has-text-danger smiley">=(</h1>
                <h2 class="subtitle">{{ message }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '~/components/Header.vue'

export default {
    props: ['message'],
    components: { NavigationBar }
}
</script>

<style lang="less" scoped>
.smiley {
    transform: rotate(90deg);
    font-size: 7rem;
}
</style>
