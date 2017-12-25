<template>
    <div class="container is-fluid is-marginless">
        <div v-if="!error">
            <div class="hero is-fullheight is-dark is-priest">
                <div class="hero-head">
                    <navigation-bar></navigation-bar>
                </div>
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title has-text-centered">Mythic+ Affixes</h1>
                        <h2 class="subtitle has-text-centered">These are the affixes you will face this week. Happy hunting!</h2>
                        <div class="content">
                            <div class="columns">
                                <div class="column" v-for="(affix,i) in currentAffixes" :key="affix.id">
                                    <affix :name="affix.name" :description="affix.description" :difficulty="affix.difficulty"></affix>
                                </div>
                            </div>
                        </div>
                        <p class="has-text-centered"><a href="#all-keystone-effects" v-smooth-scroll><b-icon icon="chevron-down" custom-class="has-jump-down-anim" size="is-large"></b-icon></a></p>
                    </div>
                </div>
            </div>

            <div id="all-keystone-effects"></div>

            <affix-section level="4" :affixes="getAffixesByLevel(0)"></affix-section>
            <affix-section level="7" :affixes="getAffixesByLevel(1)"></affix-section>
            <affix-section level="10" :affixes="getAffixesByLevel(2)"></affix-section>

        </div>
        <error message="We are experiencing some issues while fetching Mythic+ affix data." v-else></error>
    </div>
</template>

<script>
import Error from '~/components/Error.vue'
import Affix from '~/components/mythicplus/Affix.vue'
import AffixSection from '~/components/mythicplus/AffixSection.vue'
import NavigationBar from '~/components/Header.vue'

import affixes from '~/pages/mythicplus/affixes.json'

export default {
    data () {
        return { error: false }
    },
    async asyncData ({ app }) {
        try {
            let data = await app.$axios.$get('/mythicplus/affixes')
            return { apiAffixes: data.affixes }
        } catch (error) {
            return { error: true }
        }
    },
    computed: {
        currentAffixes () {
            let currentAffixes = []
            this.apiAffixes.forEach((affix) => {
                currentAffixes.push(affixes.find(x => x.id === affix.id))
            })
            return currentAffixes
        }
    },
    methods: {
        getAffixesByLevel (level) {
            return affixes.filter(x => x.level === level)
        }
    },
    components: { NavigationBar, Error, Affix, AffixSection }
}
</script>

