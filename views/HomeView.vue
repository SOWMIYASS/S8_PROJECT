<template>
  <div>
    <div class="topNavBar">
      <div>
        <span class="createText">Create Itinerary</span>
      </div>
      <div style="display: flex;flex-direction: row;gap:8px">
        <div class="cancelButton">
          <span class="cancelText">Cancel</span>
        </div>
        <div class="completeButton">
          <span class="completeText">Complete</span>
        </div>
      </div>
    </div>
    <div style="margin-top:5%;padding:16px;">
      <div style="display: flex;flex-direction: row;justify-content: space-between;width:100%;height:85vh;gap:20px">
        <!-- first layout start-->
        <div style="width:20%;background-color: #FFFFFF;border-radius: 8px;padding:16px;">
          <div style="display: flex;flex-direction: row;gap:8px;align-items: center;">
            <div class="iconContainer">
              <img src="../assets/leftArrow.svg"/>
            </div>
            <div>
              <span class="tripDetails">Trip Details</span>
            </div>
          </div>
          <div style="margin-top:20px;" v-for="(trip,tripIndex) in  tripDetailsList">
            <div style="display: flex;flex-direction: row;justify-content: space-between;">
              <div>
                <span class="tripKeyText">{{ trip.key }}</span>
              </div>
              <div>
                <span class="tripValueText">{{ trip.value }}</span>
              </div>
            </div>
          </div>
          <div style="margin-top:20px;border-bottom:1px solid #E8E8E8"></div>
          <div style="margin-top:20px">
            <div>
              <span class="membersText">Members</span>
            </div>
            <div style="overflow: scroll;height:40vh" class="memberScroll">
              <div v-for="(member,memberIndex) in membersList">
                <div style="display: flex;flex-direction: row;justify-content: space-between;margin-top:10px;">
                  <div>
                    <span class="memberText">{{ member.member }}</span>
                  </div>
                  <div class="memberTypeBox">
                    <span class="memberTypeText">{{ member.memberType }}</span>
                  </div>
                </div>
                <div style="margin-top:10px;display: flex;flex-direction: row;gap:10px;align-items: center;">
                  <div style="display: flex;justify-content: center;align-items: center;">
                    <img src="../assets/avatar.svg"/>
                  </div>
                  <div>
                    <span class="memberNameText">{{ member.memberName }}</span>
                  </div>
                </div>
                <div style="margin-top:10px">
                  <div style="display: flex;flex-wrap: wrap;gap:10px;">
                    <div v-for="(interest,interestIndex) in member.interest">
                      <div class="interestButton">
                        <span class="interestText">{{ interest }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="margin-top:10px;border-bottom:1px solid #E8E8E8"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- first layout end-->
        <!-- second layout start-->
        <div style="width:60%;background-color: #FFFFFF;border-radius: 8px;">
          <div style="display: flex;flex-direction: row;justify-content: space-between;padding:16px;">
            <div>
              <span class="itineraryText">Itinerary</span>
            </div>
            <div class="addDayButton">
              <div>
                <span class="addDayText">Add Day</span>
              </div>
              <div>
                <v-icon color="#6E5DC6">mdi-plus</v-icon>
              </div>
            </div>
          </div>
          <div style="border:1px solid #E8E8E8"></div>
          <div>
            <div style="display: flex;flex-direction: row;justify-content: space-between;gap:10px;padding:16px;">
                <div style="width:50%;background-color: #F5F4F7;border-radius:8px;height:70vh;padding:16px;">
                  <div style="display: flex;flex-direction: row;justify-content: space-between;">
                    <div>
                      <span class="dayText">Day 1: 15 May, 2023</span>
                    </div>
                    <div style="display: flex;flex-direction: row;gap:10px">
                      <div>
                        <img src="../assets/add.svg"/>
                      </div>
                      <div>
                        <img src="../assets/leaf.svg"/>
                      </div>
                      <div>
                        <img src="../assets/menu.svg"/>
                      </div>
                    </div>
                  </div>
                  <div class="addTripButton">
                    <div style="display: flex;justify-content: center;align-items: center;">
                      <img src="../assets/add.svg"/>
                    </div>
                    <div>
                      <span class="addTripText">Add Trip / location</span>
                    </div>
                  </div>
                  <div class="flightButton">
                    <div>
                      <img src="../assets/flight-takeoff.svg"/>
                    </div>
                    <div>
                      <span class="placeText">Las vegas Airport</span>
                    </div>
                    <div>
                      <img src="../assets/flight-land-fill.svg"/>
                    </div>
                    <div>
                      <span class="minusText">- -</span>
                    </div>
                    <div>
                      <span class="placeText">Paris Beauvais Airport</span>
                    </div>
                  </div>
                  <div style="margin-top:15px;">
                    <div class="tripContainer">
                    <div style="display: flex;flex-direction: row;gap:8px">
                        <div style="display: flex;justify-content: center;align-items: center;">
                          <img src="../assets/swap.svg"/>
                        </div>
                        <div>
                          <span class="roomText">Rocamadour: the sacred hilltop pilgrimage</span>
                        </div>
                    </div>
                    <div>
                      <img src="../assets/minus.svg"/>
                    </div>
                    </div>
                    <div class="tripDescriptionContainer">
                      <div class="tripDescription1">
                        <div>
                          <span class="tripInterestText">Photography & Hiking spot for Jr. Peter Hein</span>
                        </div>
                        <div style="display: flex;justify-content: center;align-items: center;">
                          <img src="../assets/leaf.svg"/>
                        </div>
                      </div>
                      <div class="tripDescription2">
                        <div style="display: flex;flex-direction: row;gap:10px;">
                          <div style="display: flex;flex-direction: row;gap:4px">
                            <div style="display: flex;justify-content: center;align-items:center">
                              <img src="../assets/star.svg"/>
                            </div>
                            <div>
                              <span class="starText">4</span>
                            </div>
                          </div>
                          <div style="display: flex;flex-direction: row;gap:4px">
                            <div style="display: flex;justify-content: center;align-items:center">
                              <img src="../assets/location.svg"/>
                            </div>
                            <div>
                              <span class="locationText">France</span>
                            </div>
                          </div>
                        </div>
                        <div style="display: flex;flex-direction: row;gap:5px">
                          <div style="display: flex;justify-content: center;align-items:center">
                            <img src="../assets/time.svg"/>
                          </div>
                          <div>
                            <span class="timeText">04:00 AM - 12:00 AM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="width:50%;background-color: #F5F4F7;border-radius:8px;height:70vh;padding:16px;">
                  <div style="display: flex;flex-direction: row;justify-content: space-between;">
                    <div>
                      <span class="dayText">Day 1: 15 May, 2023</span>
                    </div>
                    <div style="display: flex;flex-direction: row;gap:10px">
                      <div>
                        <img src="../assets/add.svg"/>
                      </div>
                      <div>
                        <img src="../assets/leaf.svg"/>
                      </div>
                      <div>
                        <img src="../assets/menu.svg"/>
                      </div>
                    </div>
                  </div>
                  <div class="addTripButton">
                    <div style="display: flex;justify-content: center;align-items: center;">
                      <img src="../assets/add.svg"/>
                    </div>
                    <div>
                      <span class="addTripText">Add Trip / location</span>
                    </div>
                  </div>
                  <div class="flightButton">
                    <div>
                      <img src="../assets/flight-takeoff.svg"/>
                    </div>
                    <div>
                      <span class="placeText">Las vegas Airport</span>
                    </div>
                    <div>
                      <img src="../assets/flight-land-fill.svg"/>
                    </div>
                    <div>
                      <span class="minusText">- -</span>
                    </div>
                    <div>
                      <span class="placeText">Paris Beauvais Airport</span>
                    </div>
                  </div>
                  <div style="margin-top:15px">
                    <div class="tripContainer">
                     <div style="display: flex;flex-direction: row;gap:8px">
                        <div style="display: flex;justify-content: center;align-items: center;">
                          <img src="../assets/swap.svg"/>
                        </div>
                        <div>
                          <span class="roomText">Rocamadour: the sacred hilltop pilgrimage</span>
                        </div>
                     </div>
                     <div>
                      <img src="../assets/minus.svg"/>
                     </div>
                    </div>
                    <div class="tripDescriptionContainer">
                      <div class="tripDescription1">
                        <div>
                          <span class="tripInterestText">Photography & Hiking spot for Jr. Peter Hein</span>
                        </div>
                        <div style="display: flex;justify-content: center;align-items: center;">
                          <img src="../assets/leaf.svg"/>
                        </div>
                      </div>
                      <div class="tripDescription2">
                        <div style="display: flex;flex-direction: row;gap:10px;">
                          <div style="display: flex;flex-direction: row;gap:4px">
                            <div style="display: flex;justify-content: center;align-items:center">
                              <img src="../assets/star.svg"/>
                            </div>
                            <div>
                              <span class="starText">4</span>
                            </div>
                          </div>
                          <div style="display: flex;flex-direction: row;gap:4px">
                            <div style="display: flex;justify-content: center;align-items:center">
                              <img src="../assets/location.svg"/>
                            </div>
                            <div>
                              <span class="locationText">France</span>
                            </div>
                          </div>
                        </div>
                        <div style="display: flex;flex-direction: row;gap:5px">
                          <div style="display: flex;justify-content: center;align-items:center">
                            <img src="../assets/time.svg"/>
                          </div>
                          <div>
                            <span class="timeText">04:00 AM - 12:00 AM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <!-- second layout start-->
        <!-- third layout start-->
        <div style="width:20%;background-color: #FFFFFF;border-radius: 8px;padding:16px;">
          <div class="tabContainer">
            <div v-for="(tab,tabIndex) in tabList" @click="currentTabSelected=tab" :class="[currentTabSelected == tab ? 'activeButton' : 'inactiveButton' ]">
              <div>
                <span :class="[currentTabSelected == tab ? 'activeTabText' : 'inactiveTabText' ]">{{ tab }}</span>
              </div>
            </div>
          </div>
          <div style="margin-top:15px">
            <div class="searchTextField">
              <v-text-field  @keyup.enter="searchProduct()" style="height:51px;" v-model="searchText" label="Search" outlined  append-icon="mdi-magnify"></v-text-field>
            </div>
          </div>
          <div style="margin-top:15px;overflow: scroll;height:62vh" class="bucketScroll">
            <div v-if="productLoader" style="display: flex;justify-content: center;align-items: center;">
              <v-progress-circular indeterminate color="#3D2E8C"></v-progress-circular>
            </div>
            <div v-if="noProductsFound" style="display: flex;justify-content: center;align-items: center;">
              <span class="noProductsText">No products found!!</span>
            </div>
            <div v-if="!productLoader" v-for="(bucket,bucketIndex) in bucketList">
              <div class="bucketBox">
                <div style="display: flex;flex-direction: row;justify-content: space-between;align-items:center">
                  <div> 
                    <span class="bucketName">{{ bucket.name }}</span>
                  </div>
                  <div>
                    <img src="../assets/add.svg"/>
                  </div>
                </div>
                <div style="display:flex;flex-direction:row">
                  <div>
                    <span style=" font-family: Poppins-Regular;font-weight:400;font-size: 12px;color:  #6F717E;">{{ bucket.experience }}</span>
                  </div>
                </div>
                <!-- <div style="margin-top:10px;display: flex;flex-direction:row;justify-content: space-between;gap:8px;">
                  <div style="display: flex;flex-direction: row;gap:8px;">
                    <div style="display:flex;justify-content: center;align-items: center;">
                      <img src="../assets/star.svg"/>
                    </div>
                    <div style="display: flex;justify-content: center;align-items: center;">
                      <span class="ratingText">{{ bucket.rating }}</span>
                    </div>
                  </div>
                  <div style="display: flex;flex-direction: row;gap:5px;">
                    <div style="display:flex;justify-content: center;align-items: center;">
                      <img src="../assets/location.svg"/>
                    </div>
                    <div style="display: flex;justify-content: center;align-items: center;">
                      <span class="locationText">{{ bucket.location }}</span>
                    </div>
                  </div>
                  <div style="display: flex;flex-direction: row;gap:5px;">
                    <div style="display:flex;justify-content: center;align-items: center;">
                      <img src="../assets/time.svg"/>
                    </div>
                    <div style="display: flex;justify-content: center;align-items: center;">
                      <span class="timeText">{{ bucket.time }}</span>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- third layout start-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    name: 'Home',
    data() {
      return {
        searchText:"",
        currentTabSelected:"Bucket List",
        tripDetailsList:[
          {
            key: "Places:",
            value: "France, Italy, Belgium"
          },
          {
            key: "Trip Type:",
            value: "Family Vacation"
          },
          {
            key: "Timeline:",
            value: "5 Days "
          },
          {
            key: "Start Date:",
            value: "12 Jun, 2023"
          },
          {
            key: "End Date:",
            value: "17 Jun, 2023"
          }
        ],
        membersList:[
          {
            "member" : "Member 1",
            "memberType" : "Owner",
            "memberName" : "Peter Hein, 46yrs",
            "interest" : [
              "Party", "Beach", "Skiing", "Hiking", "Adventure"
            ]
          },
          {
            "member" : "Member 2",
            "memberType" : "Wife",
            "memberName" : "Bella Hein, 40yrs",
            "interest" : [
              "Music", "Beach", "Museum", "Hiking", "Adventure", "Winemaking", "Baking"
            ]
          },
          {
            "member" : "Member 3",
            "memberType" : "Son",
            "memberName" : "Jr. Peter Hein, 26yrs",
            "interest" : [
              "Music", "Beach", "Party", "Hiking", "Adventure"
            ]
          }
        ],
        tabList:["Bucket List","Product"],
        bucketList:[
        {
            name:"Champagne: home of Dom Pérignon",
            location:"France",
            rating:4,
            time:"04:00 AM - 12:00 AM",
            experience:"This is sample"
          },
          {
            name:"Rocamadour: the sacred hilltop pilgrimage",
            location:"France",
            rating:4,
            time:"04:00 AM - 12:00 AM"
          },
          {
            name:"Mont Saint-Michel: the real Rapunzel’s Tower",
            location:"France",
            rating:4,
            time:"04:00 AM - 12:00 AM"
          },
          {
            name:"Auvergne: the land that time forgot",
            location:"France",
            rating:4,
            time:"04:00 AM - 12:00 AM"
          },
          {
            name:"Corsica: the island of beauty",
            location:"France",
            rating:4,
            time:"04:00 AM - 12:00 AM"
          }
        ],
        productLoader:false,
        noProductsFound:false
      }
    },
    methods:{
      searchProduct() {
        this.productLoader = true
        this.bucketList = []
        axios.get("https://mvqju05dw7.execute-api.ap-south-1.amazonaws.com/dev/api/v1/search?productName="+this.searchText)
        .then((searchProductResponse) => {
          console.log("searchProductResponse",searchProductResponse)
          if(searchProductResponse.data.data.message.length==0) {
            this.noProductsFound = true
          } else {
            this.noProductsFound = false
            for(let i=0;i<searchProductResponse.data.data.message.length;i++) {
            this.bucketList.push({
              "name" : searchProductResponse.data.data.message[i].productName,
              "location":"France",
              "rating":4,
              "time":"04:00 AM - 12:00 AM",
              "experience": searchProductResponse.data.data.message[i].experience
            })
          }
          }
          console.log("this.bucketList",this.bucketList)
          this.productLoader = false
        })
        .catch((searchProductError) => {
          console.log("[ERROR] in searching products", searchProductError);
          this.productLoader = false
        })
      }
    }
  }
