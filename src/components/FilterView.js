import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import { CardSection, Input } from './common';

class FilterView extends Component {
  // TODO create form of filters which populate from state.config
  // The form should update state with new filter selections
  render() {
    return (
      <CardSection>
        <Input
          label="Age Groups"
          placeholder="1,2,3"
          value={this.props.config.ageGroups}
          onChangeText={value => this.props.updateFilters({ prop: 'ageGroups', value })}
        />
      </CardSection>
    );
  }
}

const mapStateToProps = (state) => {
  const { config } = state.events;

  return { config };
}

export default connect(mapStateToProps, { updateFilters })(FilterView);
