<template>
    <div class="site">
        <div class="site-content">
            <site-header />
            <nuxt />
        </div>
        <site-footer />
    </div>
</template>

<script>
import SiteHeader from '~components/Header.vue'
import SiteFooter from '~components/Footer.vue'

export default {
    components: {
        SiteHeader,
        SiteFooter
    }
}
</script>

<style scoped>
.site {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.site-content {
    flex: 1;
}
</style>
