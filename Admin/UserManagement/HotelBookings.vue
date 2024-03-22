<template>
  <div class="hotel-bookings-wrapper">
    <v-data-table
      :headers="headers"
      :items="bookings"
      :hide-default-footer="true"
      class="global-table fixed-header"
      disable-pagination
      fixed-header
    >
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
            text:"Booking Id",
            value:"bookingId",
            align:"center"
        },
        {
            text:"Hotel",
            value:"hotel",
        },
        {
            text:"Room Type",
            value:"roomType",
        },
        {
            text:"No.Of.Days",
            value:"noOfDays",
            align:"center"
        },
        {
            text:"Start Date",
            value:"startDate",
            align:"center"
        },
        {
            text:"End Date",
            value:"endDate",
            align:"center"
        },
        {
            text:"Members",
            value:"members",
            align:"center"
        },
        {
            text:"Location",
            value:"location",
        }
    ],
      bookings: [
        {
          bookingId: "#HB14253",
          hotel: "ITC Grand Chola",
          roomType: "Elite Room (x1)",
          noOfDays: 3,
          startDate: "25 May, 2023",
          endDate: "27 May, 2023",
          members: "",
          location: "Chennai, India",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14254",
          hotel: "Le Bristol Paris",
          roomType: "Suite Room (x2) ",
          noOfDays: 8,
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          members: "",
          location: "Paris, France",
        },
        {
          bookingId: "#HB14255",
          hotel: "The Luxury Collectiona",
          roomType: "Villa (x1) ",
          noOfDays: 6,
          startDate: "31 May, 2021",
          endDate: "05 Jun, 2021",
          members: "",
          location: "Athens, Italy",
        },
        {
          bookingId: "#HB14256",
          hotel: "Shahpura House",
          roomType: "Villa (x1) ",
          noOfDays: 8,
          startDate: "25 Dec, 2019",
          endDate: "02 Jan, 2020",
          members: "",
          location: "Jaipur, India",
        },
        {
          bookingId: "#HB14257",
          hotel: "Firefly Collection",
          roomType: "Home Stay (x1) ",
          noOfDays: 8,
          startDate: "25 Dec, 2018",
          endDate: "02 Jan, 2019",
          members: "",
          location: "London",
        },
      ],
    };
  },
};
</script>

<style scoped>

.hotel-bookings-wrapper {
  overflow: auto;
}
</style>
