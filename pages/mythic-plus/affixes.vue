<template>
    <div>
        <div v-if="!error" class="container">
            <h1 class="mb-4">Mythic+ Affixes</h1>
            <span class="badge badge-success rounded-0 mr-1">Easy</span>
            <span class="badge badge-warning rounded-0 mr-1">Medium</span>
            <span class="badge badge-danger rounded-0">Hard</span>
            <div class="row ">
                <div class="col-xs-12 col-md-4" v-for="(affix, i) in affixes" :key="affix.id">
                    <b-tooltip class="d-inline mb-5" placement="bottom" :content="affix.description" triggers="hover">
                        <h1 class="d-inline" :class="{ 'mr-3': (i !== affixes.length - 1) }">
                            <div class="badge rounded-0 w-100" :class="getBadgeColorClass(affix.name)">
                                {{ affix.name }}
                            </div>
                        </h1>
                    </b-tooltip>
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
    { 'name': 'Raging', 'difficulty': 'badge-warning' },
    { 'name': 'Volcanic', 'difficulty': 'badge-success' },
    { 'name': 'Teeming', 'difficulty': 'badge-warning' },
    { 'name': 'Explosive', 'difficulty': 'badge-success' },
    { 'name': 'Fortified', 'difficulty': 'badge-danger' },
    { 'name': 'Bolstering', 'difficulty': 'badge-warning' },
    { 'name': 'Grievous', 'difficulty': 'badge-warning' },
    { 'name': 'Sanguine', 'difficulty': 'badge-success' },
    { 'name': 'Bursting', 'difficulty': 'badge-warning' },
    { 'name': 'Necrotic', 'difficulty': 'badge-danger' },
    { 'name': 'Skittish', 'difficulty': 'badge-danger' },
    { 'name': 'Quaking', 'difficulty': 'badge-warning' },
    { 'name': 'Tyrannical', 'difficulty': 'badge-danger' }
]

export default {
    data () {
        return { error: false }
    },
    async asyncData () {
        try {
            let { data } = await api.get('/mythicplus/affixes')
            return { affixes: data.affixes }
        } catch (error) {
            return { error: true }
        }
    },
    methods: {
        getBadgeColorClass (name) {
            return affixes.find(x => x.name === name).difficulty
        }
    },
    components: { Error }
}
</script>

