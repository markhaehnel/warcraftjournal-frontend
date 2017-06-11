<template>
    <footer>
        <div class="flexible-container">
            <p>Copyright &copy; {{year}} The Warcraft Journal : <a href="https://warcraftjournal.org">warcraftjournal.org</a></p>
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

<style scoped>
footer {
    padding: 8px;
    text-align: center;
    font-size: 0.8em;
}
footer p {
    margin: 0;
}

.flexible-container {
    display: inline-block;
    text-align: left;
}
</style>
