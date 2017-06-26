<template>
    <div>
        <div v-if="!error" class="container">
            <h1 class="mb-4">Mythic+ Affixes</h1>
            <div class="float-right">
                <span class="badge badge-success rounded-0 mr-1">Easy</span>
                <span class="badge badge-warning rounded-0 mr-1">Medium</span>
                <span class="badge badge-danger rounded-0">Hard</span>
            </div>
            
            <h4>Current affixes:</h4>
            <div class="row">
                <div class="col-xs-12 col-md-4" v-for="(affix, i) in currentAffixes" :key="affix.id">
                    <h1 class="d-inline" :class="{ 'mr-3': (i !== currentAffixes.length - 1) }">
                        <div class="badge rounded-0 w-100" :class="getBadgeColorClass(affix.id)">
                            {{ affix.name }}
                        </div>
                    </h1>
                    <p class="m-2">
                        {{ affix.description }}
                    </p>
                </div>
            </div>

            <hr class="mt-5 mb-5">

            <h2>All Keystone Effects</h2>

            <h5 class="mt-3">+4 Keystone Effects</h5>
            <div class="row">
                <div class="col-xs-12 col-md-4" v-for="affix in getAffixesByLevel(0)" :key="affix.id">
                    <h3 class="d-inline" >
                        <div class="badge rounded-0 w-100" :class="getBadgeColorClass(affix.id)">
                            {{ affix.name }}
                        </div>
                    </h3>
                    <p class="m-2">
                        {{ affix.description }}
                    </p>
                </div>
            </div>

            <h5 class="mt-3">+7 Keystone Effects</h5>
            <div class="row">
                <div class="col-xs-12 col-md-4" v-for="affix in getAffixesByLevel(1)" :key="affix.id">
                    <h3 class="d-inline" >
                        <div class="badge rounded-0 w-100" :class="getBadgeColorClass(affix.id)">
                            {{ affix.name }}
                        </div>
                    </h3>
                    <p class="m-2">
                        {{ affix.description }}
                    </p>
                </div>
            </div>

            <h5 class="mt-3">+10 Keystone Effects</h5>
            <div class="row">
                <div class="col-xs-12 col-md-4" v-for="affix in getAffixesByLevel(2)" :key="affix.id">
                    <h3 class="d-inline" >
                        <div class="badge rounded-0 w-100" :class="getBadgeColorClass(affix.id)">
                            {{ affix.name }}
                        </div>
                    </h3>
                    <p class="m-2">
                        {{ affix.description }}
                    </p>
                </div>
            </div>
        </div>
        <error message="We are experiencing some issues while fetching Mythic+ affix data." v-else></error>
    </div>
</template>

<script>
import api from '~plugins/axios'
import Error from '~components/Error.vue'

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
    async asyncData () {
        try {
            let { data } = await api.get('/mythicplus/affixes')
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
        getBadgeColorClass (id) {
            switch (affixes.find(x => x.id === id).difficulty) {
            case 0: return 'badge-success'
            case 1: return 'badge-warning'
            case 2: return 'badge-danger'
            }
        },
        getAffixesByLevel (level) {
            return affixes.filter(x => x.level === level)
        }
    },
    components: { Error }
}
</script>

