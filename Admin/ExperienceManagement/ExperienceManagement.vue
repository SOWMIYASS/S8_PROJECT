<template>
  <div class="experience-management-wrapper">
    <ExperienceNavBar v-if="showExperienceNavBar" width="fit-content" />
    <router-view />
  </div>
</template>

<script>
import ExperienceNavBar from "./ExperienceNavBar.vue";
export default {
  components: { ExperienceNavBar },
  computed: {
    showExperienceNavBar() {
      const currentRoute = this.$route.path;
      return !currentRoute.includes("guidesdetails");
    },
  },
};
</script>

<style scoped>
.experience-management-wrapper {
  padding: 2em;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1.8em;
}
</style>
