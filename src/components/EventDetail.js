import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import Card from './Card';
import CardSection from './CardSection';

const EventDetail = (props) => {
	const { event } = props;
	console.log(event.Image);
	const { title, location, date, description, image } = styles;
	return (
		<TouchableOpacity>
			<Card>
				<CardSection>
					<View>
						<Text style={title}>{event.Title}</Text>
						<Text style={location}>{event.LocationName} - {event.SpaceName}</Text>
						<Text style={date}>{moment(event.EventStart).format('MMMM Do YYYY - h:mm a')}</Text>
						{event.Image.length > 0 && event.Image.includes('https://') // Apple only allows external assets via HTTPS
							? <Image style={image} source={{ uri: event.Image }} />
							: null
						}
						{event.Description.length > 0
							? <Text style={description}>{event.Description}</Text>
							: null
						}
					</View>
				</CardSection>
			</Card>
		</TouchableOpacity>
	);
};

const styles = {
	title: {
		fontSize: 18,
		fontWeight: '600'
	},
	location: {
		color: '#aaa'
	},
	date: {
		color: '#aaa'
	},
	description: {
		paddingTop: 10
	},
	image: {
		flex: 1,
		height: 300,
		width: null,
		marginTop: 10
	}
};

export default EventDetail;
