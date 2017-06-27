import React from 'react';
import { View } from 'react-native';

import Header from './Header';
import EventList from './EventList';

const Home = () => (
  <View>
    <EventList style={{ flex: 1 }}/>
  </View>
);

export default Home;
