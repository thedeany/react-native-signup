import axios from 'axios';
import {
  EVENTS_FETCH_SUCCESS
} from './types';

const createUrl = (config) => {
  const {
    ongoingEvents,
    spacesReservations,
    onlyEventsWithRegistration,
    onlyFeaturedEvents,
    ageGroups,
    eventTypes
  } = config;

  let ag, et;

  if (ageGroups.length > 0) {
    console.log(ageGroups.map(group => `ageGroups=${group}`).join('&') + '&')
    ag = ageGroups.map(group => `ageGroups=${group}`).join('&') + '&';
  }

  if (eventTypes.length > 0) {
    et = eventTypes.map(type => `eventsTypes=${type}`).join('&') + '&';
  }

  return `https://demozonepublic.evanced.info/api/signup/eventlist?${ag}${et}isOngoingVisible=${ongoingEvents}&isSpacesReservationVisible=${spacesReservations}&onlyRegistrationEnabled=${onlyEventsWithRegistration}&onlyFeaturedEvents=${onlyFeaturedEvents}`
}

export const eventsFetch = (config) => {
  const url = createUrl(config);

  return (dispatch) => {
    axios.get(url)
  		.then(response => {
        dispatch({ type: EVENTS_FETCH_SUCCESS, payload: response.data });
  		});
  };
  // return { type: EVENTS_FETCH_SUCCESS, payload: ['test', 'test2'] };
};
