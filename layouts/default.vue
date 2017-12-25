<template>
    <div>
        <nuxt></nuxt>
        <site-footer></site-footer>
    </div>
</template>

<script>
import SiteFooter from '~/components/Footer.vue'

export default {
    components: { SiteFooter }
}
</script>

<style lang="less">
.site-content {
    min-height: 100vh;
}
</style>
