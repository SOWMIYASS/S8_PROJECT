<template>
  <div class="experience-wrapper">
    <AddExperience
      :isExperienceDialog="addExperienceDialog"
      @close="dialogClose"
      @success="dialogSuccess"
    />
    <div class="experience-management-container">
      <div class="experience-management-header">
        <div>Experiences</div>
        <v-btn @click="addExperienceDialog = true" class="btn-primary"
          ><v-icon>mdi-plus</v-icon> Add Experience</v-btn
        >
      </div>
      <div class="experience-management-table-wrapper">
        <v-data-table
          :headers="experienceManagementHeader"
          :items="experienceManagementItems"
          class="global-table fixed-header"
          :hide-default-footer="true"
          item-key="id"
          fixed-header
          disable-pagination
        >
          <template v-slot:body.prepend>
            <tr class="experience-management-search-input-tr global-form">
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
                  v-model="searchByLocation"
                ></v-text-field>
              </td>
              <td>
                <v-select
                  placeholder="Select Type"
                  outlined
                  hide-details
                  :items="uniqueTypes"
                  :dense="true"
                  v-model="searchByType"
                ></v-select>
              </td>
              <td></td>
              <td>
                <v-select
                  placeholder="Select Status"
                  outlined
                  hide-details
                  :items="['Active', 'Closed']"
                  :dense="true"
                  v-model="searchByStatus"
                ></v-select>
              </td>
              <td>
                <v-text-field
                  placeholder="Search"
                  hide-details
                  outlined
                  :dense="true"
                  v-model="searchByInterest"
                  color="#6F717E"
                  append-icon="mdi-magnify"
                ></v-text-field>
              </td>
            </tr>
          </template>
          <template v-slot:item.id="{ item }">
            <router-link :to="{ name: ' ', params: { id: item.id } }">{{
              item.id
            }}</router-link>
          </template>
          <template v-slot:item.status="{ item }">
            <span class="tag" :class="item.status">{{ item.status }}</span>
          </template>
          <template v-slot:item.interest="{ item }">
            <div class="tags-container">
              <span
                v-for="(item, index) in item.interest"
                :key="index"
                class="tag"
              >
                {{ item }}
              </span>
            </div>
          </template>
          <template v-slot:item.ratings="{ item }">
            <div class="rating-container">
              <span><img src="../../assets/star.svg" /></span>
              <span>{{ item.ratings }}</span>
            </div>
          </template>
          <template v-slot:item.name="{ item }">
            <div class="table-name">
              <img :src="item.userAvatar" />
              <div style="font-weight: bold">{{ item.name }}</div>
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import AddExperience from "@/components/AddExperience.vue";

