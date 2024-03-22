<template>
  <div class="admin-wrapper">
    <div v-if="$store.state.snackbar.show" class="snackbar" :class="{failure: !$store.state.snackbar.success}">
      <div class="left">
        <img v-if="$store.state.snackbar.success" src="../assets/success.svg" />
      </div>
      <div class="right">
        <div class="snackbar-title">{{ $store.state.snackbar.title || 'Successfully Added' }}</div>
        <div class="snackbar-message">{{ $store.state.snackbar.message || 'Data is added successfully' }}</div>
      </div>
    </div>
    <NavBar v-if="!hideNav" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  computed: {
    hideNav() {
      return (
        this.$route.fullPath.toLowerCase().includes("addexperience") ||
        this.$route.fullPath.toLowerCase().includes("itinerarysummary")
      );
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.admin-wrapper {
  width: 100%;
  height: 100vh;
  height: 100svh;
  display: flex;
  flex-direction: column;
}

.snackbar {
  position: absolute;
  background: #00a33b;
  bottom: 2em;
  left: 2em;
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em 3em 1em 1em;
  border-radius: 0.25em;
  color: white;
}

.snackbar.failure {
  background: red;
}

.snackbar img {
  width: 2em;
}

.snackbar .right {
}

.snackbar .snackbar-title {
  font-size: 1.2rem;
  font-family: "Poppins-SemiBold";
}

.snackbar .snackbar-message {
}

</style>
