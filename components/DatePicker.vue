<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
  <!-- :return-value.sync="date" -->
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
      v-model="date"
        append-icon="mdi-calendar"
        readonly
        placeholder="Select Date"
        outlined
        v-bind="attrs"
        v-on="on"
        hide-details
        clearable
        :dense="dense == true"
      ></v-text-field>
    </template>
    <v-date-picker  v-model="date" no-title  color="#3D2E8C">
      <!-- <v-btn text color="primary" @click="menu = false"> Cancel </v-btn> -->
      <!-- <v-btn text color="primary" @click="update"> OK </v-btn> -->
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props:["dense"],
  data: () => ({
    date: "",
    menu: false,
  }),
  methods: {
    update() {
      this.$refs.menu.save(this.date)
      this.$emit("change",this.date)
    }
  },
  watch:{
    date() {
      if (this.date == null) {
        this.$emit("change","")
        return
      }
      this.$emit("change",this.date)
    }
  }

};
</script>