export default {
  props: ["width"],
  components: { AddExperience },
  data() {
    return {
      seletedTab: "personalDetails",
      addExperienceDialog: false,
      experienceManagementItems: [
        {
          id: "#PR14253",
          name: "Champagne: home of Dom Pérignon",
          location: "Marne Valley, France",
          type: "Hotel",
          ratings: "4",
          status: "Active",
          interest: [
            "Music",
            "Hotel",
            "Hillside",
            "Historical",
            "Photography",
            "Wine Making",
          ],
          userAvatar: require("../../assets/avatar.jpeg"),
        },
        {
          id: "#PR1235",
          name: "Rocamadour: the sacred hilltop pilgrimage",
          location: "Occitanie region, France",
          type: "Venue",
          ratings: "2",
          status: "Active",
          interest: ["Park", "Stone House", "Castle", "Hill", "Photography"],
          userAvatar: require("../../assets/avatar.jpeg"),
        },
        {
          id: "#PR2658",
          name: "Corsica: the island of beauty",
          location: "Corsica, France",
          type: "Island",
          ratings: "3",
          status: "Closed",
          interest: [
            "Beaches",
            "Sunrise",
            "Adventure",
            "Villa",
            "Photography",
            "Resort",
          ],
          userAvatar: require("../../assets/avatar.jpeg"),
        },
        {
          id: "#PR2658",
          name: "Corsica: the island of beauty",
          location: "Corsica, France",
          type: "Island",
          ratings: "3",
          status: "Closed",
          interest: [
            "Beaches",
            "Sunrise",
            "Adventure",
            "Villa",
            "Photography",
            "Resort",
          ],
          userAvatar: require("../../assets/avatar.jpeg"),
        },
        {
          id: "#PR2658",
          name: "Corsica: the island of beauty",
          location: "Corsica, France",
          type: "Island",
          ratings: "3",
          status: "Closed",
          interest: [
            "Beaches",
            "Sunrise",
            "Adventure",
            "Villa",
            "Photography",
            "Resort",
          ],
          userAvatar: require("../../assets/avatar.jpeg"),
        },
        {
          id: "#PR2658",
          name: "Corsica: the island of beauty",
          location: "Corsica, France",
          type: "Island",
          ratings: "3",
          status: "Closed",
          interest: [
            "Beaches",
            "Sunrise",
            "Adventure",
            "Villa",
            "Photography",
            "Resort",
          ],
          userAvatar: require("../../assets/avatar.jpeg"),
        },
        {
          id: "#PR2658",
          name: "Corsica: the island of beauty",
          location: "Corsica, France",
          type: "Island",
          ratings: "3",
          status: "Closed",
          interest: [
            "Beaches",
            "Sunrise",
            "Adventure",
            "Villa",
            "Photography",
            "Resort",
          ],
          userAvatar: require("../../assets/avatar.jpeg"),
        },
        {
          id: "#PR2658",
          name: "Corsica: the island of beauty",
          location: "Corsica, France",
          type: "Island",
          ratings: "3",
          status: "Closed",
          interest: [
            "Beaches",
            "Sunrise",
            "Adventure",
            "Villa",
            "Photography",
            "Resort",
          ],
          userAvatar: require("../../assets/avatar.jpeg"),
        },
        {
          id: "#PR0235",
          name: "Auvergne: the land that time forgot",
          location: "Pyrenees, France",
          type: "Hotel",
          ratings: "1",
          status: "Active",
          interest: [
            "hey",
            "Music",
            "Hotel",
            "Hillside",
            "Historical",
            "Photography",
            "Wine Making",
          ],
          userAvatar: require("../../assets/avatar.jpeg"),
        },
      ],
      searchById: "",
      searchByName: "",
      searchByLocation: "",
      searchByType: "",
      searchByStatus: "",
      searchByInterest: "",
    };
  },
  methods: {
    dialogSuccess() {
      alert("Experience added");
      this.addExperienceDialog = false;
    },
    dialogClose() {
      console.log("closed");
      this.addExperienceDialog = false;
    },
  },
  computed: {
    uniqueTypes() {
      const types = this.experienceManagementItems.map((item) => item.type);
      return [...new Set(types)];
    },
    experienceManagementHeader() {
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
          text: "Location",
          value: "location",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByLocation.toLowerCase());
          },
        },
        {
          text: "Type",
          value: "type",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByType.toLowerCase());
          },
        },
        {
          text: "Ratings",
          value: "ratings",
          ratings: "cneter",
        },

        {
          text: "Status",
          value: "status",
          align: "center",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByStatus.toLowerCase());
          },
        },
        {
          text: "Interest",
          value: "interest",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByInterest.toLowerCase());
          },
        },
      ];
    },
  },
};
</script>

<style scoped>
.experience-wrapper {
  flex: 1;
  overflow: auto;
}

.experience-management-container {
  background: white;
  padding: 1.5em;
  border-radius: .5em;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.experience-management-header {
  display: flex;
  justify-content: space-between;
}

.experience-management-header div {
  font-size: 1.25rem;
  font-family: "Poppins-SemiBold";
}

.experience-management-table-wrapper {
  margin-top: 2em;
  flex: 1;
  overflow: auto;
}

.experience-management-search-input-tr {
  background: #f9f9fe !important;
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


.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.table-name {
  display: flex;
  align-items: flex-start;
  gap: .5em;
}

.table-name img {
  width: 2.8em;
  border-radius: 0.5em;
}
</style>
