<template>
    <div class="text-centered">
        <h1>Building Overview</h1>
        <p>Status of Broken Shore Buildings.</p>

        <Building name="Mage Tower" :building="magetower" />
        <Building name="Command Center" :building="commandcenter" />
        <Building name="Nether Disruptor" :building="netherdisruptor" />

        <p>Last updated: {{ lastupdated }}</p>
    </div>
</template>

<script>
import api from '~plugins/axios'
import Building from '~components/buildings/Building.vue'

export default {
    async asyncData () {
        let { data } = await api.get('/buildings')

        return {
            magetower: data.magetower,
            commandcenter: data.commandcenter,
            netherdisruptor: data.netherdisruptor,
            lastupdated: data.lastupdated
        }
    },
    components: {
        Building
    }
}
</script>
