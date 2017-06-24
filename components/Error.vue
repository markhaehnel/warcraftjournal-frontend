<template>
    <div class="text-center">
        <span class="display-3 d-inline-block rotate-90">=(</span><br>
        <hr class="my-4">
        <p class="lead">{{ message }}</p>
        <a href="." class="btn btn-primary">Try again</a>
    </div>
</template>

<script>
export default {
    props: ['message']
}
</script>
