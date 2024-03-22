<template>
  <div>
    <CreateItinerary
      :isItineraryDialog="createItineraryDialog"
      @close="dialogClose1"
      @success="dialogSuccess1"
    />
    <OpenItinerary
      :isOpenDialog="openItineraryDialog"
      @close="dialogClose2"
      @success="dialogSuccess2"
      :title="selectedTitle"
      :dayItinerary="selectedDay"
    />
    <div class="user-details-wrapper">
      <div class="user-details-left">
        <div class="non-scroll-header">
          <div class="itinerary-management-header">
            <div>Itinerary Library</div>
          </div>

          <div class="rows itinerary-search global-form">
            <div class="cols col-1">
              <v-combobox
                :items="items"
                hide-selected
                label="Search for an option"
                multiple
                outlined
                single-line
                append-icon="mdi-magnify"
              >
                <template v-slot:selection="{ attrs, item, parent, selected }">
                  <v-chip
                    v-if="item === Object(item)"
                    v-bind="attrs"
                    :input-value="selected"
                    label
                    small
                    color="#EDEAFF"
                  >
                    <span class="pr-2">
                      {{ item.text }}
                    </span>
                    <v-icon small @click="parent.selectItem(item)">
                      $delete
                    </v-icon>
                  </v-chip>
                </template>
              </v-combobox>
            </div>
            <div class="cols col-2">
              <v-select
                hide-details
                outlined
                placeholder="Search Country"
                append-icon="mdi-magnify"
              ></v-select>
            </div>
            <div class="cols col-3">
              <v-select
                hide-details
                outlined
                placeholder="Choose Timeline"
              ></v-select>
            </div>
          </div>
        </div>

        <div class="itinerary-wrapper-container">
          <div class="itineraries-wrapper">
            <div
              @click="createItineraryDialog = true"
              class="create-itinerary-card"
            >
              <div class="create-itinerary-icon">
                <span><img src="../../assets/plus-circled.svg" /></span>
              </div>
              <div class="create-itinerary-title">
                <span>Create New Itinerary</span>
              </div>
            </div>

            <div
              class="itinerary-card"
              v-for="(itinerary, itineraryInd) in itineraryList"
            >
              <div class="itinerary-card-title">{{ itinerary.title }}</div>
              <div class="itinerary-tags-container">
                <div class="tag" v-for="(tag, tagInd) in itinerary.tagList">
                  {{ tag }}
                </div>
                <span class="itinerary-card-more-tags">+8</span>
              </div>
              <div class="itinerary-card-row-3">
                <div class="itinerary-row-3-days">
                  <img src="../../assets/calendar.svg" />
                  <span>{{ itinerary.days }} days</span>
                </div>
                <div class="itinerary-row-3-icons">
                  <img src="../../assets/flight-takeoff-line.svg" />
                  <img src="../../assets/hotel.svg" />
                </div>
              </div>
              <div class="itinerary-card-row-4">
                <div class="itinerary-row-4-images"></div>
                <div
                  class="itinerary-row-4-btn"
                  @click="
                    openItinerary(itinerary.title, itinerary.dayContainer)
                  "
                >
                  Open
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="user-details-right">
        <div class="user-details-header">
          <div>
            <div>Bucket List</div>
          </div>
        </div>
        <div class="user-details-profile-wrapper">
          <div v-for="(bucket, bucketIndex) in bucketList">
            <div class="bucketlist-wrapper">
              <div class="bucketlist-card">
                <div class="bucketlist-card-row">
                  <div class="bucketlist-card-title">
                    <span>{{ bucket.Experience }}</span>
                  </div>
                  <div class="bucketlist-card-icon">
                    <img src="../../assets/checkbox-minus-red.svg" />
                  </div>
                </div>
                <div class="bucketlist-card-row">
                  <div class="bucketlist-card-row-2">
                    <img src="../../assets/star.svg" />
                    <span>{{ bucket.rating }} </span>
                  </div>
                  <div class="bucketlist-card-row-2">
                    <img src="../../assets/map-pin-fill.svg" />
                    <span>{{ bucket.location }} </span>
                  </div>
                  <div class="bucketlist-card-row-2">
                    <img src="../../assets/clock-time-fill.svg" />
                    <span>{{ bucket.openingTime }} - {{ bucket.closingTime }} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-space"></div>
        </div>
        <div class="user-details-buttons">
          <router-link :to="{ name: 'ItineraryManagement' }" class="nav-item">
            <v-btn class="btn-cancel">Cancel</v-btn>
          </router-link>
          <div class="nav-item">
            <v-btn @click="createItineraryDialog = true" class="btn-create">Create Itinerary</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OpenItinerary from "../../components/OpenItinerary.vue";
import CreateItinerary from "../../components/CreateItinerary";

