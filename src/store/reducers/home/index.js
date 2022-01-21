import * as TYPES from '../../types';
import {Platform} from 'react-native';
const initialState = {
  fetchedLaunches: [],
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.FETCHED_LAUNCHES:
      return {
        ...state,
        fetchedLaunches: actions.payload,
      };
    case TYPES.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default reducer;
