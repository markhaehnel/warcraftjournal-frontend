<template>
    <div class="container">
        <div class="centered">
            <div v-if="!error">
                <h1 class="mb-5">Broken Shore Buildings</h1>
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <Building :building="magetower"></Building>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <Building :building="commandcenter"></Building>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <Building :building="netherdisruptor"></Building>
                    </div>
                </div>
                <small>Last updated: {{ (new Date(lastupdated)).toUTCString() }}</small>
            </div>
            <buildings-error v-else></buildings-error>
                 
        </div>
        
    </div>
</template>

<script>
import api from '~plugins/axios'
import Building from '~components/buildings/Building.vue'
import BuildingsError from '~components/buildings/BuildingsError.vue'

export default {
    data () {
        return { error: false }
    },
    async asyncData () {
        try {
            let { data } = await api.get('/buildings')
            return {
                magetower: {
                    title: 'Mage Tower',
                    state: data.magetower.state,
                    progress: data.magetower.contributed,
                    buff1: data.magetower.buff1,
                    buff2: data.magetower.buff2
                },
                commandcenter: {
                    title: 'Command Center',
                    state: data.commandcenter.state,
                    progress: data.commandcenter.contributed,
                    buff1: data.commandcenter.buff1,
                    buff2: data.commandcenter.buff2
                },
                netherdisruptor: {
                    title: 'Nether Disruptor',
                    state: data.netherdisruptor.state,
                    progress: data.netherdisruptor.contributed,
                    buff1: data.netherdisruptor.buff1,
                    buff2: data.netherdisruptor.buff2
                },
                lastupdated: data.lastupdated
            }
        } catch (error) {
            return { error: true }
        }
    },
    components: {
        Building,
        BuildingsError
    }
}
</script>
