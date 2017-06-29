import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { View } from 'react-native';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <Router />
        </Provider>
      </View>
    );
  }
}

export default App;
