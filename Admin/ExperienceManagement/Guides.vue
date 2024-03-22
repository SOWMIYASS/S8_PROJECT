<template>
  <div class="content-wrapper">
    <AddGuide
      :isGuideDialog="addGuideDialog"
      @close="dialogClose"
      @success="dialogSuccess"
    />
    <div class="experience-management-guide-container">
      <div class="experience-management-guide-header">
        <div>Guides</div>
        <v-btn @click="addGuideDialog = true" class="btn-primary"
          ><v-icon>mdi-plus</v-icon> Add Guide</v-btn
        >
      </div>
      <div class="experience-management-guide-table-wrapper">
        <v-data-table
          :headers="experienceManagementGuideHeader"
          :items="experienceManagementGuideItems"
          class="global-table fixed-header"
          fixed-header
          :hide-default-footer="true"
          disable-pagination
          item-key="id"
        >
          <template v-slot:body.prepend>
            <tr class="experience-management-guide-search-input-tr global-form">
              <td>
                <v-text-field
                  placeholder="Search"
                  hide-details
                  outlined
                  :dense="true"
                  v-model="searchById"
                  color="#6F717E"
                  append-icon="mdi-magnify"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  placeholder="Search"
                  hide-details
                  outlined
                  :dense="true"
                  v-model="searchByName"
                  color="#6F717E"
                  append-icon="mdi-magnify"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  placeholder="Search"
                  hide-details
                  outlined
                  :dense="true"
                  append-icon="mdi-magnify"
                  color="#6F717E"
                  v-model="searchBymobileNumber"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  placeholder="Search"
                  hide-details
                  outlined
                  :dense="true"
                  append-icon="mdi-magnify"
                  color="#6F717E"
                  v-model="searchByLocation"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  placeholder="Search"
                  hide-details
                  outlined
                  :dense="true"
                  append-icon="mdi-magnify"
                  color="#6F717E"
                  v-model="searchByTrips"
                ></v-text-field>
              </td>

              <td></td>
              <td></td>

              <td>
                <v-select
                  placeholder="Select Status"
                  outlined
                  hide-details
                  :items="['Paid', 'Pending']"
                  :dense="true"
                  v-model="searchByPaymentStatus"
                ></v-select>
              </td>
            </tr>
          </template>
          <template v-slot:item.name="{ item }">
            <div class="name-column">
              <img :src="item.userAvatar" />
              <div class="">{{ item.name }}</div>
            </div>
          </template>
          <template v-slot:item.id="{ item }">
            <router-link
              :to="{ name: 'GuidesDetails', params: { id: item.id } }"
              >{{ item.id }}</router-link
            >
          </template>
          <template v-slot:item.paymentStatus="{ item }">
            <span class="tag" :class="item.paymentStatus">{{
              item.paymentStatus
            }}</span>
          </template>
          <template v-slot:item.ratings="{ item }">
            <div class="rating-container">
              <span><img src="../../assets/star.svg" /></span>
              <span>{{ item.ratings }}</span>
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import AddGuide from "@/components/AddGuide.vue";

