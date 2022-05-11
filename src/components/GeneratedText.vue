<template>
  <div>{{ text }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
});

// mapping to be added
const mappedText = props.text.split("");
</script>

<style scoped></style>
