<template>
  <div class="wrapper">
    <Notes :isNoteDialog="noteDialog" @close="noteClose1" />
    <div v-if="itineraryHeader" class="itinerary-header">
      <div>
        <span class="itineraryText">Itinerary</span>
      </div>
      <div class="addDayButton" @click="addDay">
        <div>
          <span class="addDayText">Add Day</span>
        </div>
        <div>
          <v-icon color="#6E5DC6">mdi-plus</v-icon>
        </div>
      </div>
    </div>
    <div v-else class="itinerary-header">
      <div>
        <span class="itineraryText">Itinerary Summary</span>
      </div>
    </div>
    <div style="border: 1px solid #e8e8e8"></div>
    <div class="itinerary-inner-container">
      <div class="itinerary-contents-container">
        <div
          class="itinerary-wrapper"
          v-for="(itinerary, itineraryIndex) in itineraryList"
          :key="itineraryIndex"
          ref="dayWrapperRef"
          @dragover="handleDragOver"
          @drop="bucketItemDropHandler($event, itineraryIndex)"
        >
          <div class="itinerary-date-header">
            <div>
              <span class="dayText"> Day {{ itineraryIndex + 1 }}</span>
            </div>
            <div
              v-if="itineraryDateHeader"
              style="display: flex; flex-direction: row; gap: 10px"
            >
              <div>
                <img src="../../assets/add.svg" />
              </div>
              <div>
                <img src="../../assets/leaf.svg" />
              </div>
              <div>
                <img src="../../assets/menu.svg" />
              </div>
            </div>
            <div v-else style="display: flex; flex-direction: row; gap: 10px">
              <div>
                <img src="../../assets/leaf.svg" />
              </div>
              <div class="notes-text" @click="noteDialog = true">
                View Notes
              </div>
            </div>
          </div>
          <div
            v-if="itinerary.length === 0"
            class="drag-content-text"
          >
            <div><img src="../../assets/drag-icon.svg" /></div>
            <div class="drag-text">
              Drag and drag from bucket list to create itinerary
            </div>
          </div>
          <!-- <div v-else class="addTripButton">
            <div>
              <img src="../../assets/add.svg" />
            </div>
            <div>
              <span class="addTripText">Add Trip / location</span>
            </div>
          </div> -->
          <div class="add-itinerary-scroll">
            <div v-for="(bucket, bucketIndex) in itinerary">
              <div v-if="bucket.locationFrom" class="flightButton">
                <div>
                  <img src="../../assets/flight-takeoff.svg" />
                </div>
                <div>
                  <span class="placeText">{{ bucket.locationFrom }}</span>
                </div>
                <div>
                  <span class="minusText">- -</span>
                </div>
                <div>
                  <img src="../../assets/flight-land-fill.svg" />
                </div>
                <div>
                  <span class="placeText">{{ bucket.locationTo }}</span>
                </div>
              </div>
              <div class="trip-outer">
                <div class="tripContainer">
                  <div class="trip-wrapper">
                    <div class="trip-row1-col1">
                      <img src="../../assets/swap.svg" />
                    </div>
                    <div>
                      <span class="roomText">{{ bucket.Experience }}</span>
                    </div>
                  </div>
                  <div
                  v-if="itineraryHeader"
                    class="delete-experince"
                    @click="deleteBucket(itineraryIndex, bucketIndex)"
                  >
                    <img src="../../assets/minus.svg" />
                  </div>
                </div>
                <div class="tripDescriptionContainer">
                  <div v-if="bucket.experience" class="tripDescription1">
                    <div>
                      <span class="tripInterestText">{{
                        bucket.experience
                      }}</span>
                    </div>
                    <div>
                      <img src="../../assets/leaf.svg" />
                    </div>
                  </div>
                  <div class="tripDescription2">
                    <div class="td-row-main">
                      <div class="td-row">
                        <div class="td-row-inner">
                          <img src="../../assets/star.svg" />
                        </div>
                        <div>
                          <span class="ratingText">{{ bucket.rating }}</span>
                        </div>
                      </div>
                      <div class="td-row">
                        <div class="td-row-inner">
                          <img src="../../assets/location.svg" />
                        </div>
                        <div>
                          <span class="locationText">{{
                            bucket.location
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="td-row">
                      <div class="td-row-inner">
                        <img src="../../assets/time.svg" />
                      </div>
                      <div>
                        <span class="timeText">{{ bucket.openingTime }} - {{ bucket.closingTime }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notes from "@/components/Notes.vue";
import { EventBus } from "@/main";
export default {
  name: "ItineraryDetails",
  components: { Notes },
  props: ["itineraryHeader", "itineraryDateHeader", "itineraryList"],
  data() {
    return {
      noteDialog: false,
    };
  },
  methods: {
    addDay() {
      const newDay = []

      this.itineraryList.push(newDay);
      this.$nextTick(() => {
        const dayWrappers = this.$refs.dayWrapperRef;
        if (dayWrappers && dayWrappers.length > 0) {
          const newDayIndex = dayWrappers.length - 1;
          const ele = document.createElement("div");
          dayWrappers[newDayIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    },
    deleteBucket(ind, keyTagIndex) {
      if (this.itineraryList[ind].length == 1)
      {
        this.itineraryList.splice(ind,1)
        return
      }
      this.itineraryList[ind].splice(keyTagIndex, 1);
    },

    noteClose1() {
      console.log("closed");
      this.noteDialog = false;
    },
    handleDragOver(e) {
      e.preventDefault();
    },
    bucketItemDropHandler(e, dayIndex) {
      const bucketItem = JSON.parse(e.dataTransfer.getData("bucketList"));
      EventBus.$emit("BucketItemDropped")
      this.itineraryList[dayIndex].unshift(bucketItem);

    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.itinerary-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 24px 16px;
}
.itineraryText {
  font-family: Poppins-SemiBold;
  font-weight: 600;
  font-size: 20px;
  color: #212332;
}

.addDayButton {
  width: 112px;
  border: 1px solid #6e5dc6;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
.addDayButton > div {
  font-family: Poppins-Medium;
  font-weight: 500;
  font-size: 15px;
  color: #6e5dc6;
}
.drag-content-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #aaa;
  white-space: wrap;
  gap: 24px;
}
.drag-text {
  padding: 20px;
  text-align: center;
}
.notes-text {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 14px;
  color: #5444ab;
  cursor: pointer;
}

.itinerary-inner-container {
  flex: 1;
  overflow: auto;
  padding: 24px;
}
.itinerary-contents-container {
  display: flex;
  gap: 1.5em;
  height: 100%;
  overflow: auto;
  width: fit-content;
}
.trip-outer {
  margin-bottom: 16px;
}
.itinerary-wrapper {
  display: flex;
  flex-direction: column;
  width: 30em;
  gap: 20px;
  border-radius: 8px;
  background-color: #f5f4f7;
  padding: 24px;
  height: 100%;
  overflow-y: auto;
}
.itinerary-date-header {
  display: flex;
  justify-content: space-between;
}
.dayText {
  font-family: Poppins-SemiBold;
  font-weight: 600;
  font-size: 16px;
  color: #484a58;
}
.addTripButton {
  margin-top: 15px;
  padding: 12px;
  background: #ffffff;
  border: 1px solid #6e5dc6;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 17px;
}
.flightButton {
  padding: 16px 16px;
  background: #ffffff;
  border: 1px solid #e8e8eb;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 16px;
  white-space: wrap;
}
.addTripText,
.placeText,
.minusText,
.tripInterestText {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 14px;
  color: #484a58;
}
.tripContainer {
  background: #ffffff;
  border-bottom: 1px solid #e8e8eb;
  border-radius: 8px 8px 0px 0px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.trip-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.delete-experince {
  display: flex;
  align-items: center;
}
.trip-row1-col1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.roomText {
  font-family: Poppins-Medium;
  font-weight: 500;
  font-size: 16px;
  color: #212332;
}
.tripDescriptionContainer {
  background: #ffffff;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  flex-direction: column;
}
.tripDescription1 {
  border-bottom: 1px solid #e8e8eb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  white-space: wrap;
}
.tripDescription2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  white-space: wrap;
}
.td-row-main {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.td-row {
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.td-row-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
