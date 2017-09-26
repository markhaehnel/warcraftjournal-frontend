<template>
    <div>
        <h1>
            {{ error.statusCode }}
        </h1>
        <h2>
            {{ error.message }}
        </h2>
        <nuxt-link to="/" v-if="error.statusCode === 404">
            Homepage
        </nuxt-link>
    </div>
</template>
<script>
export default {
    props: ['error']
}
</script>