</script>

<style scoped>
.topNavBar {
  position: fixed;
  top:0px;
  width:100%;
  background-color: #FFFFFF;
  min-height:64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:16px;
}
.createText{
  font-family: Poppins-Regular;
  font-weight:600;
  font-size: 20px;
  color: #212332;
}
.cancelButton{
  min-width:79px;
  min-height:40px;
  border: 1px solid #5444AB;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cancelText{
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 13px;
  color: #5444AB;
}
.completeButton{
  min-width:200px;
  min-height:40px;
  background: #5444AB;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.completeText{
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 13px;
  color:  #FFFFFF;
}
.iconContainer{
  width:24px;
  height:24px;
  border: 1px solid #BFC0C8;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tripDetails{
  font-family: Poppins-SemiBold;
  font-weight:600;
  font-size: 20px;
  color:  #212332;
}
.tripKeyText{
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 14px;
  color:  #484A58;
}
.tripValueText{
  font-family: Poppins-Medium;
  font-weight:500;
  font-size: 14px;
  color:  #484A58;
}
.membersText{
  font-family: Poppins-SemiBold;
  font-weight:500;
  font-size: 16px;
  color:  #212332;
}

.memberTypeBox{
  width:64px;
  height:24px;
  border: 1px solid #E8E8EB;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.memberText{
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 12px;
  color: #6F717E;
}
.memberTypeText{
  font-family: Poppins-Regular;
  font-weight:500;
  font-size: 12px;
  color: #6F717E;
}

