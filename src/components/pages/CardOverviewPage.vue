<template>
  <base-grid>
    <li v-for="card of xCards" :key="card.id">
      <card-container :x-card="card"></card-container>
    </li>
  </base-grid>
</template>

<script>

import CardContainer from "../card-components/CardContainer.vue";
export default {
  components: { CardContainer },
  inject: ['xCards']
}
</script>