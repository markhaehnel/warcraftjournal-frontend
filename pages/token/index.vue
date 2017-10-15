<template>
    <div class="container-fluid is-marginless">
        <div class="hero is-fullheight is-warning is-bold" v-if="!error">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">WoW Token</h1>
                    <p class="is-size-1">{{ tokenprice }}<span class="subtitle is-5">G</span></p>
                    <p class="subtitle is-6">Updated: {{ latupdated }}</p>
                </div>
            </div>
        </div>
        <error message="We are experiencing some issues while fetching WoW Token price data." v-else></error>
    </div>
</template>

<script>
import Error from '~/components/Error.vue'

export default {
    data () {
        return { error: false }
    },
    async asyncData ({ app }) {
        try {
            let data = await app.$axios.$get(`/token`)
            return {
                token: {
                    price: data.price / 10000,
                    lastUpdated: data.lastupdated
                }
            }
        } catch (error) {
            console.log(error)
        }
    },
    computed: {
        tokenprice () { return this.token.price.toLocaleString() },
        latupdated () { return (new Date(this.token.lastUpdated)).toLocaleTimeString() }
    },
    components: [ Error ]
}
</script>
