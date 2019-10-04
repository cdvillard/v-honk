<template>
  <a href="https://google.com" v-honk:block>Testing</a>
</template>

<script>
import honk from "./lib/index.js";

export default {
  directives: {
    honk
  }
};
</script>