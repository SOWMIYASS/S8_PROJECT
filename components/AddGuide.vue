<template>
    <v-dialog v-model="isGuideDialog" persistent width="1000">
      <div class="dialogue-wrapper">
        <div class="add-experience-title">
          <span>Add Guide</span>
          <img draggable="false" @click="close" src="../assets/close.svg" />
        </div>
        <div class="add-experience-form global-form">
          <div class="rows row-1">
            <div class="cols col-1">
              <div class="add-experience-form-label">Guide Name</div>
              <v-text-field hide-details outlined placeholder="Enter your Guide Name"></v-text-field>
            </div>
            <div class="cols col-2">
              <div class="add-experience-form-label">Guide Email</div>
              <v-text-field hide-details outlined placeholder="Enter your Email"></v-text-field>
            </div>
          </div>
          <div class="rows row-2">
            <div class="cols col-1">
              <div class="add-experience-form-label">Guide Mobile Number</div>
              <v-text-field hide-details outlined placeholder="Enter your Mobile Number"></v-text-field>
            </div>

          </div>
          <div class="rows row-3">
            <div class="cols col-1">
              <div class="add-experience-form-label">Type</div>
              <v-select outlined placeholder="Search Type"></v-select>
            </div>
            <div class="cols col-2">
              <div class="add-experience-form-label">Ratings</div>
              <v-rating
                background-color="orange lighten-3"
                color="orange"
                large
                ></v-rating>
            </div>
          </div>
          <div class="rows row-4">
            <div class="cols col-1">
              <div class="add-experience-form-label">Country</div>
              <v-select outlined placeholder="Search Country"></v-select>
            </div>
            <div class="cols col-2">
              <div class="add-experience-form-label">State / Provinces</div>
              <v-select outlined placeholder="Search State / Provinces"></v-select>
            </div>
          </div>
          <div class="rows row-4">
            <div class="cols col-1">
              <div class="add-experience-form-label">Tags</div>
              <v-select outlined placeholder="Search Tags"></v-select>
            </div>
          </div>
        </div>
        <div class="btn-container">
          <v-btn class="btn-tertiary" @click="close" >Cancel</v-btn>
          <v-btn class="btn-primary" @click="success">Add Guide</v-btn>
        </div>
      </div>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: ["isGuideDialog"],
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
  .dialogue-wrapper{
    background: white;
    border-radius: 8px;
  }
  
  .add-experience-title{
    display: flex;
    padding: 16px 24px;
    justify-content: space-between;
  }
  .add-experience-title span{
    font-family: "Poppins-Medium" ;
    font-size: 18px;
  }
  
  .add-experience-title img{
    cursor: pointer;
  }
  
  .add-experience-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px 24px;
    border-top: 1px solid #E8E8EB;
    border-bottom: 1px solid #E8E8EB
  
  }
  
  .add-experience-form-label {
    white-space: nowrap;
    color: #6F717E;
  }
  
  .rows {
    display: flex;
    column-gap: 32px;
    flex-wrap: wrap;
    align-items: center;
  }
  
  .cols {
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
  
  .btn-container {
    padding: 16px 24px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
  </style>
  