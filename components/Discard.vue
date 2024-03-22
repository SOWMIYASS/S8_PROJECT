<template>
    <v-dialog v-model="isDiscardDialog" persistent width="500">
      <div class="dialogue-wrapper">
        <div class="discard-header">
          <img  src="../assets/discard-trashbin.svg" />
        </div>
        <div class="discard-content global-form">
            <div class="discard-text">Are you sure you want to discard this itinerary?</div>
            <div class="btn-container">
          <div class="discard-cancel" @click="close">Cancel</div>
          <router-link :to="{name : 'ItineraryManagement'}" class="btn-discard">Yes, Discard</router-link>
        </div>
          
        </div>
       
      </div>
    </v-dialog>
  
  </template>
  <script>
  
  
  export default {
    name : "Discard",
    props: ["isDiscardDialog"],

    methods: {
      close() {
        this.$emit("close");
      },
      success() {
        this.$emit("success");
      },    
    },
  };
  </script>
  
  <style scoped>
  .dialogue-wrapper {
    background-color: #FFFFFF;
    border-radius: 8px;
  }
  
  .discard-header {
    background-color: #EB5757; 
    padding: 32px;
    border-top-left-radius: 8px;
    display: flex;
    justify-content: space-around;
  }
  .discard-content {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    gap: 24px;
    padding: 38px 50px;
    border-top: 1px solid #e8e8eb;
    border-bottom: 1px solid #e8e8eb;
  }
  
  .discard-text{
    text-align: center;
    font-size: 20px;
  }
  .btn-container {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
  
  .discard-cancel{
    background-color: white !important;
    color : #EB5757;
    border: 1px solid #EB5757;
    padding: 8px 28px;
    border-radius: 4px;
    text-transform: capitalize;
    cursor: pointer;
  }
  .btn-discard{
      background-color: #EB5757 !important;
      color: white;
      font-weight: 600;
      padding: 8px 28px;
      border-radius: 4px;
      text-transform: capitalize;
      cursor: pointer;
      text-decoration: none;
  }

  </style>
  