<template>
  <div class="bg-grey-50 grid place-items-center h-screen">
    <GeneratedText :textMap="textMappedRef" :start="start" />
    <p>{{ numberofEntries }}</p>
    <p v-if="end">word per minute: {{ wpm }}</p>
    <p v-if="end">accuracy: {{ accuracy }}</p>
  </div>
</template>

<script setup lang="ts">
import GeneratedText from "../components/GeneratedText.vue";
import { loremIpsum, ILoremIpsumParams } from "lorem-ipsum";
import {
  getAccuracy,
  getWordPerMinute,
  mapValues,
  textToArrayMapping,
} from "../helpers/textHelpers";
import { textConfig } from "../constants/textConstants";

import { onMounted, ref } from "vue";

const index = ref(0);
const start = ref(0);
const end = ref(0);
const wpm = ref(0);
const textMappedRef = ref([]);
const numberofEntries = ref(0);
const accuracy = ref(1);

onMounted(() => {
  textMappedRef.value = textToArrayMapping(text);
  window.addEventListener("keydown", ({ key }) => handleKeyDown(key));
});

const text = loremIpsum(textConfig as ILoremIpsumParams);

function incrementIndex() {
  if (index.value < text.length - 1) {
    if (!start.value) {
      start.value = Date.now();
    }
    index.value++;
  } else {
    if (!end.value) {
      end.value = Date.now();

      wpm.value = getWordPerMinute(
        start.value,
        end.value,
        numberofEntries.value
      );
      accuracy.value = getAccuracy(textMappedRef.value as any);
    }
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
    numberofEntries.value++;
  }

  textMappedRef.value[index.value].active = true;
};
</script>

<style lang="scss" scoped></style>
