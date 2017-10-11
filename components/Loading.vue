<template lang="html">
    <b-loading :active="loading"></b-loading>
</template>

<script>
export default {
    data () { return { loading: false } },
    methods: {
        start () { this.loading = true },
        finish () { this.loading = false }
    }
}
</script>
