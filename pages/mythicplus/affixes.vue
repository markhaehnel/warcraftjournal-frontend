<template>
    <div class="container is-fluid is-marginless">
        <div v-if="!error">
            <div class="hero is-large is-primary is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title has-text-centered">Mythic+ Affixes</h1>
                        <h2 class="subtitle has-text-centered">These are the affixes you will face this week. Happy hunting!</h2>
                        <div class="content">
                            <div class="columns">
                                <div class="column" v-for="(affix, i) in currentAffixes" :key="affix.id">
                                    <affix :name="affix.name" :description="affix.description" :difficulty="affix.difficulty"></affix>
                                </div>
                            </div>
                        </div>
                        <p class="has-text-centered"><a href="#all-keystone-effects" v-smooth-scroll><b-icon icon="expand_more" size="is-large"></b-icon></a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <section class="section">
                    <h1 class="title" id="all-keystone-effects">All Keystone Effects</h1>
                    <h2 class="subtitle">+4 Keystone Effects</h2>
                    <div class="content">
                        <div class="columns is-multiline">
                            <div class="column is-one-third" v-for="affix in getAffixesByLevel(0)" :key="affix.id">
                                <affix :name="affix.name" :description="affix.description" :difficulty="affix.difficulty"></affix>
                            </div>
                        </div>
                    </div>

                    <h2 class="subtitle">+7 Keystone Effects</h2>

                    <div class="content">
                        <div class="columns is-multiline">
                            <div class="column is-one-third" v-for="affix in getAffixesByLevel(1)" :key="affix.id">
                                <affix :name="affix.name" :description="affix.description" :difficulty="affix.difficulty"></affix>
                            </div>
                        </div>
                    </div>

                    <h2 class="subtitle">+10 Keystone Effects</h2>
                    <div class="content">
                        <div class="columns is-multiline">
                            <div class="column is-one-third" v-for="affix in getAffixesByLevel(2)" :key="affix.id">
                                <affix :name="affix.name" :description="affix.description" :difficulty="affix.difficulty"></affix>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <error message="We are experiencing some issues while fetching Mythic+ affix data." v-else></error>
    </div>
</template>

<script>
import Error from '~/components/Error.vue'
import Affix from '~/components/mythic-plus/Affix.vue'

let affixes = [
    { id: 2, name: 'Skittish', difficulty: 2, level: 1, description: 'Tanks generate 75% less threat.' },
    { id: 3, name: 'Volcanic', difficulty: 0, level: 1, description: 'Enemies cause eruptions of flame near distant players. Additional volcanoes may appear near existing volcanoes.' },
    { id: 4, name: 'Necrotic', difficulty: 2, level: 1, description: 'Enemy melee attacks apply a stacking debuff that deals damage and reduces healing received. Debuff lasts 9 seconds and is dispelled when exiting combat.' },
    { id: 5, name: 'Teeming', difficulty: 1, level: 0, description: 'Additional non-boss enemies are present throughout the dungeon; kill count requirement increased.' },
    { id: 6, name: 'Raging', difficulty: 1, level: 0, description: 'Non-boss enemies will enrage at low health, dealing double damage until killed.' },
    { id: 7, name: 'Bolstering', difficulty: 1, level: 0, description: 'Non-boss enemies will buff nearby allies\' health and damage when defeated with a 30yd effective range.' },
    { id: 8, name: 'Sanguine', difficulty: 0, level: 0, description: 'Shortly after death, non-boss enemies will leave a pool of blood on the ground, which grows to a 5yd radius over 2 seconds. This pool heals enemies and damages players for a % of their maximum health. The pool\'s radius is 8 yds.' },
    { id: 9, name: 'Tyrannical', difficulty: 2, level: 2, description: 'Bosses have more health and deal 15% more damage.' },
    { id: 10, name: 'Fortified', difficulty: 2, level: 2, description: 'Non-bosses have more health and deal 30% more damage.' },
    { id: 11, name: 'Bursting', difficulty: 1, level: 0, description: 'When slain, non-boss enemies explode, causing all players to suffer 10% of their maximum health in damage over 4 seconds. (5% every 2 seconds) This effect stacks.' },
    { id: 12, name: 'Grievous', difficulty: 1, level: 1, description: 'While below 90% health, players are afflicted with Grievous Wound.' },
    { id: 13, name: 'Explosive', difficulty: 0, level: 1, description: 'Creatures have a chance to summon an Explosive Orb at a nearby location that will explode, inflicting damage 50% of the player’s maximum health as damage.' },
    { id: 14, name: 'Quaking', difficulty: 1, level: 1, description: 'Players will periodically Quake, inflicting 20% of the player’s maximum health as damage and interrupting spell casts of themselves and nearby allies.' }
]

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
    components: { Error, Affix }
}
</script>

