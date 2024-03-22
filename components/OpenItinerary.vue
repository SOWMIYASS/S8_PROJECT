<template>
	<v-dialog v-model="isOpenDialog" persistent max-width="1339">
		<div class="dialogue-wrapper">
			<div class="header-top">
				<div class="itinerary-title">
					<span>{{ title }}</span>
					<img draggable="false" @click="closePopUp" src="../assets/close.svg" />
				</div>
				<div class="tags-wrapper">
					<div class="itinerary-tags">
						<span class="tag" v-for="item in tagItems">{{ item }}</span>
					</div>
				</div>
			</div>
			<div class="scrollable-content">
				<div class="top">
					<div class="itinerary-form global-form">
						<div class="itinerary-selection" v-for="(days, dayInd) in dayItinerary" :key="dayInd">
							<div class="itinerary-selection-content">
								<div class="user-details-header">
									<div>
										<div>
											<v-checkbox class="bucketlist-card-title" :label="days.day"
												color="#6E5DC6" v-model="dayCheck[dayInd]" @change="selectAll(dayCheck[dayInd], dayInd)"></v-checkbox>
										</div>
									</div>
								</div>
								<div class="user-details-profile-wrapper" :key="135 + refreshKey">
									<div class="bucketlist-wrapper">
										<div v-for="(Bucket, bucketIndex) in days.bucketList1" :key="bucketIndex + 35 + refreshKey">
											<div class="bucketlist-card">
												<div class="bucketlist-card-row">
													<div class="bucketlist-card-title">
														<v-checkbox :label="Bucket.Experience"
															color="#6E5DC6" v-model="Bucket.selectedExperiences" :key="bucketIndex + 45 + refreshKey"></v-checkbox>
													</div>
												</div>
												<div class="bucketlist-card-row">
													<div class="bucketlist-card-row-2">
														<img src="../assets/star.svg" />
														<span>{{ Bucket.rating }} </span>
													</div>
													<div class="bucketlist-card-row-2">
														<img src="../assets/map-pin-fill.svg" />
														<span>{{ Bucket.location }} </span>
													</div>
													<div class="bucketlist-card-row-2">
														<img src="../assets/clock-time-fill.svg" />
														<span>{{ Bucket.openingTime }} - {{ Bucket.closingTime }} </span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="container-space"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="btn-container"><v-btn class="btn-primary" @click="addToBucketList">Add to bucketlist</v-btn>
			</div>
		</div>
	</v-dialog>
</template>

<script>
export default {
	props: ["isOpenDialog", "title", "dayItinerary"],

	data() {
		return {
			selectedDays: [],
			selectedItemsMap: {},
			selectedExperiences: [],
			tagItems: ["test", "trip"],
			dayCheck: [],
			refreshKey: 1
		};
	},

	methods: {
		selectAll(selectedExperiences, dayInd) {
            this.$props.dayItinerary[dayInd].bucketList1.map(value => {
                this.refreshKey += 1
                value.selectedExperiences = selectedExperiences
            })
            console.log('selectedExperiences', selectedExperiences, this.$props.dayItinerary[dayInd]);
        },
		addBoolean() {
            this.$props.dayItinerary.map(tal => {
                this.dayCheck.push(false)
                tal.bucketList1.map(value => {
                    value.selectedExperiences = false
                })
            })
        },
		closePopUp() {
			this.$emit("close");
		},
		addToBucketList() {
			let experiences = JSON.parse(localStorage.getItem('bucketList'));
			console.log("previous", experiences);
			let expList = []
            this.$props.dayItinerary.map(tal => {
                tal.bucketList1.map(value => {
                    if(value.selectedExperiences) {
                        expList.push(value)
                    }
                })
            })
            this.selectedExperiences = expList
			if (!experiences || experiences?.length == 0) {
				localStorage.setItem('bucketList', JSON.stringify(this.selectedExperiences));
			} else {
				console.log(this.selectedExperiences);
				this.selectedExperiences.push(...experiences)
				console.log(this.selectedExperiences);
				localStorage.setItem('bucketList', JSON.stringify(this.selectedExperiences))
			}
			if (this.$route.name !== 'ItineraryBucketList') {
				this.$router.push({ name: "ItineraryBucketList" })
			}
			this.$emit("close");

		},
		success() {
			this.$emit("success");
		},
	},
	mounted() {
		this.addBoolean()
	}
};
</script>

<style scoped>
::-webkit-scrollbar {
	display: none;
}

.header-top {
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 1;
}

.tags-wrapper {
	max-width: 100%;
	overflow-x: auto;
	padding: 0px 0px 14px;
	margin: 0 24px;
}

.top {
	display: flex;
	/* flex: 1; */
	/* flex-direction: row; */
	overflow-x: auto;
}

.dialogue-wrapper {
	background: white;
	border-radius: 8px;
}

.itinerary-title {
	display: flex;
	padding: 16px 24px;
	justify-content: space-between;
}

.itinerary-title span {
	font-family: "Poppins-Medium";
	font-size: 18px;
}

.itinerary-title img {
	cursor: pointer;
}

.itinerary-tags {
	display: flex;
	background-color: white;
	gap: 8px;
	white-space: nowrap;
}

.itinerary-selection {
	display: flex;
	flex-direction: row;
	gap: 20px;
}

.scrollable-content {
	max-height: calc(100vh - 128px);
	overflow-y: auto;
	background-color: #e8e8eb;
	padding: 0 24px;
	display: flex;
	flex-direction: column;
}

.itinerary-selection-content {
	border-radius: 8px;
	width: 450px;
	display: flex;
	flex-direction: column;
	row-gap: 21px;
	justify-content: space-around;
	background-color: white;
}

.itinerary-selection-content .header {
	border-bottom: 1px solid #e8e8eb;
}

.itinerary-form {
	display: flex;
	flex: 1;
	gap: 24px;
	padding: 16px 24px;
	background-color: #e8e8eb;
}

.itinerary-form-label {
	white-space: nowrap;
	color: #6f717e;
}

.btn-container {
	padding: 16px 24px;
	display: flex;
	justify-content: flex-end;
	gap: 8px;
	position: sticky;
	bottom: 0;
	background-color: white;
}

.user-details-header {
	display: flex;
	justify-content: space-between;
	padding: 0px 16px;
	border-bottom: 1px solid #bfc0c8;
}

.user-details-header>div {
	display: flex;
	align-items: center;
	gap: 16px;
}

.bucketlist-wrapper {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(389px, 1fr));
	gap: 16px;
	width: 100%;
	padding: 0px 24px;
}

.bucketlist-card {
	border: 1px solid #e8e8eb;
	padding: 0px 24px 10px;
	display: flex;
	flex-direction: column;
}

.bucketlist-card .bucketlist-card-row {
	display: flex;
	justify-content: space-between;
}

.bucketlist-card-title {
	font-weight: 600;
}

.bucketlist-card-row .bucketlist-card-row-2 {
	display: flex;
	gap: 4px;
	color: #9798a3;
}

.user-details-profile-wrapper {
	height: 570px;
	overflow-y: auto;
}
</style>

