# 🦆 V-Honk

**Introducing a little chaos to Vue.js.**

`v-honk` is a custom directive for Vue that adds a delightful little "honk" to anything.

## Installation

```
  npm install v-honk
```

## Using it in a component

```
  <template>
    <div>
      <a href="https://honkify.netlify.com" v-honk>This will go to Honkify.js.</a>
      <a href="https://honkify.netlify.com" v-honk:block>This won't let you through.</a>
      <p v-honk>This won't go anywhere.</p>
    </div>
  </template>

  <script>
  import honk from "v-honk";

  export default {
    directives: {
      honk
    }
  };
  </script>
```

If the target is an anchor tag, v-honk simply honks and lets the user through after a timeout. However, as geese do, sometimes they want to block your path. Adding an argument of `block` will stop a link from working while still honking at them.

💚 Inspired by the anarchy of [Honkify.js](https://honkify.netlify.com) and [Jason Lengstof](https://lengstorf.com/).

Plans for `v-honk`:
- [ ] Create a global property
- [ ] Make sure target is an actual link
- [ ] World dominiation
