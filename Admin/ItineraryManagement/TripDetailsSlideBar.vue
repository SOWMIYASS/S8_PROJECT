<template>
  <div class="trip-key-value-container">
    <div
      class="trip-inner-container1"
      v-for="(trip, tripIndex) in tripDetailsList"
    >
      <div style="display: flex; justify-content: space-between">
        <div>
          <span class="tripKeyText">{{ trip.key }}</span>
        </div>
        <div>
          <span class="tripValueText">{{ trip.value }}</span>
        </div>
      </div>
    </div>
    <div style="margin-top: 20px; border-bottom: 1px solid #e8e8e8"></div>
    <div style="margin-top: 20px">
      <div>
        <span class="membersText">MEMBERS</span>
      </div>
      <div class="memberScroll">
        <div v-for="(member, memberIndex) in membersList">
          <div class="member-row1">
            <div>
              <span class="memberText">{{ member.member }}</span>
            </div>
            <div class="memberTypeBox">
              <span class="memberTypeText">{{ member.memberType }}</span>
            </div>
          </div>
          <div class="member-row2">
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <img src="../../assets/avatar.svg" />
            </div>
            <div>
              <span class="memberNameText">{{ member.memberName }}</span>
            </div>
          </div>
          <div class="member-row3">
            <div v-for="(interest, interestIndex) in member.interest">
              <div class="interestButton">
                <span class="interestText">{{ interest }}</span>
              </div>
            </div>
          </div>
          <div style="margin-top: 10px; border-bottom: 1px solid #e8e8e8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TripDetailsSlideBar",
  props: ["itineraryDetails"],
  data() {
    return {
      showTripDetails: true,
      membersList: [
        {
          member: "Member 1",
          memberType: "Owner",
          memberName: "Peter Hein, 46yrs",
          interest: ["Party", "Beach", "Skiing", "Hiking", "Adventure"],
        },
        {
          member: "Member 2",
          memberType: "Wife",
          memberName: "Bella Hein, 40yrs",
          interest: [
            "Music",
            "Beach",
            "Museum",
            "Hiking",
            "Adventure",
            "Winemaking",
            "Baking",
          ],
        },
        {
          member: "Member 3",
          memberType: "Son",
          memberName: "Jr. Peter Hein, 26yrs",
          interest: ["Music", "Beach", "Party", "Hiking", "Adventure"],
        },
        {
          member: "Member 4",
          memberType: "Son",
          memberName: "Jr. Peter Hein, 26yrs",
          interest: ["Music", "Beach", "Party", "Hiking", "Adventure"],
        },
      ],
    };
  },
  methods: {
    toggleTripDetails() {
      this.showTripDetails = !this.showTripDetails;
    },
  },
  computed: {
    rightArrowVisible() {
      return !this.showTripDetails;
    },
    tripDetailsList() {
      const temp = this.itineraryDetails;
      const temp2 = [];
      if (!temp) {
        return
      };
      temp2.push({ key: "Places", value: temp.tripName });
      temp2.push({ key: "Trip Type", value: temp.tripType });
      temp2.push({ key: "Timeline", value: temp.numberOfDays });
      temp2.push({ key: "Start Date", value: temp.startDate });
      temp2.push({ key: "End Date", value: temp.endDate });
      return temp2;
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.trip-key-value-container {
  padding: 0 24px;
}
.trip-inner-container1 {
  padding: 10px;
}
.tripKeyText {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 14px;
  color: #484a58;
}
.tripValueText {
  font-family: Poppins-Medium;
  font-weight: 500;
  font-size: 14px;
  color: #484a58;
}
.memberScroll {
  margin-top: 16px;
  overflow-y: scroll;
  height: 44vh;
  max-height: 100vh;
}
.member-row1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}
.member-row2 {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}
.member-row3 {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}
.memberTypeBox {
  width: auto;
  height: 24px;
  border: 1px solid #e8e8eb;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
}
.memberTypeText {
  font-family: Poppins-Medium;
  font-weight: 500;
  font-size: 12px;
  color: #6f717e;
}
.membersText {
  font-family: Poppins-SemiBold;
  font-weight: 500;
  font-size: 16px;
  color: #212332;
}
.memberText {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 12px;
  color: #6f717e;
}
.memberNameText {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 14px;
  color: #484a58;
}
.interestButton {
  height: 27px;
  width: auto;
  background: #edeaff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
}

.interestText {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 12px;
  color: #3d2e8c;
}
</style>
