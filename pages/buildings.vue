<template>
    <div class="container">
        <div class="centered text-center">
            <div v-if="!error">
                <h1 class="mb-5">Broken Shore Buildings</h1>
                <div class="row">
                    <div class="col-xs-12 col-md-4">
                        <Building :building="magetower" />
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <Building :building="commandcenter" />
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <Building :building="netherdisruptor" />
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
import Building from '~components/Building.vue'
import api from '~plugins/axios'

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
        Building
    }
}
</script>
