import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';

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

const mapStateToProps = (state) => {
  const { config } = state.events;

  return { config };
}

export default connect(mapStateToProps, { updateFilters })(FilterView);
