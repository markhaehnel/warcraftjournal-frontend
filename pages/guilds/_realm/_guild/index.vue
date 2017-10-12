<template>
    <div class="container">
        <h1 class="title">{{ guild.name }}</h1>
        <h2 class="subtitle">{{ guild.realm }}</h2>

        <b-table :data="guild.members" :striped="true">
            <template scope="props">
                <b-table-column label="Name">{{ props.row.name }}</b-table-column>
                <b-table-column label="Realm">{{ props.row.realm }}</b-table-column>
            </template>
        </b-table>
    </div>
</template>

<script>
import realms from '~/pages/guilds/realms.json'

export default {
    data () {
        return {
            guild: {
                name: '',
                realm: '',
                members: []
            }
        }
    },
    async asyncData ({ app, params }) {
        try {
            let data = await app.$axios.$get(`/guild/${params.realm}/${params.guild}`)
            return {
                guild: {
                    name: data.name,
                    realm: realms.find((realm) => realm.slug === data.realm).name,
                    members: data.members
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

