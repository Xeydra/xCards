<template>
  <base-card>
    <card-front
      v-if="showFront"
      :x-card="xCard"
      @on-answer="onAnswer"
    ></card-front>
    <card-back
      v-if="!showFront"
      @click="toggleCard"
      :text="choosenAnswer?.dareText"
    ></card-back>
  </base-card>
</template>

<script>
import CardFront from "./CardFront.vue";
import CardBack from "./CardBack.vue";

export default {
  components: { CardFront, CardBack },
  props: {
    xCard: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      showFront: true,
      choosenAnswer: null
    };
  },
  methods: {
    onAnswer(value) {
      this.choosenAnswer = this.xCard.answers.find(answer => answer.value === value);
      this.toggleCard();
    },
    toggleCard() {
      this.showFront = !this.showFront;
    },
  },
};
</script>