<template>
    <div>
        <div class="hero is-large is-dark is-shaman">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        <strong>Welcome to The Warcraft Journal.</strong>
                    </h1>
                    <h2 class="subtitle">
                        Statistics and calculations on World of Warcraft guild and player data.
                    </h2>
                </div>
            </div>
        </div>

        <div class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <nuxt-link class="column has-text-centered" to="/guilds">
                            <b-icon icon="account-multiple" size="is-large"></b-icon>
                            <p class="title is-4">Guild Lookup</p>
                            <p class="subtitle">Compare and evaluate gear</p>
                        </nuxt-link>
                        <nuxt-link class="column has-text-centered" to="/token">
                            <b-icon icon="coins" size="is-large"></b-icon>
                            <p class="title is-4">WoW Token</p>
                            <p class="subtitle">Current and historical token prices</p>
                        </nuxt-link>
                        <nuxt-link class="column has-text-centered" to="/mythicplus/affixes">
                            <b-icon icon="format-list-numbers" size="is-large"></b-icon>
                            <p class="title is-4">Mythic+</p>
                            <p class="subtitle">Affix information and cycles</p>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a:hover > .title {
  text-decoration: underline;
}
</style>
