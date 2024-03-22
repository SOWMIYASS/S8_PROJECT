<template>
  <v-dialog v-model="isDialog" persistent width="1000" overlay-opacity="0.8" >
    <div class="dialogue-wrapper">
      <div class="book-hotel-title">
        <span>Book Hotel</span>
        <img draggable="false" @click="close" src="../assets/close.svg" />
      </div>
      <div class="book-hotel-form global-form">
        <div class="rows row-1">
          <div class="cols col-1">
            <div class="book-hotel-form-label">Customer Name</div>
            <v-text-field
              placeholder="Enter Name"
              outlined
              hide-details
            ></v-text-field>
          </div>
        </div>
        <div class="rows row-2">
          <div class="cols col-1">
            <div class="book-hotel-form-label">Start Date</div>
           <DatePicker @change="updateStartDate" />
          </div>
          <div class="cols col-2">
            <div class="book-hotel-form-label">End Date</div>
            <DatePicker @change="updateEndDate"/>
          </div>
        </div>
        <div class="rows row-3">
          <div class="cols col-1">
            <div class="book-hotel-form-label">Room Type</div>
            <v-select
              placeholder="Select Type"
              outlined
              hide-details
            ></v-select>
          </div>
          <div class="cols col-2">
            <div class="book-hotel-form-label">No. Of People</div>
            <v-select placeholder="Family" outlined hide-details></v-select>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <v-btn outlined class="btn-tertiary" @click="close">Cancel</v-btn>
        <v-btn class="btn-primary">Book Now</v-btn>
      </div>
    </div>
  </v-dialog>

</template>
<script>

import DatePicker from "./DatePicker.vue"

export default {
  props: ["isDialog"],
  data() {
    return {
      startDate:"",
      endDate:"",
    }
  },
  components:{DatePicker},
  methods: {
    close() {
      this.$emit("close");
    },
    success() {
      this.$emit("success");
    },
    updateStartDate(val) {
      this.startDate = val
    },
    updateEndDate(val) {
      this.endDate = val
    }
  },
};
</script>

<style scoped>
.dialogue-wrapper {
  background: white;
  border-radius: .5em;
}

.book-hotel-title {
  display: flex;
  padding: 1em 1.5em;
  justify-content: space-between;
}
.book-hotel-title span {
  font-family: "Poppins-Medium";
  font-size: 1.25rem;
}

.book-hotel-title img {
  cursor: pointer;
  width: 1em;
}

.book-hotel-form {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 1em 1.5em;
  border-top: 1px solid #e8e8eb;
  border-bottom: 1px solid #e8e8eb;
}

.book-hotel-form-label {
  white-space: nowrap;
  color: #6f717e;
}

.btn-container {
  padding: 1em 1.5em;
  display: flex;
  justify-content: flex-end;
  gap: .5em;
}

.rows {
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
}

.cols {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
</style>
