<template>
  <base-card>
    <div class="tabContainer">
      <base-button>Card Overview</base-button>
      <base-button>Create Card</base-button>
      <base-button>Play Game</base-button>
    </div>
  </base-card>
</template>

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