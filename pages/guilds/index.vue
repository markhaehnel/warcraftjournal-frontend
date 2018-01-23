<template>
    <div class="container-fluid is-marginless">
        <div class="hero is-fullheight is-dark is-warlock">
            <div class="hero-head">
                <navigation-bar></navigation-bar>
            </div>

            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">Guild Lookup</h1>
                    <h2 class="subtitle has-text-centered">Lookup statistics and performances of a guild.</h2>

                    <div class="columns is-mobile is-centered">
                        <div class="column is-two-thirds-tablet is-one-third-desktop">
                            <div class="card">
                                <div class="card-content">
                                    <b-field>
                                        <b-autocomplete size="is-medium is-radiusless" placeholder="Realm" v-model="realm" field="name" :keep-first="true" :data="filteredRealms" @select="option => selected = option">
                                            <template slot="empty">No realm found</template>
                                        </b-autocomplete>
                                    </b-field>
                                    <b-field>
                                        <div class="control">
                                            <input @keyup.enter="navigateToGuild" v-model.trim="guild" class="input is-medium is-radiusless" type="text" placeholder="Guild">
                                        </div>
                                    </b-field>
                                    <b-field>
                                        <div class="control">
                                            <button @click="navigateToGuild" class="button is-medium is-fullwidth is-success is-radiusless" :disabled="!canSubmit">Let's get started</button>
                                        </div>
                                    </b-field>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import realms from './realms.json'
import NavigationBar from '~/components/Header.vue'

export default {
    data () {
        return {
            realms,
            realm: '',
            selected: '',
            guild: ''
        }
    },
    computed: {
        filteredRealms () {
            return this.realms.filter((option) => {
                return option.name.toLowerCase().indexOf(this.realm.toLowerCase()) >= 0
            }, this)
        },
        canSubmit () {
            return (typeof this.realm === 'string' && this.realm.length > 0 && typeof this.guild === 'string' && this.guild.length > 0)
        }
    },
    methods: {
        navigateToGuild () {
            if (this.canSubmit) {
                this.$router.push({ path: `/guilds/${this.selected.slug}/${this.guild}` })
            }
        }
    },
    components: { NavigationBar }
}
</script>
