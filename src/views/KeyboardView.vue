<template>
  <h1>KEYBOARD</h1>
  <GeneratedText :textMap="textMappedRef" />
</template>

<script setup lang="ts">
import GeneratedText from "../components/GeneratedText.vue";
import { loremIpsum, ILoremIpsumParams } from "lorem-ipsum";
import { mapValues, textToArrayMapping } from "../helpers/textHelpers";
import { textConfig } from "../constants/textConstants";

import { onMounted, ref } from "vue";

const index = ref(0);
const textMappedRef = ref([]);

onMounted(() => {
  window.addEventListener("keydown", ({ key }) => handleKeyDown(key));
  textMappedRef.value = textToArrayMapping(text);
});

const text = loremIpsum(textConfig as ILoremIpsumParams);

function incrementIndex() {
  if (index.value < text.length - 1) {
    index.value++;
  }
}
function decrementIndex() {
  if (index.value > 0) {
    index.value--;
  }
}

const handleKeyDown = (key) => {
  textMappedRef.value[index.value].active = false;

  if (key === "Backspace") {
    textMappedRef.value[index.value].passed = false;
    decrementIndex();
  } else if (/^[a-zA-Z .]$/.test(key)) {
    textMappedRef.value[index.value].passed = true;
    if (key === text[index.value]) {
      textMappedRef.value[index.value].valid = true;
    } else {
      textMappedRef.value[index.value].valid = false;
    }
    incrementIndex();
  }

  textMappedRef.value[index.value].active = true;
};
</script>

<style lang="scss" scoped></style>
