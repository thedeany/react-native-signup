import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

import Api from './Api';
import EventDetail from './EventDetail';
import { Spinner } from './common';

class EventList extends Component {
	state = {
		events: [],
		loading: true,
		config: Api.config,
	}

	componentWillMount() {
		this.getEventData();
	}

	createUrl() {
		const {
			ongoingEvents,
			spacesReservations,
			onlyEventsWithRegistration,
			onlyFeaturedEvents,
			ageGroups,
			eventTypes
		} = this.state.config;

		let ag, et;

		if (ageGroups.length > 0) {
			console.log(ageGroups.map(group => `ageGroups=${group}`).join('&') + '&')
			ag = ageGroups.map(group => `ageGroups=${group}`).join('&') + '&';
		}

		if (eventTypes.length > 0) {
			et = eventTypes.map(type => `eventsTypes=${type}`).join('&') + '&';
		}

		return `https://demozonepublic.evanced.info/api/signup/eventlist?${ag}${et}isOngoingVisible=${ongoingEvents}&isSpacesReservationVisible=${spacesReservations}&onlyRegistrationEnabled=${onlyEventsWithRegistration}&onlyFeaturedEvents=${onlyFeaturedEvents}`
	}

	getEventData() {
		const url = this.createUrl();

		axios.get(url)
			.then(response => {
				console.log(response);
				this.setState({
					events: response.data,
					loading: false
				});
			});
	}

	renderEvents() {
		return this.state.events.map(event =>
			<EventDetail key={event.EventId} event={event} />
		);
	}

	render() {
		const content = this.state.loading
			? <Spinner size="large" />
			: this.renderEvents();

		return (
			<ScrollView>{content}</ScrollView>
		);
	}
}

export default EventList;
