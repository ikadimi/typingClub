<template>
  <div class="max-w-3xl border-b-3 border-gray-900">
    <StartTyping v-if="!start" />

    <span
      v-for="textChar in textMap"
      :key="textChar.char"
      :class="className(textChar)"
    >
      {{ textChar.char }}
    </span>
  </div>
</template>

<script setup lang="ts">
import StartTyping from "../components/StartTyping.vue";

import {
  charClassNames,
  errorClassNames,
  highlightedCharClassNames,
  validClassNames,
} from "../constants/textConstants";

defineProps({
  textMap: Array,
  start: Number,
});

const className = ({ active, passed, valid }) => {
  if (active) {
    return highlightedCharClassNames;
  } else if (!passed) {
    return charClassNames;
  } else if (passed) {
    if (valid) {
      return validClassNames;
    } else {
      return errorClassNames;
    }
  }
};
</script>

<style scoped></style>
