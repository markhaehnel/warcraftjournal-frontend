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
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Source+Sans+Pro' }
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        { src: 'bootstrap/dist/css/bootstrap.min.css' },
        { src: '~assets/less/main.less', lang: 'less' }
    ],
    /*
    ** Add axios globally
    */
    build: {
        vendor: ['axios'],
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
    modules: ['@nuxtjs/bootstrap-vue'],
    cache: {
        maxAge: 600000 // 10min
    },
    router: {
        linkActiveClass: 'active'
    },
    env: {
        API_URL: process.env.API_URL
    }
}
