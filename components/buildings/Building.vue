<template>
    <div class="card card-inverse mb-3" :class="borderStyles">
        <div class="card-background" :class="{ 'desaturate': !isActive }" :style="{ 'background-image': 'url('+cardImage+')' }"></div>
        <div class="card-block">
            <div class="row">
                <div class="col">
                    <h6 class="card-title">{{ building.title }}</h6>
                    <h5 class="card-title font-weight-bold">{{ stateTitle }}</h5>
                    <b-tooltip :content="progress + '%'">
                        <div v-if="isUnderConstruction" class="progress">
                            <div class="progress-bar" v-bind:style="{ width: progress + '%'}"></div>
                        </div>
                    </b-tooltip>
                </div>
                <div v-if="!isDestroyed" class="col col-md-auto text-right">
                    <buff class="mb-3" :buff="buffMain" :isActive="isActive || isUnderAttack" :isUnderAttack="isUnderAttack"></buff>
                    <buff :buff="buffSecondary" :isActive="isActive || isUnderAttack" :isUnderAttack="isUnderAttack"></buff>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Buff from '~components/buildings/Buff.vue'

let states = [
    { title: 'Unknown State', colorClass: 'bg-info' },
    { title: 'Under Construction', colorClass: 'bg-info' },
    { title: 'Active', colorClass: 'bg-success' },
    { title: 'Under Attack', colorClass: 'bg-warning' },
    { title: 'Destroyed', colorClass: 'bg-danger' }
]

export default {
    props: ['name', 'building'],
    data () {
        return { error: null }
    },
    computed: {
        buffMain () {
            return {
                ...this.building.buff1,
                icon: `/images/spells/${this.building.buff1.icon}.jpg`,
                wowhead: `http://www.wowhead.com/spell=${this.building.buff1.id}`
            }
        },
        buffSecondary () {
            if (this.building.buff2) {
                return {
                    ...this.building.buff2,
                    icon: `/images/spells/${this.building.buff2.icon}.jpg`,
                    wowhead: `http://www.wowhead.com/spell=${this.building.buff2.id}`
                }
            }
        },
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
            return `/images/buildings/${this.building.title.replace(' ', '').toLowerCase()}.jpg`
        },
        isUnderConstruction () {
            return this.building.state === 1
        },
        isActive () {
            return this.building.state === 2
        },
        isUnderAttack () {
            return this.building.state === 3
        },
        isDestroyed () {
            return this.building.state === 4
        },
        borderStyles () {
            return {
                'card-green': this.isActive,
                'card-orange': this.isUnderAttack,
                'card-red': this.isDestroyed
            }
        }
    },
    components: { Buff }
}
</script>

<style lang="less" scoped>
.card {
    @borderColor: #9f9f9f;
    box-shadow: 0 0 0 2px darken(@borderColor, 25%), 0 0 0 4px @borderColor;
    border: none;
}

.card-green {
    @borderColor: #74ed12;
    box-shadow: 0 0 0 2px darken(@borderColor, 25%), 0 0 0 4px @borderColor;
}

.card-orange {
    @borderColor: #f8b732;
    box-shadow: 0 0 0 2px darken(@borderColor, 25%), 0 0 0 4px @borderColor;
}

.card-background {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
}

.progress {
    position: absolute;
    bottom: 0;
    width: 180px;
    border-radius: 8px;
    background-color: gray;
}

.progress-bar {
    height: 8px;
    line-height: 8px;
    background-color: lightgray;
}
</style>
