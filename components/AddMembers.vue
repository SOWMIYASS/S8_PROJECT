<template>
  <v-dialog
    v-model="isMemberDialog"
    persistent
    width="1000"
    overlay-opacity="0.8"
  >
    <div class="dialogue-wrapper">
      <div class="book-hotel-title">
        <span>Add Members</span>
        <img draggable="false" @click="close" src="../assets/close.svg" />
      </div>
      <div class="book-hotel-form global-form">
        <div class="rows row-1">
          <div class="cols col-1">
            <div class="book-hotel-form-label">User Name</div>
            <v-text-field
              placeholder="Enter Name"
              outlined
              hide-details
            ></v-text-field>
          </div>
        </div>
        <div class="rows row-3">
          <div class="cols col-1">
            <div class="book-hotel-form-label">Relation</div>
            <v-select
              placeholder="Select relation"
              outlined
              hide-details
              :items="['Wife', 'Son', 'Daughter', 'Brother','Sister']"
            ></v-select>
          </div>
          <div class="cols col-2">
            <div class="book-hotel-form-label">Trip</div>
            <v-text-field
              placeholder="Eg: 12"
              outlined
              hide-details
            ></v-text-field>
          </div>
        </div>
        <div class="rows row-2">
          <div class="cols col-1">
            <div class="book-hotel-form-label">Age</div>
            <v-text-field
              placeholder="Enter Age"
              outlined
              hide-details
            ></v-text-field>
          </div>
          <div class="cols col-2">
            <div class="book-hotel-form-label">Date of Birth</div>
            <DatePicker @change="updatedob" />
          </div>
        </div>
        <div class="rows row-1">
            <div class="cols col-1">
              <div class="book-hotel-form-label">Interest</div>
              <v-autocomplete
        :items="tagItems"
        hide-selected
        hide-details
        placeholder="Search Tags"
        multiple
        outlined
        append-icon="mdi-magnify"
        v-model="selectedTags"
        @input="addNewTag"
      >
        <template v-slot:selection="{ attrs, item, parent, selected }">
          <v-chip v-if="item === Object(item)" v-bind="attrs" :input-value="selected" label small color="#EDEAFF">
            <span>
              {{ item.text }}
            </span>
            <v-icon color="red" class="tag-close-btn" @click="parent.selectItem(item)">
              mdi mdi-close
            </v-icon>
          </v-chip>
        </template>
      </v-autocomplete>
            </div>
          </div>
      </div>
      <div class="btn-container">
        <v-btn outlined class="btn-tertiary" @click="close">Cancel</v-btn>
        <v-btn @click="addMember" class="btn-primary">Add Member</v-btn>
      </div>
    </div>
  </v-dialog>
</template>
<script>
import axios from "axios";
import DatePicker from "./DatePicker.vue";

export default {
  props: ["isMemberDialog","newMember"],
  data() {
    return {
      endDate: "",
      tagItems: [
        {
          text: "Music",
        },
        {
          text: "Museum",
        },
        {
          text: "Adventure",
        },
        {
          text: "Hiking",
        },
        {
          text: "Travelling",
        },
        {
          text: "Winemaking",
        },
        {
          text: "Baking",
        },
      ],
        selectedTags:[],
       name: "",
      relation: "",
      trip: "",
      age: "",
      dob: "",
      interest: "",
      
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
    updatedob(val) {
      this.dob= val;
    },
    addMember() {
      const values = {
        name: this.name,
        relation: this.relation,
        dob: this.dob,
        age: this.age,
        trip: this.trip,
        interest: this.interest,
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
          console.log("Member added successfully:", response.data);
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
  border-radius: 0.5em;
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
  gap: 0.5em;
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
