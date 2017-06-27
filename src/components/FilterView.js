import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

class FilterView extends Component {
  // TODO create form of filters which populate from state.config
  // The form should update state with new filter selections
  render() {
    return (
      <CardSection>
        <Text>Filtering</Text>
      </CardSection>
    );
  }
}

export default FilterView;
