<template>
    <div>
        <div class="site-content">
            <site-header></site-header>
            <nuxt></nuxt>
        </div>
        <site-footer></site-footer>
    </div>
</template>

<script>
import SiteHeader from '~/components/Header.vue'
import SiteFooter from '~/components/Footer.vue'

export default {
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
</style>
