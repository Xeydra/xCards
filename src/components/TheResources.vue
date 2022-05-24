<template>
  <base-card>
    <div class="tabContainer">
      <base-button @click="this.selectedTab = 'card-overview-page'"
        >Card Overview</base-button
      >
      <base-button @click="this.selectedTab = 'create-card-page'"
        >Create Card</base-button
      >
      <base-button>Play Game</base-button>
    </div>
  </base-card>
  <keep-alive>
    <component :is="this.selectedTab"></component>
  </keep-alive>
</template>

<script>
import CardOverviewPage from "./pages/CardOverviewPage.vue";
import CreateCardPage from "./pages/CreateCardPage.vue";
export default {
  components: {
    CardOverviewPage,
    CreateCardPage,
  },
  data() {
    return {
      selectedTab: "card-overview-page",
      storedCards: [
        {
          id: "manuel",
          cardText: "Manuel Lorenz",
          answers: [
            {
              id: 1,
              answerText: "Yes",
              value: 1,
              dareText: "Do 1 Pushup",
            },
            {
              id: 2,
              answerText: "No",
              value: 0,
              dareText: "Do 0 Pushup",
            },
            {
              id: 3,
              answerText: "Maybe",
              value: 0.5,
              dareText: "Do 0.5 Pushups",
            },
          ],
        },
      ],
      selectedCard: null,
    };
  },
  provide() {
    return {
      xCards: this.storedCards,
      saveCard: this.saveCard,
      editCard: this.saveCard,
      deleteCard: this.deleteCard,
    };
  },
  methods: {
    saveCard(card) {
      if (card.id) {
        const cardIndex = this.storedCards.findIndex(
          (storedCard) => storedCard.id === card.id
        );
        this.storedCards[cardIndex] = card;
      } else {
        const newCard = {
          id: new Date().toISOString(),
          cardText: card.cardText,
          answers: card.answers,
        };
        this.storedCards.unshift(newCard);
      }
      // todo: adding approval feedback
    },
    editCard(card) {
      this.selectedCard = card;
      this.selectedTab = "create-card-page";
    },
    deleteCard(cardId) {
      const cardIndex = this.storedCards.findIndex(
        (card) => card.id === cardId
      );
      this.storedCards.splice(cardIndex, 1);
    },
  },
};
</script>

<style scoped>
.tabContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tabContainer * {
  flex: 1;
}
</style>