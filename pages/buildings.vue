<template>
    <div class="container">
        <div class="centered text-center">
            <div v-if="!error">
                <h1 class="mb-5">Broken Shore Buildings</h1>
                <div class="row">
                    <div class="col-xs-12 col-md-4">
                        <Building name="Mage Tower" buildingtype="magetower" :buildingdata="magetower" />
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <Building name="Command Center" buildingtype="commandcenter" :buildingdata="commandcenter" />
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <Building name="Nether Disruptor" buildingtype="netherdisruptor" :buildingdata="netherdisruptor" />
                    </div>
                </div>
                <small>Last updated: {{ (new Date(lastupdated)).toUTCString() }}</small>
            </div>
            <div v-else>
                <span class="display-3 d-inline-block rotate-90">=(</span><br>
                <hr class="my-4" />
                <p class="lead">We are experiencing some issues while fetching Broken Shore building data.</p>
                <a href="." class="btn btn-primary">Try again</a>
            </div>       
        </div>
        
    </div>
</template>

<script>
import Building from '~components/buildings/Building.vue'
import api from '~plugins/axios'

export default {
    data () {
        return { error: false }
    },
    async asyncData () {
        try {
            let { data } = await api.get('/buildings')
            return {
                magetower: { state: data.magetower.state, progress: data.magetower.contributed },
                commandcenter: { state: data.commandcenter.state, progress: data.commandcenter.contributed },
                netherdisruptor: { state: data.netherdisruptor.state, progress: data.netherdisruptor.contributed },
                lastupdated: data.lastupdated
            }
        } catch (error) {
            return { error: true }
        }
    },
    components: {
        Building
    }
}
</script>
