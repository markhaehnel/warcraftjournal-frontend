<template>
    <div class="divider-container">
        <div class="divider divider-green" />
        <div class="divider divider-yellow" />
        <div class="divider divider-red" />
        <div class="divider divider-orange" />
        <div class="divider divider-othergreen" />
    </div>
</template>

<style>
    .divider-container {
        padding: 0;
        position:relative;
        width: 100%;
        line-height: 0;
    }

    .divider {
        height: 8px;
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 20%;
    }
    .divider-green {
        background-color: #96ceb4;
    }
    .divider-yellow {
        background-color: #ffeead;
    }
    .divider-red {
        background-color: #ff6f69;
    }
    .divider-orange {
        background-color: #ffcc5c;
    }
    .divider-othergreen {
        background-color: #88d8b0;
    }
</style>
