<template>
  <div class="nav-bar-wrapper">
    <div class="nav-bar-top">
      <div class="nav-bar-top-left">
        <img src="../assets/pulse-logo.svg" />
        <span>Pulse</span>
      </div>
      <div class="nav-bar-top-right">
        <div class="nav-top-search-field">
          <input spellcheck="false" placeholder="Search" type="text" />
          <v-icon>mdi mdi-magnify</v-icon>
        </div>
        <span class="nav-bar-notification"
          ><img src="../assets/notification.svg"
        /></span>
        <div class="nav-bar-user-container">
          <span class="image-avatar-border"
            ><img src="../assets/avatar.jpeg"
          /></span>
          <span class="username">Jeevan Raj</span>
          <span class="dropdown-icon"
            ><img src="../assets/dropdown.svg"
          /></span>
        </div>
      </div>
    </div>
    <div class="nav-items">
      <span class="nav-item"><img src="../assets/menu_nav.svg" /></span>
      <router-link :to="{ name: 'Dashboard' }" class="nav-item">
        <DashboardIcon /> Dashboard</router-link
      >
      <router-link :to="{ name: 'UserManagement' }" class="nav-item">
        <UserManagementIcon /> User Management</router-link
      >
      <router-link :to="{ name: 'Experiences' }" class="nav-item">
        <ExperienceManagementIcon /> Experience Management</router-link
      >
      <router-link :to="{ name: 'ItineraryManagement' }" class="nav-item">
        <ItineraryManagementIcon /> Itinerary Management</router-link
      >
      <router-link :to="{ name: 'HotelManagement' }" class="nav-item">
        <HotelManagementIcon /> Hotel Management</router-link
      >
      <router-link :to="{ name: 'DMC' }" class="nav-item">
        <DMCIcon /> DMC</router-link
      >
      <router-link :to="{ name: 'FinancialManagement' }" class="nav-item">
        <FinalcialManagementIcon /> Financial Management</router-link
      >
      <router-link :to="{ name: 'TagManagement' }" class="nav-item">
        <TagManagementIcon /> Tag Management</router-link
      >
      <router-link :to="{ name: 'SystemSettings' }" class="nav-item">
        <SettingManagementIcon /> System Settings</router-link
      >
    </div>
  </div>
</template>

<script>
import DashboardIcon from "../assets/nav_icons/Dashboard_NavIcon";
import UserManagementIcon from "../assets/nav_icons/User_Management_NavIcon";
import ExperienceManagementIcon from "../assets/nav_icons/Experience_Management_NavIcon";
import ItineraryManagementIcon from "../assets/nav_icons/Itinerary_Management_NavIcon";
import HotelManagementIcon from "../assets/nav_icons/Hotel_Management_NavIcon";
import DMCIcon from "../assets/nav_icons/DMC_NavIcon";
import FinalcialManagementIcon from "../assets/nav_icons/Financial_Management_NavIcon";
import TagManagementIcon from "../assets/nav_icons/Tag_Management_NavIcon";
import SettingManagementIcon from "../assets/nav_icons/Settings_Management_NavIcon";

export default {
  components: {
    DashboardIcon,
    UserManagementIcon,
    ExperienceManagementIcon,
    ItineraryManagementIcon,
    HotelManagementIcon,
    DMCIcon,
    FinalcialManagementIcon,
    TagManagementIcon,
    SettingManagementIcon,
  },
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar-wrapper {
  user-select: none;
  position: sticky;
  top: 0;
  box-shadow: 0 0 20px -7px rgb(81, 81, 81);
  z-index: 10;
}

.nav-bar-wrapper .nav-bar-top {
  background-color: var(--nav-bar-dark);
  padding: 0.8em 3em;
  display: flex;
  color: white;
  gap: 3em;
}
.nav-bar-wrapper .nav-bar-top .nav-bar-top-left {
  display: flex;
  align-items: center;
  gap: 1em;
}
.nav-bar-wrapper .nav-bar-top .nav-bar-top-left img {
  width: 2.5em;
}
.nav-bar-wrapper .nav-bar-top .nav-bar-top-left span {
  color: #ffffff;
  font-size: 1.6rem;
}

.nav-bar-wrapper .nav-bar-top-left span,
.nav-bar-wrapper .nav-bar-top-right span {
  font-family: "Poppins-SemiBold";
}
.nav-bar-top-right {
  display: flex;
  align-items: center;
  gap: 2em;
  flex: 1;
  justify-content: flex-end;
}

.nav-bar-top-right .nav-bar-notification img {
  width: 1.2em;
  vertical-align: middle;
}

.nav-top-search-field {
  width: min(30rem, 90%);
  color: #e8e8eb !important;
  border: 1px solid #3f2529;
  background: #230f13;
  align-self: stretch;
  padding: 0 1em;
  border-radius: 4px;
}

.nav-top-search-field input {
  display: block;
  width: 100%;
  outline: none;
  border: none;
  color: #e8e8eb;
  font-size: 0.85rem;
}
.nav-top-search-field i {
  font-size: 1.5rem;
}
.nav-top-search-field input::placeholder {
  color: #e8e8eb;
}

.nav-top-search-field i {
  color: #e8e8eb;
}

.nav-bar-top-right .image-avatar-border {
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.125em;
}

.nav-bar-user-container .username {
  font-size: 1rem;
}
.nav-bar-user-container .dropdown-icon {
  display: flex;
  align-items: center;
}
.nav-bar-user-container .dropdown-icon img {
  width: 0.875em;
}

.nav-bar-top-right .image-avatar-border img {
  width: 2em;
  border-radius: 50%;
}
.nav-bar-top-right div {
  display: flex;
  align-items: center;
  gap: 0.5em;
  white-space: nowrap;
}

.nav-items {
  display: flex;
  align-items: stretch;
  width: 100%;
  overflow: auto;
}
.nav-items::-webkit-scrollbar {
  display: none;
}
.nav-items .nav-item {
  font-size: 0.87rem;
  font-family: "Poppins-Medium";
  white-space: nowrap;
  padding: 1em 0.5em;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #bfc0c8;
  border-bottom: 1px solid #bfc0c8;
  gap: 0.5em;
  text-decoration: none;
  color: #484a58;
  position: relative;
  flex: 1;
}

.nav-items .nav-item:last-child {
  border-right: none;
}
.nav-items span.nav-item {
  flex: 0;
  min-width: 5em;
}

.nav-items .nav-item svg {
  width: 1.2em;
}

.nav-items .nav-item:not(.router-link-active):hover {
  background-color: rgb(232, 232, 232);
}

.nav-item.router-link-active {
  color: #d22645;
  background: #fbe9ec;
}
.nav-item.router-link-active svg >>> path {
  fill: #d22645 ;
}
.nav-item.router-link-active::before {
  position: absolute;
  content: "";
  background: #d22645;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.2em;
}
</style>
