<template>
    <div class="card card-inverse">
        <img class="card-img" :class="{ 'desaturate': !isActive }" :src="cardImage">
        <div class="card-img-overlay">
            <h6 class="card-title">{{ building.title }}</h6>
            <h4 class="card-title font-weight-bold">{{ stateTitle }}</h4>

            <div v-if="!isDestroyed">
                <a v-if="building.buff1" :class="{ 'desaturate': !isActive }" :href="buff1Url" :title="building.buff1.name" target="_blank">
                    <img style="height: 48px;" :src="buff1Image"></img>
                </a>
                <a v-if="building.buff2" :class="{ 'desaturate': !isActive }" :href="buff2Url" :title="building.buff2.name" target="_blank">
                    <img class="ml-3" style="height: 48px;" :src="buff2Image"></img>
                </a>
            </div>
        </div>
        <div v-if="!isDestroyed" class="card-footer">
            <div class="progress">
                <div class="progress-bar bg-inverse height-24" style="line-height: 24px;" v-bind:style="{ width: progress + '%'}">{{ progress }}%</div>
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
        buff1Url () {
            if (this.building.buff1) return 'http://www.wowhead.com/spell=' + this.building.buff1.id
        },
        buff2Url () {
            if (this.building.buff2) return 'http://www.wowhead.com/spell=' + this.building.buff2.id
        },
        isActive () {
            return this.building.state === 2
        },
        isUnderAttack () {
            return this.building.state === 3
        },
        isDestroyed () {
            return this.building.state === 4
        }
    }
}
</script>
