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
                        <img src="~/assets/svg/caffeine.svg">
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
