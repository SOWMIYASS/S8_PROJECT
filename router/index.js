import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: '/', 
    redirect: '/admin/dashboard' 
  },
  {
    path: "/admin",
    component: function () {
      return import("../Admin/Admin.vue");
    },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: function () {
          return import("../Admin/DashBoard.vue");
        },
      },
      {
        path: "userManagement",
        component: function () {
          return import("../Admin/UserManagement/UserManagementRoute.vue");
        },
        children: [
          {
            path: "",
            name: "UserManagement",
            component: function () {
              return import("../Admin/UserManagement/UserManagement.vue");
            },
          },
          {
            path:"userDetails",
            component:function() {
              return import("../Admin/UserManagement/UserDetails.vue");
            },
            children: [
              {
                path: "trips/:id",
                name: "Trips",
                component: function () {
                  return import("../Admin/UserManagement/Trips");
                },
    
              },
             
              {
                path: "hotelBookings/:id",
                name: "HotelBookings",
                component: function () {
                  return import("../Admin/UserManagement/HotelBookings.vue");
                },
              },
              {
                path: "itineraries/:id",
                name: "Itineraries",
                component: function () {
                  return import("../Admin/UserManagement/Itineraries.vue");
                },
              },
              {
                path: "familyDetails/:id",
                name: "FamilyDetails",
                component: function () {
                  return import("../Admin/UserManagement/FamilyDetails.vue");
                },
              },
            ]
          },
        ],
      },
      {
        path: "experienceManagement",
        component: function () {
          return import("../Admin/ExperienceManagement/ExperienceManagement");
        },
        children: [
          {
            path: "",
            name: "Experiences",
            component: function () {
              return import("../Admin/ExperienceManagement/Experiences");
            },
          },
          {
            path: "guides",
            name: "Guides",
            component: function () {
              return import("../Admin/ExperienceManagement/Guides");
            },

          },
          {
            path: "guidesdetails/:id",
            name: "GuidesDetails",
            component: function () {
              return import("../Admin/ExperienceManagement/GuidesDetails");
            },

          },
          {
            path: "gallery",
            name: "Gallery",
            component: function () {
              return import("../Admin/ExperienceManagement/Gallery");
            },
          },
        ]
      },
      {
        path: "itineraryManagement",
        component: function () {
          return import("../Admin/ItineraryManagement/ItineraryManagementRoute.vue");
        },
        children : [
          {
            path : "",
            name: "ItineraryManagement",
            meta : {
              allowItineraryAccess: true
            },
            component: function () {
              return import("../Admin/ItineraryManagement/ItineraryManagement.vue");
            },
          },
          {
            path : "itineraryBucketList",
            name: "ItineraryBucketList",
            meta: {
              restrictDirectItineraryAccess: true
            },
            component: function () {
              return import("../Admin/ItineraryManagement/ItineraryBucketList.vue");
            },
          },
          {
            path : "addExperience",
            name: "AddExperience",
            meta: {
              restrictDirectItineraryAccess: true
            },
            component: function () {
              return import("../Admin/ItineraryManagement/AddExperience.vue");
            },
          },
          {
            path : "itinerarySummary",
            name: "ItinerarySummary",
            meta: {
              restrictDirectItineraryAccess: true
            },
            component: function () {
              return import("../Admin/ItineraryManagement/ItinerarySummary.vue");
            },
          }
        ]
      },
      {
        path: "hotelManagement",
        component: function () {
          return import("../Admin/HotelManagement/HotelManagementRoute.vue");
        },
        children: [
          {
            path: "",
            name: "HotelManagement",
            component: function () {
              return import("../Admin/HotelManagement/HotelManagement.vue");
            },
          },
          {
            path: "hotelDetails/:id",
            name: "HotelDetails",
            component: function () {
              return import("../Admin/HotelManagement/HotelDetails.vue");
            },
          }
        ]
      },
      {
        path: "DMC",
        name: "DMC",
        component: function () {
          return import("../Admin/DMC.vue");
        },
      },
      {
        path: "financialManagement",
        name: "FinancialManagement",
        component: function () {
          return import("../Admin/FinancialManagement.vue");
        },
      },
      {
        path: "tagManagement",
        name: "TagManagement",
        component: function () {
          return import("../Admin/TagManagement.vue");
        },
      },
      {
        path: "systemSettings",
        name: "SystemSettings",
        component: function () {
          return import("../Admin/SystemSettings.vue");
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


// router.beforeEach((to, from, next)=>{

  // if (to.meta.restrictDirectItineraryAccess)

// })

export default router;
