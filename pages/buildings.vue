<template>
    <div class="container">
        <div class="centered text-center">
            <h1>Building Overview</h1>
            <p>Status of Broken Shore Buildings.</p>
            <div class="row">
                <div class="col-xs-12 col-md-4"><Building name="Mage Tower" buildingtype="magetower" /></div>
                <div class="col-xs-12 col-md-4"><Building name="Command Center" buildingtype="commandcenter" /></div>
                <div class="col-xs-12 col-md-4"><Building name="Nether Disruptor" buildingtype="netherdisruptor" /></div>
            </div>
        </div>
        <p>{{ $store.state.buildings.lastupdated }}</p>
    </div>
</template>

<script>
import Building from '~components/buildings/Building.vue'
import api from '~plugins/axios'

export default {
    fetch ({ store, params }) {
        // no async await, cause it doesn't wait... wtf
        return api.get('/buildings')
        .then(({ data }) => {
            store.commit('updateBuildings', data)
        })
    },
    components: {
        Building
    }
}
</script>
