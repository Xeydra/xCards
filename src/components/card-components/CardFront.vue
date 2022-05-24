<template>
  <component :is="cardSide"></component>
  <p>{{ xCard.cardText }}</p>
  <ul v-if="xCard.answers?.length > 0">
    <li v-for="answer of xCard.answers" :key="answer.value">
      <base-button @click="$emit('onAnswer', answer.value)">{{
        answer.answerText
      }}</base-button>
    </li>
  </ul>
</template>

<script>
export default {
  emits: ["onAnswer"],
  props: {
    id: String,
    text: String,
    answers: Array,
    xCard: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      cardSide: "card-front",
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
}

ul li {
  flex: 1;
}
</style>