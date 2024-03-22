<template>
  <div class="header">
    <div class="global-tabs-container">
      <button
        class="global-tab"
        @click="seletedTab = 'bucketList'"
        :class="{ active: seletedTab == 'bucketList' }"
      >
        BucketList
      </button>
      <button
        class="global-tab"
        @click="seletedTab = 'experienceTab'"
        :class="{ active: seletedTab == 'experienceTab' }"
      >
        Experiences
      </button>
    </div>
    <div v-show="seletedTab == 'bucketList'" class="bucketlist-tab-container">
      <div class="searchTextField">
        <v-text-field
          v-model="bucketSearchText"
          label="Search"
          outlined
          append-icon="mdi-magnify"
        ></v-text-field>
      </div>
      <div class="bucketScroll">
        <div v-if="productLoader" class="productloader-container">
          <v-progress-circular
            indeterminate
            color="#3D2E8C"
          ></v-progress-circular>
        </div>
        <div v-if="noProductsFound" class="noproduct-container">
          <span class="noProductsText">No products found!!</span>
        </div>
        <div v-if="!productLoader" v-for="(bucket, bucketIndex) in bucketListProp">
          <div
            class="bucketBox"
            draggable="true"
            @dragstart="handleBucketListDragStart($event, bucket,bucketIndex)"
          >
            <div class="bucketBox-wrapper">
              <div>
                <span class="bucketName">{{ bucket.Experience }}</span>
              </div>
              <div @click="deleteBucketItem(bucketIndex)">
                <img src="../../assets/minus.svg" />
              </div>
            </div>
            <div style="display: flex; flex-direction: row">
              <div>
                <span
                  style="
                    font-family: Poppins-Regular;
                    font-weight: 400;
                    font-size: 12px;
                    color: #6f717e;
                  "
                  >{{ bucket.experience }}</span
                >
              </div>
            </div>
            <div class="bucket-outer-row">
              <div class="bucket-row">
                <div class="bucket-inner-row">
                  <img src="../../assets/star.svg" />
                </div>
                <div class="bucket-inner-row">
                  <span class="ratingText">{{ bucket.rating }}</span>
                </div>
              </div>
              <div class="bucket-row">
                <div class="bucket-inner-row">
                  <img src="../../assets/location.svg" />
                </div>
                <div class="bucket-inner-row">
                  <span class="locationText">{{ bucket.location }}</span>
                </div>
              </div>
              <div class="bucket-row">
                <div class="bucket-inner-row">
                  <img src="../../assets/time.svg" />
                </div>
                <div class="bucket-inner-row">
                  <span class="timeText">{{ bucket.openingTime }} - {{ bucket.closingTime }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="seletedTab == 'experienceTab'"
      class="experience-tab-container"
    >
      <div class="searchTextField">
        <v-text-field
          v-model="experienceSearchText"
          label="Search"
          outlined
          append-icon="mdi-magnify"
        ></v-text-field>
      </div>
      <div class="bucketScroll">
        <div v-if="productLoader" class="productloader-container">
          <v-progress-circular
            indeterminate
            color="#3D2E8C"
          ></v-progress-circular>
        </div>
        <div v-if="noProductsFound" class="noproduct-container">
          <span class="noProductsText">No products found!!</span>
        </div>
        <div
          v-if="!productLoader"
          v-for="(experience, experienceIndex) in experiences"
        >
          <div class="bucketBox" draggable="true">
            <div class="bucketBox-wrapper">
              <div>
                <span class="bucketName">{{ experience.name }}</span>
              </div>
              <div>
                    <img src="../../assets/minus.svg" />
              </div>
            </div>
            <div style="display: flex; flex-direction: row">
              <div>
                <span
                  style="
                    font-family: Poppins-Regular;
                    font-weight: 400;
                    font-size: 12px;
                    color: #6f717e;
                  "
                  >{{ experience.experience }}</span
                >
              </div>
            </div>
            <div class="bucket-outer-row">
              <div class="bucket-row">
                <div class="bucket-inner-row">
                  <img src="../../assets/star.svg" />
                </div>
                <div class="bucket-inner-row">
                  <span class="ratingText">{{ experience.rating }}</span>
                </div>
              </div>
              <div class="bucket-row">
                <div class="bucket-inner-row">
                  <img src="../../assets/location.svg" />
                </div>
                <div class="bucket-inner-row">
                  <span class="locationText">{{ experience.location }}</span>
                </div>
              </div>
              <div class="bucket-row">
                <div class="bucket-inner-row">
                  <img src="../../assets/time.svg" />
                </div>
                <div class="bucket-inner-row">
                  <span class="timeText">{{ experience.time }}</span>
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
import axios from "axios";
import {EventBus} from "../../main"
export default {
  name: "BucketDetails",
  props: ["bucketListProp"],
  data() {
    return {
      seletedTab: "bucketList",
      bucketSearchText: "",
      experienceSearchText: "",
      productLoader: false,
      noProductsFound: false,
      experiences: [],
      lastDraggedItemIndex:-1,
    };
  },

  methods: {  
    handleBucketListDragStart(e, bucket, bucketItemIndex) {
      e.dataTransfer.setData("bucketList", JSON.stringify(bucket));
      this.lastDraggedItemIndex = bucketItemIndex

    },
    deleteBucketItem(index) {
      this.bucketListProp.splice(index,1)
      localStorage.setItem("bucketList",JSON.stringify(this.bucketListProp))
    },
  },

  mounted() {
    EventBus.$on("BucketItemDropped", ()=>{
      console.log(this.lastDraggedItemIndex);
      if (this.lastDraggedItemIndex > -1)
      this.bucketListProp.splice(this.lastDraggedItemIndex,1)
      this.lastDraggedItemIndex = -1
    })
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.searchTextField {
  padding: 24px 0 0 0;
}

.bucketScroll {
  overflow-y: scroll;
  height: 65vh;
}
.productloader-container,
.noproduct-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bucketBox-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.bucketBox {
  margin-bottom: 16px;
  min-height: 88px;
  background: #ffffff;
  border: 1px solid #e8e8eb;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
}
.bucketName {
  font-family: Poppins-Medium;
  font-weight: 500;
  font-size: 16px;
  color: #212332;
}
.bucket-outer-row {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bucket-row {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.bucket-inner-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
