<template>
  <button>
    <slot></slot>
  </button>
</template>


<style scoped>
button {
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 12rem;
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>