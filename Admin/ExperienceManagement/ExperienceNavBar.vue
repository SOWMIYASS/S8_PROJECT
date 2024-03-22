<template>
  <div class="global-tabs-container experience-tabs-container" :class="{ 'fit-content': width == 'fit-content' }">
    <router-link draggable="false" class="global-tab experience-tab"
      :to="{ name: 'Experiences' }">Experiences</router-link>
    <router-link draggable="false" class="global-tab experience-tab" :to="{ name: 'Guides' }">Guides</router-link>
    <router-link draggable="false" class="global-tab experience-tab" :to="{ name: 'Gallery' }">Gallery</router-link>

  </div>
</template>
  
<script>

export default {
  name: "ExperienceNavBar",
  props: ["width"],
};
</script>
  
<style scoped>
.experience-tabs-container {
  background: white;
}

.experience-tab {
  background: #F5F4F7;
  border-radius: 4px;
}
</style>
  