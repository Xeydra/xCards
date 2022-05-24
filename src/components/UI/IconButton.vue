<template>
  <button class="icon-button">
    <span>{{ icon }}</span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["icon"],
};
</script>

<style scoped>
button {
  text-align: center;
  color: black;
  border: none;
  background-color: transparent;
  margin: 0.5rem 0;
  padding: 0.25rem;
  cursor: pointer;
}

button:hover {
  /* border: 1px solid #ec3169; */
  border-radius: 10px;
  background-color: #ec316930;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

span {
  background-color: #ff0077;
  border: 1px solid #ff0077;
  color: white;
  border-radius: 50%;
  padding: 0 4px;
  margin-right: 8px;
}
</style>