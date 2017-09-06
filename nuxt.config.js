module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'The Warcraft Journal',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { hid: 'description', name: 'description', content: 'Statistics and calculations on World of Warcraft data.' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bree+Serif' }
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
            'bootstrap-vue'
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
        }
    },
    modules: [
        '@nuxtjs/bootstrap-vue',
        '@nuxtjs/manifest'
    ],
    cache: {
        maxAge: 600000 // 10min
    },
    router: {
        linkActiveClass: 'active'
    },
    env: {
        API_URL: process.env.API_URL
    },
    manifest: {
        name: 'The Warcraft Journal',
        short_name: 'Warcraft Journal',
        background_color: '#fff',
        description: 'Statistics and calculations on World of Warcraft guild and player data.',
        lang: 'en',
        display: 'standalone',
        theme_color: '#fff'
    }
}
