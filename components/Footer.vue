<template>
    <footer>
        <hr>
        <div class="container centered">
            <p class="mb-0">Copyright &copy; {{year}} The Warcraft Journal : <a href="https://warcraftjournal.org">warcraftjournal.org</a></p>
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
