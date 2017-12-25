<template>
    <div>
        <div class="site-content">
            <site-header></site-header>
            <div class="hero is-fullheight is-danger is-bold">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">Error {{ error.statusCode }}</h1>
                        <h2 class="subtitle">{{ error.message }}</h2>
                    </div>
                </div>
            </div>
        </div>
        <site-footer></site-footer>
    </div>
</template>

<script>
import SiteHeader from '~/components/Header.vue'
import SiteFooter from '~/components/Footer.vue'

export default {
    props: ['error'],
    components: {
        SiteHeader,
        SiteFooter
    }
}
</script>

<style lang="less">
.site-content {
    min-height: 100vh;
}
