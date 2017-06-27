import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="home" component={Home} title="Door Regional Library" />
    </Router>
  );
};

export default RouterComponent;
