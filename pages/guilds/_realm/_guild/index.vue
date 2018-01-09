<template>
    <div class="container-fluid is-marginless">
	<navigation-bar></navigation-bar>
        <div class="hero is-small" :class="factionColor">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-marginless">{{ guild.name }}</h1>
                    <h2 class="subtitle is-marginless">{{ guild.realm }}</h2>
                    <span class="is-size-7">Updated&nbsp;<timeago :since="lastUpdated" :auto-update="10"></timeago></span>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <b-table :data="guild.members" :striped="true" :mobile-cards="true" paginated :perPage="20" :default-sort="''" narrowed pagination-simple>
                    <template slot-scope="props">
                        <b-table-column field="name" width="250" label="Name" sortable>{{ props.row.name }}</b-table-column>
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
    async asyncData ({ app, params }) {
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
        } catch (error) {
            console.log(error)
        }
    },
    computed: {
        lastUpdated () {
            return (new Date(this.guild.lastupdated)).toString()
        },
        factionColor () {
            return (this.guild.side === 0 ? 'is-info' : 'is-danger') || ''
        }
    },
    components: { NavigationBar }
}
</script>