export default {
  props: ["width"],
  components: { AddGuide },
  data() {
    return {
      seletedTab: "personalDetails",
      addGuideDialog: false,
      experienceManagementGuideItems: [
        {
          id: "#PR14253",
          name: "Venkat Prabhu",
          userAvatar: require("../../assets/avatar.jpeg"),
          location: "Marne Valley, France",
          trips: "8",
          ratings: "4",
          mobileNumber: "+91 8888899999",
          lastTrip: "Coimbatore, 20 May, 2023",
          paymentStatus: "Paid",
        },

        {
          id: "#PR1235",
          name: "Jeevan Raj",
          userAvatar: require("../../assets/avatar.jpeg"),
          location: "Occitanie region, France",
          trips: "10",
          ratings: "2",
          mobileNumber: "+91 8888899999",
          lastTrip: "Madurai, 26 Jan, 2022",
          paymentStatus: "Paid",
        },
        {
          id: "#PR2658",
          name: "Gokula Rama Krishnan",
          userAvatar: require("../../assets/avatar.jpeg"),
          location: "Corsica, France",
          trips: "30",
          ratings: "3",
          mobileNumber: "+91 8888899999",
          lastTrip: "Mumbai, 12 Apr, 2023",
          paymentStatus: "Pending",
        },
        {
          id: "#PR2658",
          name: "Gokula Rama Krishnan",
          userAvatar: require("../../assets/avatar.jpeg"),
          location: "Corsica, France",
          trips: "30",
          ratings: "3",
          mobileNumber: "+91 8888899999",
          lastTrip: "Mumbai, 12 Apr, 2023",
          paymentStatus: "Pending",
        },
        {
          id: "#PR2658",
          name: "Gokula Rama Krishnan",
          userAvatar: require("../../assets/avatar.jpeg"),
          location: "Corsica, France",
          trips: "30",
          ratings: "3",
          mobileNumber: "+91 8888899999",
          lastTrip: "Mumbai, 12 Apr, 2023",
          paymentStatus: "Pending",
        },
        {
          id: "#PR2658",
          name: "Gokula Rama Krishnan",
          userAvatar: require("../../assets/avatar.jpeg"),
          location: "Corsica, France",
          trips: "30",
          ratings: "3",
          mobileNumber: "+91 8888899999",
          lastTrip: "Mumbai, 12 Apr, 2023",
          paymentStatus: "Pending",
        },
        {
          id: "#PR2658",
          name: "Gokula Rama Krishnan",
          userAvatar: require("../../assets/avatar.jpeg"),
          location: "Corsica, France",
          trips: "30",
          ratings: "3",
          mobileNumber: "+91 8888899999",
          lastTrip: "Mumbai, 12 Apr, 2023",
          paymentStatus: "Pending",
        },
        {
          id: "#PR2658",
          name: "Gokula Rama Krishnan",
          userAvatar: require("../../assets/avatar.jpeg"),
          location: "Corsica, France",
          trips: "30",
          ratings: "3",
          mobileNumber: "+91 8888899999",
          lastTrip: "Mumbai, 12 Apr, 2023",
          paymentStatus: "Pending",
        },
        {
          id: "#PR0235",
          name: "Robert Pattison",
          userAvatar: require("../../assets/avatar.jpeg"),
          location: "Pyrenees, France",
          trips: "40",
          ratings: "1",
          mobileNumber: "+91 8888899999",
          lastTrip: "Pune, 05 Mar, 2021",
          paymentStatus: "Paid",
        },
      ],
      searchById: "",
      searchByName: "",
      searchByLocation: "",
      searchByTrips: "",
      searchByPaymentStatus: "",
      searchByInterest: "",
      searchBymobileNumber: "",
    };
  },
  methods: {
    dialogSuccess() {
      alert("Guide added");
      this.addGuideDialog = false;
    },
    dialogClose() {
      console.log("closed");
      this.addGuideDialog = false;
    },
  },
  computed: {
    uniqueTypes() {
      const types = this.experienceManagementGuideItems.map(
        (item) => item.type
      );
      return [...new Set(types)];
    },
    experienceManagementGuideHeader() {
      return [
        {
          text: "ID",
          value: "id",
          align: "center",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchById.toLowerCase());
          },
        },
        {
          text: "Name",
          value: "name",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByName.toLowerCase());
          },
        },
        {
          text: "Mobile Number",
          value: "mobileNumber",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchBymobileNumber.toLowerCase());
          },
        },
        {
          text: "Location",
          value: "location",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByLocation.toLowerCase());
          },
        },
        {
          text: "Trips",
          value: "trips",
          align: "center",
          filter: (val) => {
            return (val + "").includes(this.searchByTrips);
          },
        },
        {
          text: "Ratings",
          value: "ratings",
          align: "center",
        },
        {
          text: "Last Trip",
          value: "lastTrip",
          align: "center",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByInterest.toLowerCase());
          },
        },
        {
          text: "Payment Status",
          value: "paymentStatus",
          align: "center",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByPaymentStatus.toLowerCase());
          },
        },
      ];
    },
  },
};
</script>

<style scoped>
.content-wrapper {
  flex: 1;
  overflow: hidden;
}

.experience-management-guide-container {
  background: white;
  border-radius: 8px;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.experience-management-guide-header {
  display: flex;
  justify-content: space-between;
}

.experience-management-guide-header div {
  font-size: 20px;
  font-family: "Poppins-SemiBold";
}

.experience-management-guide-table-wrapper {
  margin-top: 32px;
  flex: 1;
  overflow: hidden;
}

.experience-management-guide-search-input-tr {
  background: #f9f9fe !important;
}

.name-column {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.name-column img {
  width: 3em;
  aspect-ratio: 1;
  border-radius: 50%;
}


.rating-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
}

.rating-container span {
  display: flex;
  align-items: center;
}
.rating-container span img {
  width: 1.2em;
  pointer-events: none;
  user-select: none;
}


</style>
