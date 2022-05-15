<template>
  <div>
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
import {
  charClassNames,
  errorClassNames,
  highlightedCharClassNames,
  validClassNames,
} from "../constants/textConstants";

defineProps({
  textMap: [],
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
