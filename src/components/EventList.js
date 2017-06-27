import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

import Api from './Api';
import EventDetail from './EventDetail';

class EventList extends Component {
	state = {
		events: [],
		loading: true
	}

	componentWillMount() {
		axios.get(Api.url)
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
			? <Text>Loading...</Text>
			: this.renderEvents();

		return (
			<ScrollView>{content}</ScrollView>
		);
	}
}

export default EventList;
