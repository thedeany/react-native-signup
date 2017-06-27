// config
const apiConfig = {
	spacesReservations: false,
	ongoingEvents: true,
	onlyEventsWithRegistration: false,
	onlyFeaturedEvents: false,
	ageGroups: [
		// age group IDs
	],
	eventTypes: [
		// event type IDs
	]
}

// helpers
ageGroups = () => {
	if (apiConfig.ageGroups.length > 0) {
		console.log(apiConfig.ageGroups.map(group => `ageGroups=${group}`).join('&') + '&')
		return apiConfig.ageGroups.map(group => `ageGroups=${group}`).join('&') + '&';
	}
}

eventTypes = () => {
	if (apiConfig.eventTypes.length > 0) {
		return apiConfig.eventTypes.map(type => `eventsTypes=${type}`).join('&') + '&';
	}
}



// export
const Api = {
	url: `https://demozonepublic.evanced.info/api/signup/eventlist?${ageGroups()}${eventTypes()}isOngoingVisible=${apiConfig.ongoingEvents}&isSpacesReservationVisible=${apiConfig.spacesReservations}&onlyRegistrationEnabled=${apiConfig.onlyEventsWithRegistration}&onlyFeaturedEvents=${apiConfig.onlyFeaturedEvents}`,
	config: apiConfig,
}

export default Api;
