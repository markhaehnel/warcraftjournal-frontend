<template>
    <div class="text-center">
        <div v-if="!error">
            <h1 class="mb-5">Mythic+ Affixes</h1>
            <b-tooltip v-for="(affix, i) in affixes" :key="affix.id" class="d-inline" placement="bottom" :content="affix.description">
                <h3 class="d-inline description" :class="{ 'mr-3': (i !== affixes.length - 1) }">
                    <span class="text-muted">+{{ (3*i)+4 }}</span> {{ affix.name }}
                </h3>
            </b-tooltip>
        </div>
        <error message="We are experiencing some issues while fetching Mythic+ affix data." v-else></error>
    </div>
</template>

<script>
import api from '~plugins/axios'
import Error from '~components/Error.vue'

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
    components: { Error }
}
</script>

