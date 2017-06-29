import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import { eventsFetch } from '../actions';

import Api from './Api';
import EventDetail from './EventDetail';
import { Spinner } from './common';

class EventList extends Component {
	componentWillMount() {
		console.log(this.props);
		this.props.eventsFetch(this.props.config);
	}

	renderEvents() {
		return this.props.events.map(event =>
			<EventDetail key={event.EventId} event={event} />
		);
	}

	render() {
		console.log(this.props)
		const content = this.props.loading
			? <Spinner size="large" />
			: this.renderEvents();

		return (
			<ScrollView>{content}</ScrollView>
		);
	}
}

const mapStateToProps = (state) => {
	const { events, loading, config } = state.events;

	return { events, loading, config};
}

export default connect(mapStateToProps, { eventsFetch })(EventList);
