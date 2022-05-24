<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
p {
    cursor: pointer;
}
</style>