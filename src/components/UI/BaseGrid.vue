<template>
    <ul class="baseGrid">
        <slot></slot>
    </ul>
</template>

<style>
.baseGrid {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.baseGrid > li {
  text-align: center;
  flex: 1;
  min-width: 26.25rem;
}
</style>