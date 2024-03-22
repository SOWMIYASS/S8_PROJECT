<template>
  <div class="hotel-management-wrapper">
    <div class="hotel-management-container">
      <div class="hotel-management-header">
        <div>Hotel Management</div>
        <v-btn class="btn-primary"
          ><v-icon>mdi-plus</v-icon>New Hotel</v-btn
        >
      </div>
      <div class="hotel-management-table-wrapper">
        <v-data-table
          :headers="hotelManagementHeader"
          :items="hotelManagementItems"
          class="global-table fixed-header"
          :hide-default-footer="true"
          item-key="id"
          fixed-header
          disable-pagination
        >
          <template v-slot:body.prepend>
            <tr class="hotel-management-search-input-tr global-form">
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
              <td></td>
            </tr>
          </template>
          <template v-slot:item.id="{ item }">
            <router-link
              :to="{ name: 'HotelDetails', params: { id: item.id } }"
              >{{ item.id }}</router-link
            >
          </template>
          <template v-slot:item.name="{ item }">
            <div class="hotel-name-container">
              <span class="hotel-square-img"
                ><img src="../../assets/hotel.jpeg"
              /></span>
              <span>{{ item.name }}</span>
            </div>
          </template>
          <template v-slot:item.ratings="{ item }">
            <div class="rating-container">
              <span><img src="../../assets/star.svg" /></span
              ><span>{{ item.ratings }}</span>
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelManagement",
  data() {
    return {
      hotelManagementItems: [
        {
          id: "#HO14253",
          name: "Marriom Cancum Resort",
          contact: "+91 9876543210",
          location: "Goa, India",
          bookings: "5",
          ratings: "4",
          lastBooked: "Coimbatore, 20 May, 2023",
        },
        {
          id: "#HO14253",
          name: "Champagne: home of Dom Pérignon",
          contact: "+91 8974652501",
          location: "Madurai, India",
          bookings: "10",
          ratings: "5",
          lastBooked: "Madurai, 26 Jan, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+91 8974652501",
          location: "Mumbai, India",
          bookings: "5",
          ratings: "3",
          lastBooked: "Mumbai, 12 Apr, 2023",
        },
        {
          id: "#HO14253",
          name: "Corsica: the island of beauty",
          contact: "+91 8588062061",
          location: "Pune, India",
          bookings: "6",
          ratings: "2",
          lastBooked: "Pune, 05 Mar, 2021",
        },
        {
          id: "#HO14253",
          name: "Champagne: home of Dom Pérignon",
          contact: "+1 584598562201",
          location: "Los Angelos, USA",
          bookings: "2",
          ratings: "3",
          lastBooked: "Los Angelos, 02 Feb, 2020",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
        {
          id: "#HO14253",
          name: "Auvergne: the land that time forgot",
          contact: "+1 98765432102",
          location: "California, USA",
          bookings: "4",
          ratings: "2",
          lastBooked: "California, 26 Aug, 2022",
        },
      ],
      searchById: "",
      searchByName: "",
      searchByMobile: "",
      searchByLocation: "",
    };
  },
  computed: {
    hotelManagementHeader() {
      return [
        {
          text: "Hotel ID",
          value: "id",
          align: "center",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchById.toLowerCase());
          },
        },
        {
          text: "Hotel Name",
          value: "name",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByName.toLowerCase());
          },
        },
        {
          text: "Contact Number",
          value: "contact",
          filter: (val) => {
            return (val + "")
              .toLowerCase()
              .includes(this.searchByMobile.toLowerCase());
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
          text: "No. Of Bookings",
          value: "bookings",
          align: "center",
        },
        {
          text: "Ratings",
          value: "ratings",
          align: "center",
        },
        {
          text: "Last Booked",
          value: "lastBooked",
        },
      ];
    },
  },
  methods: {
   
  },
};
</script>

<style scoped>
.hotel-management-wrapper {
  flex: 1;
  padding: 2em;
  overflow: hidden;

}

.hotel-management-container {
  background: white;
  padding: 1.5em;
  border-radius: .5em;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.hotel-management-header {
  display: flex;
  justify-content: space-between;
}
.hotel-management-header div {
  font-size: 1.25rem;
  font-family: "Poppins-SemiBold";
}

.hotel-management-table-wrapper {
  margin-top: 2em;
  flex: 1;
  overflow: auto;
}

.hotel-management-search-input-tr {
  background: #f9f9fe !important;
}

.rating-container {
  display: flex;
  justify-content: center;
  gap: 0.25em;
  align-items: center;
}

.rating-container span {
  display: flex;
  align-items: center;
}
.rating-container span img {
  width: 1.15em;
}

.hotel-name-container {
  display: flex;
  align-items: center;
  gap: 0.6em;
}
.hotel-name-container span {
  font-family: "Poppins-Medium";
}

.hotel-name-container .hotel-square-img {
  width: 3em;
  aspect-ratio: 1;
}
.hotel-name-container .hotel-square-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25em;
}
</style>
