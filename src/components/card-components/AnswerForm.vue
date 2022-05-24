<template>
  <div class="answer-container">
    <div class="flex">
      <h3 class="flex-1">Answer</h3>
      <icon-button icon="-" type="button" @click="deleteAnswer"
        >Delete</icon-button
      >
    </div>
    <div class="form-control">
      <label :for="'answerLabel' + index">Answer label</label>
      <input
        :id="'answerLabel' + index"
        :name="'answerLabel' + index"
        :ref="'answerLabelRef' + index"
        type="text"
        :value="modelValue?.answerText"
        @input="updateInput()"
      />
    </div>
    <div class="form-control">
      <label :for="'answerValue' + index">Answer value</label>
      <input
        :id="'answerValue' + index"
        :name="'answerValue' + index"
        :ref="'answerValueRef' + index"
        type="text"
        :value="modelValue?.value"
        @input="updateInput()"
      />
    </div>
    <div class="form-control">
      <label :for="'answerDare' + index">Dare text</label>
      <textarea
        :id="'answerDare' + index"
        :name="'answerDare' + index"
        :ref="'answerDareRef' + index"
        rows="3"
        :value="modelValue?.dareText"
        @input="updateInput()"
      ></textarea>
    </div>
  </div>
</template>

<script>
import IconButton from "../UI/IconButton.vue";
export default {
  components: { IconButton },
  props: ["modelValue", "answerIndex"],
  emits: ["update:modelValue", "deleteAnswerViaIndex"],
  data() {
    return {
      index: Math.floor(Math.random() * 100),
    };
  },
  methods: {
    updateInput() {
      this.$emit("update:modelValue", {
        answerText: this.$refs["answerLabelRef" + this.index].value,
        value: this.$refs["answerValueRef" + this.index].value,
        dareText: this.$refs["answerDareRef" + this.index].value,
      });
    },
    deleteAnswer() {
      this.$emit("deleteAnswerViaIndex", this.answerIndex);
    },
  },
};
</script>

<style scoped>
.answer-container {
  border: 2px solid #ccc;
  padding: 0.5rem;
  padding-bottom: 0;
  margin-bottom: 1rem;
}
</style>