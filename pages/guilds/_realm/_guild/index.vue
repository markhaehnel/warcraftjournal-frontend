<template>
    <div class="container-fluid is-marginless">
	<navigation-bar></navigation-bar>
        <div class="hero is-dark is-shaman">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-marginless">{{ guild.name }}</h1>
                    <h2 class="subtitle is-marginless">{{ guild.realm }}</h2>
                </div>
            </div>
            <div class="hero-foot">
                <div class="tabs is-boxed is-right">
                    <div class="container">
                        <ul>
                            <li class="is-active">
                                <a class="is-size-7">Updated&nbsp;<timeago :since="lastUpdated" :auto-update="10"></timeago></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <b-table :data="guild.members" :striped="true" :mobile-cards="true" :default-sort="''" hoverable>
                    <template slot-scope="props">
                        <b-table-column field="name" width="250" label="Name">{{ props.row.name }}</b-table-column>
                        <b-table-column label="Realm">{{ props.row.realm }}</b-table-column>
                    </template>
                    <template slot="bottom-left">
                         Updated&nbsp;<timeago :since="lastUpdated" :auto-update="10"></timeago>
                    </template>
                </b-table>
        </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '~/components/Header'
import realms from '~/pages/guilds/realms.json'

export default {
    validate ({ params }) {
        if (typeof params.realm !== 'string') return false
        if (typeof params.guild !== 'string') return false

        if (realms.filter(realm => realm.slug === params.realm).length !== 1) return false

        return true
    },
    async asyncData ({ app, params, error }) {
        try {
            let data = await app.$axios.$get(`/guild/${params.realm}/${params.guild}`)
            return {
                guild: {
                    name: data.name,
                    realm: realms.find((realm) => realm.slug === data.realm).name,
                    members: data.members,
                    lastupdated: data.lastupdated,
                    side: data.side
                }
            }
        } catch (e) {
            error({ statusCode: 404, message: `Guild does not exist.` })
        }
    },
    computed: {
        lastUpdated () {
            return (new Date(this.guild.lastupdated)).toString()
        }
    },
    components: { NavigationBar }
}
</script>

