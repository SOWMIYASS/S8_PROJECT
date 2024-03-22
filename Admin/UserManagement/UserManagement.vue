<template>
  <div class="wrapper">
    <AddUser
      :isUserDialog="addUserDialog"
      @close="dialogClose"
      @success="dialogSuccess"
      @newUser=true
    />
    <div class="user-management-container">
      <div class="user-management-header">
        <div>User Management</div>
        <v-btn @click="addUserDialog = true" class="btn-primary"
          ><v-icon>mdi-plus</v-icon> Add User</v-btn
        >
      </div>
      <div class="user-management-table-wrapper">
        <v-data-table
          :headers="userManagementHeader"
          :items="userManagementItems"
          class="global-table fixed-header"
          :hide-default-footer="true"
          item-key="id"
          fixed-header
          disable-pagination
        >
          <template v-slot:body.prepend>
            <tr class="user-management-search-input-tr global-form">
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
                  v-model="searchByMobile"
                  color="#6F717E"
                  append-icon="mdi-magnify"
                ></v-text-field>
              </td>
              <td>
                <v-select
                  placeholder="Select Status"
                  outlined
                  hide-details
                  :items="['family', 'solo']"
                  :dense="true"
                  v-model="searchByMaritalStatus"
                ></v-select>
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
              <td></td>
              <td></td>
              <td>
                <DatePicker
                  @change="(val) => (searchByLastTrip = val)"
                  :dense="true"
                />
              </td>
            </tr>
          </template>
          <template v-slot:item.id="{ item }">
            <router-link :to="{ name: 'Trips', params: { id: item.id } }">{{
              item.id
            }}</router-link>
          </template>
          <template v-slot:item.name="{ item }">
            <div class="user-management-name-container">
              <span class="user-circle-img"
                ><img src="../../assets/avatar.jpeg"
              /></span>
              <span>{{ item.name }}</span>
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../../components/NavBar";
import AddUser from "../../components/AddUser";
import DatePicker from "../../components/DatePicker";
export default {
  name: "UserManagement",
  components: { NavBar, AddUser, DatePicker },
  snackbar: false,
  data() {
    return {
      addUserDialog: false,
      searchById: "",
      searchByName: "",
      searchByMobile: "",
      searchByMaritalStatus: "",
      searchByLocation: "",
      searchByLastTrip: "",
      userManagementItems: [
        {
          userID:"#PR14253",
          name:"Venkat Prabhu",
          mobileNumber:"+91 8888899999",
          maritalStatus:"Single",
          country:"Marne Valley, France",
          trips:"8",
          bookings:"4",
          lastTrip:"Coimbatore, 20 May, 2023",
        },
        {
          userID:"#PR142869",
          name:"Jeevan Raj",
          mobileNumber:"+91 882678299",
          maritalStatus:"Family",
          country:"Marne Valley, France",
          trips:"9",
          bookings:"7",
          lastTrip:"Coimbatore, 20 May, 2023",
        },
        {
          userID:"#PR14253",
          name:"Venkat Prabhu",
          mobileNumber:"+91 9968899999",
          maritalStatus:"Couple",
          country:"Marne Valley, France",
          trips:"4",
          bookings:"4",
          lastTrip:"Coimbatore, 20 May, 2023",
        },
        {
          userID:"#PR14253",
          name:"Robert Pattison",
          mobileNumber:"+91 6488899999",
          maritalStatus:"Single",
          country:"Marne Valley, France",
          trips:"11",
          bookings:"2",
          lastTrip:"Coimbatore, 20 May, 2023",
        },
        {
          userID:"#PR14253",
          name:"Venkat Prabhu",
          mobileNumber:"+91 8888899999",
          maritalStatus:"Single",
          country:"Marne Valley, France",
          trips:"8",
          bookings:"4",
          lastTrip:"Coimbatore, 20 May, 2023",
        },
        {
          userID:"#PR142869",
          name:"Jeevan Raj",
          mobileNumber:"+91 882678299",
          maritalStatus:"Family",
          country:"Marne Valley, France",
          trips:"8",
          bookings:"4",
          lastTrip:"Coimbatore, 20 May, 2023",
        },
        {
          userID:"#PR14253",
          name:"Venkat Prabhu",
          mobileNumber:"+91 9968899999",
          maritalStatus:"Couple",
          country:"Marne Valley, France",
          trips:"8",
          bookings:"4",
          lastTrip:"Coimbatore, 20 May, 2023",
        },
        {
          userID:"#PR14253",
          name:"Robert Pattison",
          mobileNumber:"+91 6488899999",
          maritalStatus:"Single",
          country:"Marne Valley, France",
          trips:"8",
          bookings:"4",
          lastTrip:"Coimbatore, 20 May, 2023",
        }
      ],
    };
  },
  computed: {
    userManagementHeader() {
      return [
        {
          text: "ID",
          value: "userID",
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
              .includes(this.searchByMobile.toLowerCase());
          },
        },
        {
          text: "Marital Status",
          value: "maritalStatus",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByMaritalStatus.toLowerCase());
          },
        },
        {
          text: "Location",
          value: "country",
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
        },
        {
          text: "Bookings",
          value: "bookings",
          align: "center",
        },
        {
          text: "Last Trip",
          value: "lastTrip",
          align: "center",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByLastTrip.toLowerCase());
          },
        },
      ];
    },
  },
  mounted(){
    this.fetchUserManagementItems();
  },
  methods: {
    fetchUserManagementItems() {  
    let apiURL = process.env.VUE_APP_BACKEND_URL + "/v1/api/users";
    console.log(apiURL);
    axios.get(apiURL)
      .then((listOfUsersResponse) => {
        console.log('listOfUsersResponse', listOfUsersResponse.data);
        this.userManagementItems = listOfUsersResponse.data.users;
      })
      .catch(error => {
        console.log(error);
      });
  },
    dialogSuccess() {
      console.log("User added");
      this.$store.dispatch("showSnackbar", {
        title: "User Created",
        message: "New user created successfully to the list ",
      });

      this.addUserDialog = false;
      this.fetchUserManagementItems();
    },
    dialogClose() {
      console.log("closed");
      this.addUserDialog = false;
    },
  },
};
</script>

<style scoped>
.wrapper {
  flex: 1;
  overflow: auto;
  padding: 2em;
}

.user-management-container {
  background: white;
  border-radius: 8px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.user-management-header {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 1.5em 1.5em 0;
}
.user-management-header div {
  font-size: 1.25em;
  font-family: "Poppins-SemiBold";
}

.user-management-table-wrapper {
  flex: 1;
  margin-top: 2em;
  padding: 0 1.5em 1.5em;
  overflow: hidden;
}

.user-management-search-input-tr {
  background: #f9f9fe !important;
}

.user-management-search-input-tr .v-text-field {
  background: white;
}

.user-management-name-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.user-management-name-container .user-circle-img {
  width: 2.6rem;
  aspect-ratio: 1;
}
.user-management-name-container .user-circle-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
