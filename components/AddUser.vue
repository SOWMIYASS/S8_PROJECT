<template>
  <v-dialog v-model="isUserDialog" persistent width="1000">
    <div class="dialogue-wrapper">
      <div class="add-user-title">
        <span>Add User</span>
        <img draggable="false" @click="close" src="../assets/close.svg" />
      </div>
      <div class="add-user-form global-form">
        <div class="rows row-1">
          <div class="cols col-1">
            <div class="add-user-form-label">User Name</div>
            <v-text-field
              hide-details
              outlined
              placeholder="Stefen Chris"
              v-model="name"
            ></v-text-field>
          </div>
        </div>
        <div class="rows row-2">
          <div class="cols col-1">
            <div class="add-user-form-label">Enter Mobile Number</div>
            <v-text-field
              hide-details
              outlined
              placeholder="Enter Number"
              v-model="mobileNumber"
            ></v-text-field>
          </div>
          <div class="cols col-2">
            <div class="add-user-form-label">No. Of Trips</div>
            <v-text-field
              hide-details
              outlined
              placeholder="12"
              v-model="trips"
            ></v-text-field>
          </div>
          <div class="cols col-3">
            <div class="add-user-form-label">No. Of Hotel Bookings</div>
            <v-text-field
              hide-details
              outlined
              placeholder="18"
              v-model="bookings"
            ></v-text-field>
          </div>
        </div>
        <div class="rows row-3">
          <div class="cols col-1">
            <div class="add-user-form-label">Marital Status</div>
            <v-select
              placeholder="Single"
              outlined
              hide-details
              v-model="maritalStatus"
              :items="['Solo', 'Family']"
            ></v-select>
          </div>
          <div class="cols col-2">
            <div class="add-user-form-label">Last Trip</div>
            <DatePicker @change="updateTripDate" />
          </div>
        </div>
        <div class="rows row-4">
          <div class="cols col-1">
            <div class="add-user-form-label">Country</div>
            <v-select
              placeholder="Search Country"
              outlined
              hide-details
              v-model="country"
              :items="['India', 'US', 'UK', 'Japan']"
            ></v-select>
          </div>
          <div class="cols col-2">
            <div class="add-user-form-label">State / Provinces</div>
            <v-select
              placeholder="Search State / Provinces"
              outlined
              hide-details
              v-model="address"
              :items="['California', 'Tamil Nadu']"
            ></v-select>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <v-btn class="btn-tertiary" @click="close">Cancel</v-btn>
        <v-btn @click="addUser" class="btn-primary">Add User</v-btn>
      </div>
    </div>
  </v-dialog>
</template>
<script>
import axios from "axios";
import DatePicker from "./DatePicker.vue";
export default {
  props: ["isUserDialog", "newUser"],
  data() {
    return {
      name: "",
      mobileNumber: "",
      trips: "",
      bookings: "",
      maritalStatus: "",
      tripDate: "",
      country: "",
      address: "",
      email:"sample",
      officeNumber:"21327",
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
    updateTripDate(val) {
      this.tripDate = val;
    },
    addUser() {
      const values = {
        name: this.name,
        mobileNumber: this.mobileNumber,
        email:this.email,
        maritalStatus: this.maritalStatus,
        country: this.country,
        address: this.address,
        officeNumber:this.officeNumber,
        tripDate: this.tripDate,
        trips: this.trips,
        bookings: this.bookings,
      };

      console.log(values);
      const isEmpty = Object.values(values).some((value) => !value);
      if (isEmpty) {
        alert("Complete all fields");
        return;
      }
      let apiURL = process.env.VUE_APP_BACKEND_URL + "/v1/api/users";
      console.log(apiURL);
      axios
        .post(apiURL,values)
        .then((response) => {
          console.log("User added successfully:", response.data);
          this.success();
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    },
  },
};
</script>

<style scoped>
.dialogue-wrapper {
  background: white;
  border-radius: 8px;
}

.add-user-title {
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
}
.add-user-title span {
  font-family: "Poppins-Medium";
  font-size: 18px;
}

.add-user-title img {
  cursor: pointer;
}

.add-user-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 24px;
  border-top: 1px solid #e8e8eb;
  border-bottom: 1px solid #e8e8eb;
}

.add-user-form-label {
  white-space: nowrap;
  color: #6f717e;
}

.rows {
  display: flex;
  column-gap: 32px;
  flex-wrap: wrap;
  align-items: center;
}

.cols {
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}
.row-2 .col-1 {
  flex: 2;
}

.btn-container {
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
