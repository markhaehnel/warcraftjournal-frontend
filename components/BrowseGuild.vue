<template>
    <div class="browse-box">
        <h1 class="box-title">Browse Guild</h1>
        <div class="inner-box">
            <form>
                <input type="text" placeholder="EU" size="1">
                <input type="text" placeholder="Mal'Ganis">
                <input type="text" placeholder="Aeonic">
                <input type="button" value="Go">
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '~assets/css/colors.scss';

.browse-box {
    display: inline-block;
    text-align: left;
    padding: 8px 16px 16px 16px;
    box-shadow: $boxShadow;
}

.browse-box .box-title {
    font-size: 1.5em;
    margin: 0;
}

.browse-box .inner-box {
    display: inline-block;
}

.browse-box .inner-box {
    input {
        font-size: 1.5em;
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
    }
    input:focus {
        outline-color: black;
    }

    input + input {
        margin-left: 0.5em;
    }
}
</style>
