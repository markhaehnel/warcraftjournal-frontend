<template>
    <div class="card is-fullheight">
        <header class="card-header is-success">
            <div class="tag is-radiusless is-large is-fullwidth" :class="getBadgeColorClass(difficulty)">{{ name }}</div>
        </header>
        <div class="card-content">
            <div class="content has-text-justified">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'description', 'difficulty'],
    methods: {
        getBadgeColorClass (difficulty) {
            switch (difficulty) {
            case 0: return 'is-success'
            case 1: return 'is-warning'
            case 2: return 'is-danger'
            }
        }
    }
}
</script>
