import React from 'react';
import { Text, View } from 'react-native';

import Button from './Button';

const Header = (props) => {
	const { headerStyle, textStyle, menuButtonStyle } = styles;
	return (
		<View style={headerStyle}>
			<Button style={menuButtonStyle}>Menu</Button>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	headerStyle: {
		backgroundColor: '#8ebf25',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
	},
	textStyle: {
		flex: 1,
		color: 'white',
		textAlign: 'center',
		backgroundColor: 'transparent'
	},
	menuButtonStyle: {
		position: 'absolute',
		top: -8,
		left: 20,
		color: 'white'
	}
};

export default Header;
