<template>
  <h1>KEYBOARD</h1>
  <GeneratedText :text="text" :index="index" />
</template>

<script setup lang="ts">
import GeneratedText from "../components/GeneratedText.vue";
import { loremIpsum } from "lorem-ipsum";

import { onMounted, ref } from "vue";

onMounted(() => {
  window.addEventListener("keypress", function (e) {
    const char = String.fromCharCode(e.keyCode);
    if (/[a-zA-Z]/.test(char)) {
      incrementIndex();
    }
  });
});

const text = loremIpsum({
  count: 1, // Number of "words", "sentences", or "paragraphs"
  format: "plain", // "plain" or "html"
  paragraphLowerBound: 3, // Min. number of sentences per paragraph.
  paragraphUpperBound: 7, // Max. number of sentences per paragarph.
  random: Math.random, // A PRNG function
  sentenceLowerBound: 5, // Min. number of words per sentence.
  sentenceUpperBound: 15, // Max. number of words per sentence.
  suffix: "\n", // Line ending, defaults to "\n" or "\r\n" (win32)
  units: "sentences", // paragraph(s), "sentence(s)", or "word(s)"
  // words: ["ad", ...]       // Array of words to draw from
});
const index = ref(0);

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
</script>

<style lang="scss" scoped></style>