.memberNameText{
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 14px;
  color: #484A58;
}

.interestButton{
  height:27px;
  min-width: 55px;
  background: #EDEAFF;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.interestText {
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 12px;
  color: #3D2E8C;
}

.itineraryText{
  font-family: Poppins-SemiBold;
  font-weight:600;
  font-size: 20px;
  color: #212332;
}

.addDayButton{
  width:112px;
  height:40px;
  border: 1px solid #6E5DC6;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.addDayText{
  font-family: Poppins-Medium;
  font-weight:500;
  font-size: 13px;
  color: #6E5DC6;
}

.dayText{
  font-family: Poppins-SemiBold;
  font-weight:600;
  font-size: 14px;
  color: #484A58;
}

.addTripButton{
  margin-top:15px;
  height: 54px;
  background: #FFFFFF;
  border: 1px solid #6E5DC6;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  gap:5px;
  justify-content: center;
  align-items: center;
}

.addTripText{
  font-family: Poppins-SemiBold;
  font-weight:400;
  font-size: 14px;
  color: #484A58;
}

.flightButton{
  margin-top:15px;
  height:59px;
  background: #FFFFFF;
  border: 1px solid #E8E8EB;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:5px;
}
.placeText{
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 14px;
  color: #484A58;
}

.minusText{
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 14px;
  color: #484A58;
}