export default {
  name: "ItineraryBucketList",
  components: {  CreateItinerary, OpenItinerary },
  data() {
    return {
      seletedTab: "personalDetails",
      selectedTitle:"",
      selectedDay:[],
      createItineraryDialog: false,
      openItineraryDialog: false,
      bucketList:[],
      items: [
        {
          text: "Couple",
        },
        {
          text: "Scenery",
        },
        {
          text: "Sports",
        },
        {
          text: "Music",
        },
        {
          text: "Adventure",
        },
        {
          text: "Historical",
        },
      ],
      itineraryList: [],
    };
  },
  mounted() {
    this.bucketList = JSON.parse(localStorage.getItem("bucketList"));
    axios
      .get(process.env.VUE_APP_BACKEND_URL + "/v1/api/itinerary")
      .then((listOfItinerariesResponse) => {
        // console.log('listOfItinerariesResponse',listOfItinerariesResponse.data)
        this.itineraryList = listOfItinerariesResponse.data.itineraries.map(
          (itinerary) => {
            let prepareDayContainer = [];
            for (let i = 0; i < itinerary.Experiences.length; i++) {
              let day = `Day ${i + 1}`;
              prepareDayContainer.push({
                day: day,
                bucketList1: itinerary.Experiences[i],
              });
            }
            return {
              title: itinerary.tripName,
              tagList: ["Sports", "Music"],
              days: itinerary.numberOfDays,
              dayContainer: prepareDayContainer,
            };
          }
        );
      })
      .catch((listOfItinerariesError) => {
        console.log("listOfItinerariesError", listOfItinerariesError);
      });
  },
  methods: {
    openItinerary(title, dayContainer) {
      this.selectedTitle = title;
      this.selectedDay = dayContainer;
      this.openItineraryDialog = true;
    },
    dialogSuccess1() {
      this.bucketList = JSON.parse(localStorage.getItem("bucketList"));
      console.log("Itinerary Created");
      this.createItineraryDialog = false;
    },
    dialogClose1() {
      this.bucketList = JSON.parse(localStorage.getItem("bucketList"));
      console.log("closed");
      this.createItineraryDialog = false;
    },
    dialogSuccess2() {
      this.bucketList = JSON.parse(localStorage.getItem("bucketList"));
      console.log("Itinerary Created");
      this.openItineraryDialog = false;
    },
    dialogClose2() {
      console.log("closed");
      this.bucketList = JSON.parse(localStorage.getItem("bucketList"));
      this.openItineraryDialog = false;
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.user-details-wrapper {
  padding: 24px;
  display: flex;
  gap: 20px;
  height: 90%;
  width: 100%;
  position: fixed;
  /* overflow-x: hidden; */
}
.user-details-left {
  background-color: white;
  border-radius: 8px;
  width: 75%;
  height: 97%;
  overflow-y: scroll;
}

.user-details-right {
  background-color: white;
  border-radius: 8px;
  width: 25%;
  height: 97%;
}

.itinerary-management-header {
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #e8e8eb;
}

.itinerary-management-header div {
  font-size: 20px;
  font-family: "Poppins-SemiBold";
}

.non-scroll-header {
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.itineary-search {
  display: flex;
}

.rows {
  display: flex;
  gap: 8px;
  padding: 24px;
  padding-bottom: 0px;
  width: min(1000px, 90%);
}

.cols {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.col-1 {
  flex: 2;
}

.itinerary-wrapper-container {
  padding: 24px;
  padding-top: 0;
  flex: 1;
  overflow-y: auto;
}

.itineraries-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(389px, 1fr));
  gap: 20px;
}

.itinerary-card {
  border: 1px solid #e8e8eb;
  border-radius: 8px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 21px;
  justify-content: space-around;
}

.create-itinerary-card {
  border: 1px solid #e8e8eb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #edeaff;
  text-align: center;
  border-style: dashed;
  border-color: #cec6fb;
  border-width: 2px;
}

.create-itinerary-icon {
  margin-top: 65px;
}

.create-itinerary-title {
  margin-bottom: 65px;
  font-size: 18px;
  font-weight: 600;
}

.itinerary-card .itinerary-card-title {
  font-family: "poppins-medium";
}

.itinerary-card .itinerary-tags-container {
  display: flex;
  gap: 8px;
  align-items: center;
}

.itinerary-card .itinerary-card-more-tags {
  font-size: 14px;
  text-decoration: underline;
  color: #3d2e8c;
}

.itinerary-card .itinerary-card-row-3 {
  display: flex;
  color: #6f717e;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #e8e8eb;
}

.itinerary-card-row-3 > div {
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.itinerary-card-row-4 {
  display: flex;
  justify-content: space-between;
}

.itinerary-row-4-btn {
  color: #5444ab;
  font-size: 14px;
  cursor: pointer;
}
.bucketlist-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 12px 24px;
}
.user-details-profile-wrapper {
  height: 82%;
  overflow-y: scroll;
}



.itinerary-card-row-3>div {
	font-size: 13px;
	display: flex;
	align-items: center;
	gap: 8px;
}



.user-details-header {
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
}
.user-details-header > div {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-details-header > div > div {
  font-family: "Poppins-SemiBold";
  font-size: 20px;
}
.bucketlist-card {
  border: 1px solid #e8e8eb;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.bucketlist-card .bucketlist-card-row {
  display: flex;
  justify-content: space-between;
}
.bucketlist-card-title {
  font-weight: 600;
}
.bucketlist-card-row .bucketlist-card-row-2 {
  display: flex;
  gap: 4px;
  color: #9798a3;
}

.user-details-buttons {
  display: flex;

  justify-content: center;
  gap: 8px;
  padding: 24px;
  white-space: wrap;
}

.btn-cancel {
  flex: 1;
  background-color: white !important;
  padding: 20px 35px !important;
  color: #6e5dc6 !important;
  text-transform: capitalize;
  border: 1px solid #5444ab;
  box-shadow: none;
  align-self: auto;
}


.btn-create {
  flex: 1;
  background-color: #5444ab !important;
  padding: 20px 55px !important;
  color: white !important;
  text-transform: capitalize;
  align-self: auto;
}
</style>
