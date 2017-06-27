import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
	return (
		<TouchableOpacity>
			<Text style={props.style}>{props.children}</Text>
		</TouchableOpacity>
	);
};

export default Button;
