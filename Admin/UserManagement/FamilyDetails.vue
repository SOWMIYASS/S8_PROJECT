<template>
  <div class="family-details-wrapper">
    <AddMembers
      :isMemberDialog="addMemberDialog"
      @close="dialogClose"
      @success="dialogSuccess"
      @newMember=true
      
    />
    <v-data-table
      :headers="headers"
      :items="familyDetails"
      :hide-default-footer="true"
      class="global-table"
      disable-pagination
    >
    <template v-slot:item.interests="{item}">
      <div class="interest-container">
        <span v-for="interest in item.interests" class="tag">{{interest}}</span>
      </div>
    </template>
    </v-data-table>
  <div class="family-footer">
    <v-btn @click="addMemberDialog = true" class="btn-primary">
      <img src="../../assets/user-add-fill.svg"> Add Members</v-btn>
  </div>
</div>
</template>

<script>
import AddMembers from '@/components/AddMembers.vue';
import DatePicker from "../../components/DatePicker";
export default {
  components: { AddMembers, DatePicker },
  
  snackbar: false,
  data() {
    return {
      addMemberDialog : false,
      headers: [
        {
          text: "User Id",
          value: "userId",
          align: "center",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Relation",
          value: "relation",
          align: "center",
        },
        {
          text: "Age",
          value: "age",
          align: "center",
        },
        {
          text: "Date of Birth",
          value: "dateOfBirth",
          align: "center",
        },
        {
          text: "Trip",
          value: "trip",
          align: "center",
        },
        {
          text: "Interest",
          value: "interests",
        },
      ],
      familyDetails: [
        {
          userId: "#US0235",
          name: "Bella Hein",
          relation: "Wife",
          age: 40,
          dateOfBirth: "15 May, 1983",
          trip: 3,
          interests: ["Music","Museum","Adventure","Hiking","Travelling","Winemaking","Baking"],
        },
        {
          userId: "#US0420",
          name: "Jr. Peter Hein",
          relation: "Son",
          age: 26,
          dateOfBirth: "05 Jun, 1997",
          trip: 2,
          interests: ["Music","Museum","Adventure","Hiking","Travelling","Winemaking","Baking"],
        },
        {
          userId: "#US0259",
          name: "Mathew Hein",
          relation: "Son",
          age: 20,
          dateOfBirth: "24 Dec, 2003",
          trip: 2,
          interests: ["Music","Museum","Adventure","Hiking","Travelling","Winemaking","Baking"],
        },
        {
          userId: "#US0290",
          name: "Katy Hein",
          relation: "Daughter",
          age: 18,
          dateOfBirth: "31 Jan, 2005",
          trip: 3,
          interests: ["Music","Museum","Adventure","Hiking","Travelling","Winemaking","Baking"],
        },
      ],
      familyDetails:[]
    };
  },
  mounted(){
    this.fetchfamilyDetails();
  },
  methods : {
    fetchfamilyDetails() {  
    let apiURL = process.env.VUE_APP_BACKEND_URL + "/v1/api/users";
    console.log(apiURL);
    axios.get(apiURL)
      .then((listOfUsersResponse) => {
        console.log('listOfUsersResponse', listOfUsersResponse.data);
        this.familyDetails = listOfUsersResponse.data.users;
      })
      .catch(error => {
        console.log(error);
      });
  },
    dialogSuccess() {
      console.log("Member added");
      this.$store.dispatch("showSnackbar", {
        title: "Member Created",
        message: "New Member Added successfully to the list ",
      });

      this.addMemberDialog = false;
      this.fetchfamilyDetails();
    },
    dialogClose() {
      console.log("closed");
      this.addMemberDialog = false;
    },
  }
};
</script>

<style scoped>

.interest-container{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.family-footer{
  margin-top: 40px;
}

</style>
