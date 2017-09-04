<template>
    <footer class="pt-3">
        <div class="container centered">
            <p class="mb-0">&copy; {{year}} The Warcraft Journal</p>
            <p><small>World of Warcraft, Warcraft, Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.</small></p>
        </div>
    </footer>
</template>

<script>
export default {
    data () {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style lang="less">
@import '~assets/less/variables.less';

footer {
    color: @textLight;
    background-color: @backgroundDark;
    box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 1);
}
</style>
