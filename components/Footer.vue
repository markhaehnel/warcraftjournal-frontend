<template>
    <footer class="footer">
        <div class="container">
            <div class="content">
                <div class="is-pulled-right">
                    <div class="tag is-dark" v-if="commitHash">{{ commitHash }}</div>
                </div>
                <p>&copy;
                    <strong>The Warcraft Journal</strong> {{year}}</p>
                <p class="has-text-justified">
                    World of Warcraft, Warcraft, Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data () {
        return {
            year: new Date().getFullYear(),
            commitHash: process.env.GIT_COMMIT_SHA
        }
    }
}
</script>
