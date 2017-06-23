<template>
    <div class="site">
        <div class="site-content">
            <site-header></site-header>
            <div class="container">
                <nuxt></nuxt>
            </div>
        </div>
        <site-footer></site-footer>
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
