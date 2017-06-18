<template>
    <div class="building-box">
        <h2>{{ name }}</h2>
        <p>{{ state }}</p>
        <h1>{{ progress }}%</h1>
    </div>
</template>

<script>
export default {
    props: ['name', 'building'],
    computed: {
        state () {
            switch (this.building.state) {
            case 1: return 'Under Construction'
            case 2: return 'Active'
            case 3: return 'Under Attack'
            case 4: return 'Destroyed'
            default: return 'Unknown State'
            }
        },
        progress () {
            return (this.building.contributed * 100).toFixed(2)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables.scss';

.building-box {
    display: inline-block;
    border: solid 1px black;
    padding: 8px;
    width: 256px;

    h2 {
        margin: 0;
    }
}

.building-box:not(:last-child) {
    margin-right: 8px;
}
</style>
