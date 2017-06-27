import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	const { sectionStyle } = styles;

	return (
		<View style={sectionStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	sectionStyle: {
		padding: 10
	}
};

export default CardSection;
