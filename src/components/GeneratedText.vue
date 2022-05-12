<template>
  <div ref="textRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  text: String,
  index: Number,
});

const textRef = ref(null);

const convertTextIntoNodeElements = () => {
  const mappedText = props.text.split("");
  mappedText.forEach((charachter, charIndex) => {
    const charachterNode = document.createElement("span");
    charachterNode.innerText = charachter;
    charachterNode.id = `keyboard__charachter__${charIndex}`;
    charachterNode.className = "pb-1 pt-2 text-lg  font-semibold";
    textRef.value.appendChild(charachterNode);
  });
};

onMounted(convertTextIntoNodeElements);
watch(
  () => props.index,
  (newVal, oldVal) => {
    console.log("watcheedddd ", newVal, oldVal);
    const oldCharachterNode = document.getElementById(
      `keyboard__charachter__${oldVal}`
    );
    oldCharachterNode.className = "pb-1 pt-2 text-lg  font-semibold";
    const newCharachterNode = document.getElementById(
      `keyboard__charachter__${newVal}`
    );
    newCharachterNode.className = "pb-1 pt-2 text-lg  font-semibold underline";
  }
);
</script>

<style scoped></style>
