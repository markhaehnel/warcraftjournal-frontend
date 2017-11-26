<template>
    <div>
        <newsletter></newsletter>
        <footer class="footer">
            <div class="container">
                <div class="content">
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
