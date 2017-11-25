<template>
    <section class="section">
        <div class="container">
            <div class="content">
                <p class="title is-3">+{{ level }} Keystone Effects</p>
                <div class="columns is-multiline">
                    <div class="column is-one-third" v-for="affix in affixes" :key="affix.id">
                        <affix :name="affix.name" :description="affix.description" :difficulty="affix.difficulty"></affix>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Affix from '~/components/mythicplus/Affix.vue'

export default {
    props: ['level', 'affixes'],
    components: { Affix }
}
</script>
