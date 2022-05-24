<template>
  <section>
    <header>
      <h1>My Cards</h1>
    </header>
    <the-resources></the-resources>
  </section>
</template>

<script>
import TheResources from "./components/TheResources.vue";
export default {
  components: { TheResources },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app p {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
  padding: 1rem 0;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
  padding: 1rem 0;
  text-align: center;
}
#app h3 {
  font-size: 1.17rem;
  color: #58004d;
  margin: 0 0 1rem 0;
}

.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
</style>