<template>
    <div class="has-text-centered">
        <div class="hero is-error is-large">
            <div class="hero-body">
                <h1 class="title smiley">=(</h1>
                <h2 class="subtitle">{{ message }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style lang="less" scoped>
.smiley {
    transform: rotate(90deg);
    font-size: 7rem;
}
</style>
