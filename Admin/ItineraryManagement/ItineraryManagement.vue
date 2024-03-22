<template>
  <div class="itinerary-wrapper">
    <CreateItinerary
      :isItineraryDialog="createItineraryDialog"
      @close="dialogClose1"
      @success="dialogSuccess1"
      :newItinerary="true"
    />
    <OpenItinerary
      :isOpenDialog="openItineraryDialog"
      @close="dialogClose2"
      @success="dialogSuccess2"
      :title="selectedTitle"
      :dayItinerary="selectedDay"
    />
    <div class="itinerary-container">
      <div class="itinerary-management-header">Itinerary Library</div>

      <div class="itinerary-search-rows global-form">
        <div class="cols col-1">
          <v-autocomplete :items="tagItems" hide-selected hide-details placeholder="Search Tags" multiple outlined dense
            append-icon="mdi-magnify">
            <template v-slot:selection="{ attrs, item, parent, selected }">
              <v-chip v-if="item === Object(item)" v-bind="attrs" :input-value="selected" label small color="#EDEAFF">
                <span>
                  {{ item.text }}
                </span>
                <v-icon color="red" class="tag-close-btn" @click="parent.selectItem(item)">
                  mdi mdi-close
                </v-icon>
              </v-chip>
            </template>
          </v-autocomplete>
        </div>
        <div class="cols col-2">
          <v-autocomplete :items="countries" v-model="selectedCountry" hide-details outlined dense @change="getListOfItineraries"
            placeholder="Search Country"></v-autocomplete>
        </div>
        <div class="cols col-3">
          <v-autocomplete hide-details v-model="selectedTimeline" :items="timelineDays" outlined dense @change="getListOfItineraries"
            placeholder="Choose Timeline" hide-selected spellcheck="false"></v-autocomplete>
        </div>
      </div>

      <div class="itinerary-wrapper-container">
        <div @click="createItineraryDialog = true" class="create-itinerary-card">
          <div class="create-itinerary-icon">
            <img src="../../assets/plus-circled.svg" />
          </div>
          <div class="create-itinerary-title">
            Create New Itinerary
          </div>
        </div>

        <div class="itinerary-card" v-for="(itinerary, itineraryInd) in itineraryList">
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
            <div class="itinerary-row-4-btn" @click="openItinerary(itinerary.title, itinerary.dayContainer)">
              Open
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../../components/NavBar";
import OpenItinerary from "../../components/OpenItinerary.vue";
import CreateItinerary from "../../components/CreateItinerary";

export default {
  name: "ItineraryManagement",
  components: { NavBar, CreateItinerary, OpenItinerary },
  data() {
    return {
      createItineraryDialog: false,
      openItineraryDialog: false,
      tagItems: [
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
        }
      ],
      timelineDays: ['1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days', '8 days', '9 days', '10 days'],
      countries: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo (Congo-Kinshasa)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],
      selectedCountry: '',
      selectedTimeline: '',
      itineraryList: [],
      selectedTitle:"",
      selectedDay:[],
    };
  },
  mounted() {
    this.getListOfItineraries();
  },
  methods: {
    openItinerary(title, dayContainer) {
      this.selectedTitle = title;
      this.selectedDay = dayContainer;
      this.openItineraryDialog = true;
    },
    getListOfItineraries() {
      let apiURL = process.env.VUE_APP_BACKEND_URL + "/v1/api/itinerary";
      let filters = [];
      if (this.selectedCountry) {
        filters.push(`country=${this.selectedCountry}`);
      }
      if (this.selectedTimeline) {
        filters.push(`days=${parseInt(this.selectedTimeline.split(' '[0]))}`)
      }
      if (filters.length > 0) {
        apiURL += '?'+filters.join('&');
      }
      axios.get(apiURL)
        .then((listOfItinerariesResponse) => {
          console.log('listOfItinerariesResponse',listOfItinerariesResponse.data)
          this.itineraryList = listOfItinerariesResponse.data.itineraries.map((itinerary) => {
            let prepareDayContainer = [];
            for (let i = 0; i < itinerary.Experiences.length; i++) {
              let day = `Day ${i + 1}`;
              prepareDayContainer.push({ day: day, bucketList1: itinerary.Experiences[i] })
            }
            return {
              title: itinerary.tripName,
              tagList: ["Sports", "Music"],
              days: itinerary.numberOfDays,
              dayContainer: prepareDayContainer
            }
          })

          console.log("Test Logging",this.itineraryList);
        })
        .catch((listOfItinerariesError) => {
          console.log('listOfItinerariesError', listOfItinerariesError)
        })
    },
    dialogSuccess1() {
      console.log("Itinerary Created");
      this.createItineraryDialog = false;
    },
    dialogClose1() {
      console.log("closed");
      this.createItineraryDialog = false;
    },
    dialogSuccess2() {
      console.log("Itinerary Created");
      this.openItineraryDialog = false;
    },
    dialogClose2() {
      console.log("closed");
      this.openItineraryDialog = false;
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.itinerary-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  overflow: auto;
}

.itinerary-container {
  height: 100%;
  background-color: white;
  border-radius: .5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;

}

.itinerary-management-header {
  border-bottom: 1px solid #e8e8eb;
  font-family: "Poppins-SemiBold";
  font-size: 1.25rem;
  padding: 0.6em 1.2em .8em;
}

.itinerary-search-rows {
  display: flex;
  gap: 8px;
  padding: 1.5em 1.5em 1em;
}

.tag-close-btn {
  font-size: 10px;
  color: red;
}

.itinerary-wrapper-container {
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22em, 1fr));
  gap: 1.25em;
  padding: 1em 1.5em;
}

.create-itinerary-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #edeaff;
  border: 0.125em dashed #cec6fb;
  border-radius: .5em;
  padding: 2.5em 1.25em;
  gap: 1em;
}

.create-itinerary-title {
  font-size: 1.125rem;
  font-family: 'poppins-semibold';
}

.create-itinerary-icon img {
  width: 2.8em;
}

.itinerary-card {
  border: 1px solid #e8e8eb;
  border-radius: .5em;
  padding: 1em 1.5em;
  display: flex;
  flex-direction: column;
  row-gap: 1.25em;

}

.itinerary-card .itinerary-card-title {
  font-family: "poppins-semibold";
}

.itinerary-card .itinerary-tags-container {
  display: flex;
  gap: .5em;
  align-items: center;
}

.itinerary-card .itinerary-card-more-tags {
  font-size: .875rem;
  text-decoration: underline;
  color: #3d2e8c;
}

.itinerary-card .itinerary-card-row-3 {
  display: flex;
  color: #6f717e;
  justify-content: space-between;
  padding-bottom: 1em;
  border-bottom: 1px solid #e8e8eb;
}

.itinerary-card-row-3>div {
  display: flex;
  align-items: center;
  gap: .5em;
}

.itinerary-card-row-3 .itinerary-row-3-days span {
  font-size: 0.8rem;
}

.itinerary-card-row-3 .itinerary-row-3-days img {
  width: 1em;
}

.itinerary-card-row-3 .itinerary-row-3-icons img {
  width: 1.3em;
}

.itinerary-card-row-4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.itinerary-row-4-btn {
  color: #5444ab;
  font-size: .875em;
  cursor: pointer;
}
</style>
