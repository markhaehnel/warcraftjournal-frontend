<template>
    <div class="container-fluid is-marginless">
        <div class="hero is-fullheight is-dark is-druid" v-if="!error">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <p class="tokenprice">{{ tokenprice }}<span class="subtitle is-5">G</span></p>
                    <h1 class="title">WoW Token</h1>
                    <span class="tag is-dark">Updated&nbsp;<timeago :since="token.time" :auto-update="1"></timeago></span>
                    
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
                    time: data.time
                }
            }
        } catch (error) {
            return { error: true }
        }
    },
    computed: {
        tokenprice () { return this.token.price.toLocaleString() },
        latupdated () { return (new Date(this.token.lastUpdated)).toLocaleTimeString() }
    },
    components: { Error }
}
</script>

<style scoped>
.tokenprice {
    font-size: 5em !important;
    font-weight: 100;
}
</style>
