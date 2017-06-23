<template>
    <b-popover placement="left" :title="buff.name" :content="buff.description" triggers="hover">
        <a :class="{ 'desaturate': !isActive }" :href="buff.wowhead" target="_blank">
            <img class="buff" :class="{ 'buff-active': isActive }" :src="buff.icon"></img>
        </a>
    </b-popover>
</template>

<script>
export default {
    props: ['buff', 'isActive']
}
</script>

<style>
.buff {
    height: 48px;
    box-shadow: 0 0 0 2px #3c3e3f, 0 0 0 3px #9f9f9f;
}
.buff-active {
    box-shadow: 0 0 0 2px #74ed12;
}
</style>
