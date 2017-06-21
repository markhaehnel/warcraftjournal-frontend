<template>
    <div class="card card-inverse">
        <img class="card-img" :class="{ 'desaturate': !isActive }" :src="cardImage">
        <div class="card-img-overlay">
            <h6 class="card-title">{{ building.title }}</h6>
            <h4 class="card-title font-weight-bold">{{ stateTitle }}</h4>

            <h2 v-if="!(isActive || isDestroyed)" class="card-title">{{ progress }}%</h2>
            
            <div v-if="isActive">
                <div v-if="building.buff1" class="mb-1"><img class="height-24" :src="buff1Image" /> {{ building.buff1.name }}</div>
                <div v-if="building.buff2"><img class="height-24" :src="buff2Image" /> {{ building.buff2.name }}</div>
            </div>
        </div>
        <div class="card-footer">
           <div class="progress">
                <div class="progress-bar bg-inverse height-24" v-bind:style="{ width: progress + '%'}" />
            </div>
        </div>
        
    </div>
</template>

<script>
let states = [
    { title: 'Unknown State', colorClass: 'bg-info' },
    { title: 'Under Construction', colorClass: 'bg-info' },
    { title: 'Active', colorClass: 'bg-success' },
    { title: 'Under Attack', colorClass: 'bg-warning' },
    { title: 'Destroyed', colorClass: 'bg-danger' }
]

export default {
    data () {
        return { error: null }
    },
    props: ['name', 'building'],
    computed: {
        progress () {
            return Math.round(this.building.progress * 100)
        },
        stateTitle () {
            return states[this.building.state].title
        },
        colorClass () {
            return states[this.building.state].colorClass
        },
        cardImage () {
            return '/images/buildings/' + this.building.title.replace(' ', '').toLowerCase() + '.jpg'
        },
        buff1Image () {
            return '/images/spells/' + this.building.buff1.icon + '.jpg'
        },
        buff2Image () {
            return '/images/spells/' + this.building.buff2.icon + '.jpg'
        },
        isActive () {
            return this.building.state === 2
        },
        isDestroyed () {
            return this.building.state === 4
        }
    }
}
</script>
