<template>
  <v-dialog v-model="isItineraryDialog" persistent width="1000">
    <div class="dialogue-wrapper">
      <div class="itinerary-title">
        <span>Create Itinerary</span>
        <img draggable="false" @click="close" src="../assets/close.svg" />
      </div>
      <div class="itinerary-form global-form">
        <div class="rows row-1">
          <div class="cols col-1">
            <div class="itinerary-form-label">Trip Name</div>
            <v-text-field
              placeholder="eg: Paris 4 days 3 night"
              outlined
              hide-details
              v-model="tripName"
            ></v-text-field>
          </div>
        </div>
        <div class="rows row-2">
          <div class="cols col-1">
            <div class="itinerary-form-label">No of days</div>
            <v-select
              hide-details
              outlined
              placeholder="Select Days"
              v-model="numberOfDays"
              :items="Array.from({ length: 10 }, (_, index) => index + 1)"
            ></v-select>
          </div>
          <div class="cols col-2">
            <div class="itinerary-form-label">Start Date</div>
            <DatePicker @change="updateStartDate" />
          </div>
          <div class="cols col-3">
            <div class="itinerary-form-label">End Date</div>
            <DatePicker @change="updateEndDate" />
          </div>
        </div>
        <div class="rows row-3">
          <div class="cols col-1">
            <div class="itinerary-form-label">Country</div>
            <v-select
              hide-details
              outlined
              placeholder="Search Country"
              v-model="country"
              :items="['India']"
            ></v-select>
          </div>
          <div class="cols col-2">
            <div class="itinerary-form-label">State / Provinces</div>
            <v-select
              hide-details
              outlined
              placeholder="Search State / Provinces"
              :items="['Goa']"
              v-model="province"
            ></v-select>
          </div>
        </div>
        <div class="rows row-4">
          <div class="cols col-1">
            <div class="itinerary-form-label">Interest</div>
            <v-select
              hide-details
              outlined
              placeholder="Search Interest"
              append-icon="mdi-magnify"
              :items="['Gliding']"
              v-model="interest"
            ></v-select>
          </div>
        </div>
        <div class="rows row-5">
          <div class="cols col-1">
            <div class="itinerary-form-label">Trip Type</div>
            <v-select
              v-model="tripType"
              placeholder="Family"
              :items="['Land']"
              outlined
              hide-details
            ></v-select>
          </div>
        </div>
        <div class="rows row-6">
          <div class="cols col-1">
            <v-text-field
              placeholder="Children"
              outlined
              hide-details
              v-model="childrenCount"
            ></v-text-field>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <v-btn class="btn-tertiary" @click="close">Cancel</v-btn>
        <v-btn @click="createItinerary" class="btn-primary"
          >Create Itinerary</v-btn
        >
      </div>
    </div>
  </v-dialog>
</template>
<script>
import DatePicker from "./DatePicker.vue";
export default {
  props: ["isItineraryDialog", "newItinerary"],
  data() {
    return {
      tripName: "",
      numberOfDays: "",
      startDate: "",
      endDate: "",
      country: "",
      province: "",
      interest: "",
      tripType: "",
      childrenCount: "",
    };
  },
  components: { DatePicker },
  methods: {
    close() {
      this.$emit("close");
    },
    success() {
      this.$emit("success");
    },
    updateStartDate(val) {
      this.startDate = val;
    },
    updateEndDate(val) {
      this.endDate = val;
    },
    createItinerary() {
      const values = {
        tripName: this.tripName,
        numberOfDays: this.numberOfDays,
        startDate: this.startDate,
        endDate: this.endDate,
        country: this.country,
        province: this.province,
        interest: this.interest,
        tripType: this.tripType,
        children: this.childrenCount,
      };

      const isEmpty = Object.values(values).some(value => !value);
      if (isEmpty) {
        alert("Complete all fields")
        return;
      } 

      localStorage.setItem("itineraryDetails",JSON.stringify(values))

      // if (this .newItinerary) {
      //   alert("new iti");
      // } else {
      //   alert("not a new");
      // }

      this.$router.push({ name: "AddExperience" });
    },
  },

  mounted() {
    console.log(this.newItinerary);
  },
};
</script>

<style scoped>
.dialogue-wrapper {
  background: white;
  border-radius: 8px;
}

.itinerary-title {
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
}
.itinerary-title span {
  font-family: "Poppins-Medium";
  font-size: 18px;
}

.itinerary-title img {
  cursor: pointer;
}

.itinerary-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 24px;
  border-top: 1px solid #e8e8eb;
  border-bottom: 1px solid #e8e8eb;
}

.itinerary-form-label {
  white-space: nowrap;
  color: #6f717e;
}

.btn-container {
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.rows {
  display: flex;
  gap: 32px;
}

.cols {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
.row-5 .col-1 {
  padding-right: 600px;
}

.row-6 .col-1 {
  padding-right: 600px;
}
</style>
