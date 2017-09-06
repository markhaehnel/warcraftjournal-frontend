<template>
    <b-navbar toggleable class="dropshadow" fixed="top">
        <div class="container static">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
        
            <b-link class="navbar-brand" to="/">
                <h1 class="navbar-brand">The Warcraft Journal</h1>
            </b-link>
        
            <b-collapse is-nav id="nav_collapse" class="no-transition">
                <b-nav is-nav-bar class="ml-auto">
                    <nuxt-link exact class="nav-link" to="/">Home</nuxt-link>
                    <nuxt-link exact class="nav-link" to="/mythic-plus/affixes">Mythic+ Affixes</nuxt-link>
                </b-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<style lang="less">
@import '~assets/less/variables.less';
.navbar {
    margin-bottom: 2rem;
    background-color: white;
}

h1.navbar-brand {
    font-family: @fontHeading;
    font-weight: 700;
    padding: 0;
    margin: 0;
}

.nav-link:hover {
    text-decoration: underline;
}

.dropshadow {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.navbar-toggler {
    border-radius: 0;
    border: none;
}
</style>
