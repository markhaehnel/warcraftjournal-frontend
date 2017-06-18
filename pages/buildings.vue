<template>
    <div class="text-centered">
        <h1>Building Overview</h1>
        <p>Statistics and calculations on World of Warcraft guild and player data.</p>

        <Building name="Mage Tower" :building="magetower" />
        <Building name="Command Center" :building="commandcenter" />
        <Building name="Nether Disruptor" :building="netherdisruptor" />

        <p>Last updated: {{ lastupdated }}</p>
    </div>
</template>

<script>
import axios from 'axios'
import Building from '~components/buildings/Building.vue'

export default {
    async asyncData () {
        let { data } = await axios.get('http://localhost:3001/buildings')

        console.log(data)

        return {
            magetower: data.magetower,
            commandcenter: data.commandcenter,
            netherdisruptor: data.netherdisruptor,
            lastupdated: new Date(data.lastupdated).toLocaleTimeString()
        }
    },
    components: {
        Building
    }
}
</script>
