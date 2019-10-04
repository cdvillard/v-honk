<template>
  <div>
    <a href="https://google.com" v-honk:block>Testing</a>
    <p v-honk>This won't go anywhere.</p>
  </div>
</template>

<script>
import honk from "./lib/index.js";

export default {
  directives: {
    honk
  }
};
</script>