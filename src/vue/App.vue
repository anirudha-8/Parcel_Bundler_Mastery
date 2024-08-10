<template lang="pug">
    .container
        h2 Vue!
        h2 Let's Count! {{ counter }}
        ul
            li
                a(href="/index.html") Home
            li
                a(href="/react.html") Go to the React App...
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Declare a reactive counter variable
const counter = ref(0);

// Use onMounted to set up the interval
onMounted(() => {
	setInterval(() => {
		counter.value++;
	}, 1000);
});
</script>

<style lang="stylus" scoped>
bgStyle = darkslategray
textStyle = aquamarine

.container
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    width: 900px
    padding: 40px
    font-family: sans-serif
    background-color: bgStyle
    color: textStyle

    h2
        font-size: 64px

    a
        font-size: 28px
        color: mintcream
</style>
