<template>
  <v-dialog v-model="isNoteDialog" persistent width="500">
    <div class="dialogue-wrapper">
      <div class="note-header">
        <div class="note-text">Notes</div>
        <div><img @click="close" src="../assets/close.svg" /></div>
      </div>
      <div class="note-content global-form">
        <v-textarea
          outlined
          single-line
          name="input-7-4"
          label="Outlined textarea"
          value="Also known as the rice bowl of Vietnam because of its large rice Experienceion, the Mekong Delta is diversified into activities related to aquaculture, rearing of animals, cash crops and fruit trees. Meander through the canals and waterways aboard a small boat."
        ></v-textarea>
      </div>
    </div>
  </v-dialog>
</template>
<script>
export default {
  name: "Note",
  props: ["isNoteDialog"],
  methods: {
    close() {
      this.$emit("close");
    },
    success() {
      this.$emit("success");
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.dialogue-wrapper {
  background-color: #ffffff;
  border-radius: 8px;
}
.note-header {
  display: flex;
  justify-content: space-between;
  padding: 14px 24px;
}
.note-content {
  display: flex;
  padding: 24px 24px 0px 24px;
  border-top: 1px solid #e8e8eb;
  border-bottom: 1px solid #e8e8eb;
}
.note-text {
  font-size: 16px;
  font-family: Poppins-SemiBold;
  font-weight: 600;
}
</style>
