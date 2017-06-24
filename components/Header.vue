<template>
    <nav class="navbar navbar-toggleable-xl navbar-light dropshadow ">
        <div class="container">
            <nuxt-link to="/"><h1 class="navbar-brand mb-0">The Warcraft Journal</h1></nuxt-link>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                <nuxt-link class="nav-link" to="/buildings">Buildings</nuxt-link>
                <nuxt-link class="nav-link" to="/affixes">M+ Affixes</nuxt-link>
            </div>
        </div>
    </nav>
</template>

<style lang="less">
@import '~assets/less/variables.less';
.navbar {
    margin-bottom: 2rem;
}

h1.navbar-brand {
    font-family: @fontHeading;
    font-weight: 700;
}

.nav-link:hover {
    text-decoration: underline;
}

.dropshadow {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}
</style>
