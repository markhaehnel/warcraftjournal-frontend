<template>
    <div class="card card-inverse">
        <img class="card-img" :src="'/images/buildings/' + this.buildingtype + '.jpg'">
        <div class="card-img-overlay">
            <h4 class="card-title">{{ name }}</h4>
            <h6 class="card-title">{{ state.title }}</h6>
            <h2 class="card-title">{{ progress }}%</h2>
            <div class="progress">
                <div class="progress-bar" :class="state.color" v-bind:style="{ width: progress + '%'}" style="height: 24px;" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return { error: null }
    },
    props: ['name', 'buildingtype', 'buildingdata'],
    computed: {
        state () {
            switch (this.buildingdata.state) {
            case 1: return { title: 'Under Construction', color: 'bg-info' }
            case 2: return { title: 'Active', color: 'bg-success' }
            case 3: return { title: 'Under Attack', color: 'bg-warning' }
            case 4: return { title: 'Destroyed', color: 'bg-danger' }
            default: return { title: 'Unknown State', color: 'bg-info' }
            }
        },
        progress () {
            return Math.round(this.buildingdata.progress * 100)
        }
    }
}
</script>