.tripContainer {
  height: 80px;
  background: #FFFFFF;
  border-bottom: 1px solid #E8E8EB;
  border-radius: 8px 8px 0px 0px;
  padding:16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tripDescriptionContainer{
  height: 95px;
  background: #FFFFFF;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  flex-direction: column;
}

.tripDescription1{
  height: 43px;
  border-bottom: 1px solid #E8E8EB;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:16px;
}

.tripDescription2{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:16px;
}

.starText{
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 11px;
  color:  #212332;
}

.tripInterestText{
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 14px;
  color:  #484A58;
}

.locationText{
  font-family: Poppins-Regular;
  font-weight:400;
  font-size: 13px;
  color:  #9798A3;
}

.roomText{
  font-family: Poppins-Medium;
  font-weight:500;
  font-size: 16px;
  color:  #212332;
}

.timeText{
  font-family: Poppins-Medium;
  font-weight:400;
  font-size: 13px;
  color:  #9798A3;
}


.tabContainer{
  height: 52px;
  background: #F5F4F7;
  border-radius: 4px;
  padding:16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap:20px;
  cursor: pointer;
}

.activeButton{
  width:50%;
  height: 36px;
  background: #3D2E8C;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inactiveButton{
  width:50%;
  height: 36px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.activeTabText{
  font-family: Poppins-Medium;
  font-weight:500;
  font-size: 13px;
  color:  #FFFFFF;
}
.inactiveTabText {
  font-family: Poppins-Medium;
  font-weight:400;
  font-size: 13px;
  color:  #6F717E;
}

.bucketBox{
  margin-top: 15px;
  min-height: 88px;
  background: #FFFFFF;
  border: 1px solid #E8E8EB;
  border-radius: 4px;
  display:flex;
  flex-direction: column;
  padding:16px;
  justify-content: space-between;
}

.bucketName{
  font-family: Poppins-Medium;
  font-weight:500;
  font-size: 12px;
  color:  #212332;
}



.noProductsText{
  font-family: Poppins-Medium;
  font-weight:500;
  font-size: 12px;
  color:  #212332;
}

.ratingText{
  font-family: Poppins-Medium;
  font-weight:400;
  font-size: 11px;
  color:  #212332;
}

.bucketScroll::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.bucketScroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.memberScroll::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.memberScroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>

