<template>
    <div>
        <div class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <nuxt-link class="column has-text-centered" to="/guilds">
                            <p class="title is-4">Guild Lookup</p>
                            <p class="subtitle">Compare and evaluate gear</p>
                        </nuxt-link>
                        <nuxt-link class="column has-text-centered" to="/token">
                            <p class="title is-4">WoW Token</p>
                            <p class="subtitle">Current and historical token prices</p>
                        </nuxt-link>
                        <nuxt-link class="column has-text-centered" to="/mythicplus/affixes">
                            <p class="title is-4">Mythic+</p>
                            <p class="subtitle">Affix information and cycles</p>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <newsletter></newsletter>
        <footer class="footer">
            <div class="container">
                <div class="content">
                    <p class="has-text-centered">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.8 273.8" class="caffeine">
                            <path d="M186.7 121.6h2.4v45.6h-2.4zM27.312 87.833l1.2-2.078 33.334 19.265-1.201 2.078zM126.5 222.3h2.4v37.4h-2.4zm140.6-77.2l.6-.7-.6-.7-.6-.9-.5-.7-18.9-26-1.9 1.4 18.8 26 .4.5.3.4-18.8 25.9 1.9 1.4 18.2-25v-.1l1.1-1.5z"/>
                            <path d="M237.501 164.27l15.806-21.764 1.942 1.41-15.806 21.765zM214.9 102.2l-37.2 12.1L134 89.1V50.2h-2.3v37.5l-3.2-1.8-.8-.5-.9.5-3.1 1.8V50.2h-2.4v38.9l-27.6 16 1.2 2 31.6-18.2 1.2-.7 1.1.7v-.1l47.5 27.5v56.2l-32.7 19 1.2 2 32.9-19 37.2 12.1.7-2.3-36.9-12v-55.8l36.9-12zm23.082-25.639l11.046-33.947 2.282.743-11.046 33.947zM70.4 107.1h.1l14.4 22.4h3.8v-28.7h-3.6v22.3l-14.4-22.3h-3.9v28.7h3.6zm8.6 64.1v-35.3h-2.4v30.6l-34 19.6 1.3 2.1 32.7-18.9v4.6l2.3 1.4 1.7.9-32.8 18.9 1.2 2.1 34-19.6 27.5 15.9 1.2-2-32.7-19zm56.1 38.3h-.1l-14.4-22.3h-3.9v28.7h3.6v-22.4l14.4 22.4h3.9v-28.7h-3.5zM34.9 188.8c-3.1-1.8-7-1.8-7-1.8-3.9 0-7 1.8-7 1.8-3.2 1.8-4.9 5.2-4.9 5.2-1.8 3.4-1.8 7.8-1.8 7.8 0 4.3 1.8 7.7 1.8 7.7 1.8 3.4 4.9 5.2 4.9 5.2 3.1 1.8 7.1 1.8 7.1 1.8 3.9 0 7-1.8 7-1.8 3.1-1.8 4.9-5.2 4.9-5.2 1.8-3.4 1.8-7.8 1.8-7.8 0-4.5-1.8-7.8-1.8-7.8-1.8-3.3-5-5.1-5-5.1zm1.5 19.2c-1.2 2.6-3.5 4-3.5 4-2.2 1.4-5 1.4-5 1.4-2.8 0-5.1-1.4-5.1-1.4-2.2-1.4-3.4-4-3.4-4-1.3-2.6-1.3-6.1-1.3-6.1 0-3.6 1.2-6.3 1.2-6.3 1.2-2.6 3.4-4 3.4-4 2.2-1.4 5.1-1.4 5.1-1.4 2.9 0 5.1 1.4 5.1 1.4 2.2 1.4 3.4 4 3.4 4 1.2 2.6 1.2 6.2 1.2 6.2.2 3.6-1.1 6.2-1.1 6.2zm84.2-166.1c3.2 1.8 7.1 1.8 7.1 1.8 3.9 0 7-1.8 7-1.8 3.1-1.8 4.9-5.2 4.9-5.2 1.8-3.4 1.8-7.8 1.8-7.8 0-4.5-1.8-7.8-1.8-7.8-1.8-3.3-4.9-5.2-4.9-5.2-3.1-1.8-7-1.8-7-1.8-3.9 0-7 1.8-7 1.8-3.2 1.8-4.9 5.2-4.9 5.2-1.8 3.4-1.8 7.8-1.8 7.8 0 4.3 1.8 7.7 1.8 7.7 1.7 3.5 4.8 5.3 4.8 5.3zm-1.5-19.1c1.2-2.6 3.5-4 3.5-4 2.2-1.4 5.1-1.4 5.1-1.4 2.9 0 5.1 1.4 5.1 1.4 2.2 1.4 3.5 4 3.5 4 1.2 2.6 1.2 6.2 1.2 6.2 0 3.6-1.2 6.2-1.2 6.2-1.2 2.6-3.5 4-3.5 4-2.2 1.4-5 1.4-5 1.4-2.8 0-5-1.4-5-1.4-2.2-1.4-3.5-4-3.5-4-1.2-2.6-1.2-6.1-1.2-6.1-.2-3.6 1-6.3 1-6.3zm120.6 175.7h-.1l-14.3-22.3h-4v28.7h3.6v-22.4h.1l14.4 22.4h3.9v-28.7h-3.6zM224.9 89.3h.1l14.4 22.4h3.9V83h-3.6v22.3h-.1L225.3 83h-4v28.7h3.6z"/>
                        </svg>
                    </p>
                    <p class="is-pulled-right has-text-weight-bold" v-once>{{ version }}</p>
                    <p>&copy;
                        <strong>The Warcraft Journal</strong> {{year}}</p>
                    <p class="has-text-justified">
                        World of Warcraft, Warcraft, Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Newsletter from '~/components/Newsletter.vue'

export default {
    data () {
        return {
            year: new Date().getFullYear(),
            version: process.env.CI_COMMIT_SHA
        }
    },
    components: { Newsletter }
}
</script>

<style scoped>
.caffeine {
    max-width: 96px;
}
</style>

