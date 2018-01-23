<template>
    <div>
        <div class="site-content">
            <div class="hero is-fullheight is-danger is-bold">
                <div class="hero-head">
                    <site-header></site-header>
                </div>
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h2 class="title">{{ error.message }}</h2>
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
