import {
  EVENTS_FETCH_SUCCESS,
  FILTER_UPDATE
} from '../actions/types';
import Api from '../components/Api';

const INITIAL_STATE = {
  events: [],
  loading: true,
  config: Api.config
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENTS_FETCH_SUCCESS:
      console.log(action);
      return { ...state, events: action.payload, loading: false };
    case FILTER_UPDATE:
      console.log(action);
      return { ...state, config: { ...state.config, [action.payload.prop]: action.payload.value }};
    default:
      return state;
  }
}
