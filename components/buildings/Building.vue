<template>
    <div class="card card-inverse">
        <img class="card-img" src="~assets/images/brokenshore.jpg">
        <div class="card-img-overlay">
            <h4 class="card-title">{{ name }}</h4>
            <h6 class="card-text">{{ state }}</h6>
        </div>
            <div class="progress">
                <div class="progress-bar bg-success" v-bind:style="{ width: progress + '%'}" style="height: 24px;" />
            </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'buildingtype'],
    computed: {
        state () {
            switch (this.$store.state.buildings[this.buildingtype].state) {
            case 1: return 'Under Construction'
            case 2: return 'Active'
            case 3: return 'Under Attack'
            case 4: return 'Destroyed'
            default: return 'Unknown State'
            }
        },
        progress () {
            return (this.$store.state.buildings[this.buildingtype].progress * 100).toFixed(2)
        }
    }
}
</script>
