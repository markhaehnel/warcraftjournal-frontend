module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'The Warcraft Journal',
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bree+Serif' },
            { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css' }
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        { src: '~/assets/less/_index.less', lang: 'less' }
    ],
    /*
    ** Add axios globally
    */
    build: {
        vendor: [
            'axios',
            'buefy',
            'vue-smooth-scroll',
            'vue-timeago'
        ],
        /*
        ** Run ESLINT on save
        */
        extend (config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        postcss: {
            plugins: {
                'postcss-custom-properties': {
                    warnings: false
                }
            }
        }
    },
    modules: [
        ['@nuxtjs/axios', { baseURL: process.env.API_URL || '', credentials: false }],
        '@nuxtjs/manifest',
        '@nuxtjs/meta'
    ],
    plugins: [
        '~/plugins/buefy.js',
        '~/plugins/smoothScroll.js',
        '~/plugins/timeago.js'
    ],
    cache: {
        maxAge: 600000 // 10min
    },
    router: {
        linkActiveClass: 'is-active',
        linkExactActiveClass: 'is-active'
    },
    env: {
        API_URL: process.env.API_URL
    },
    manifest: {
        name: 'The Warcraft Journal',
        short_name: 'TWJ',
        background_color: '#fff',
        description: 'Statistics and calculations on World of Warcraft guild and player data.',
        lang: 'en',
        display: 'standalone',
        theme_color: '#fff'
    },
    loading: '~/components/Loading.vue'
}
