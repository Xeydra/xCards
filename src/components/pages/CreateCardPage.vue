<template>
  <base-card>
    <h2>Create Card</h2>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="cardText">Card Text</label>
        <textarea
          id="cardText"
          name="cardText"
          rows="3"
          v-model.trim="cardText"
        ></textarea>
      </div>
      <template v-for="(answer, index) in answers" :key="answer.id">
        <answer-form
          v-model="answers[index]"
          :answerIndex="index"
          @deleteAnswerViaIndex="deleteAnswer"
        ></answer-form>
      </template>
      <div class="add-container">
        <icon-button icon="+" @click="addAnswer" type="button"
          >Add Answer</icon-button
        >
      </div>
      <div>
        <base-button type="submit">Create Card</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import AnswerForm from "../card-components/AnswerForm.vue";

export default {
  components: { AnswerForm },
  inject: ["saveCard"],
  data() {
    return {
      cardText: "",
      answers: [
        {
          answerText: "",
          value: "",
          dareText: "",
        },
      ],
    };
  },
  methods: {
    submitData() {
      if (this.cardText === "") {
        return;
      }
      const cardToSave = {
        cardText: this.cardText,
        answers: this.answers,
      };
      this.saveCard(cardToSave);
      this.cardText = "";
      this.answers = [
        {
          answerText: "",
          value: "",
          dareText: "",
        },
      ];
    },
    addAnswer() {
      const latestAnswer = this.answers[this.answers.length - 1];
      if (this.answers.length < 4 && latestAnswer?.dareText != "") {
        this.answers.push({
          answerText: "",
          value: "",
          dareText: "",
        });
      }
    },
    deleteAnswer(index) {
      this.answers.splice(index, 1);
    },
  },
};
</script>

<style>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

.add-container {
  margin-bottom: 1rem;
}
</style>