import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/Home';
import FilterView from './components/FilterView';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key="home"
        component={Home}
        title="Door Regional Library"
        rightTitle="Filter"
        onRight={() => Actions.filter()}
      />
      <Scene
        key="filter"
        component={FilterView}
        title="Filter"
        rightTitle="Apply"
        onRight={() => {
          console.log('applying filters...');
          Actions.home({ type: 'reset' });
        }}
      />
    </Router>
  );
};

export default RouterComponent;
