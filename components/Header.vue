<template>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link class="navbar-item" to="/">The Warcraft Journal</nuxt-link>

                <button class="button navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div class="navbar-menu">
                <div class="navbar-end">
                    <nuxt-link exact class="navbar-item" to="/">Home</nuxt-link>
                    <nuxt-link exact class="navbar-item" to="/mythic-plus/affixes">Mythic+ Affixes</nuxt-link>
                </div>
            </div>
        </div>
    </nav>
</template>
