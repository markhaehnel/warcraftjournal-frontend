module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'The Warcraft Journal',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Statistics and calculations on World of Warcraft data.' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bree+Serif|Source+Sans+Pro' }
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        { src: '~assets/css/main.scss', lang: 'scss' }
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
    loading: false
}
