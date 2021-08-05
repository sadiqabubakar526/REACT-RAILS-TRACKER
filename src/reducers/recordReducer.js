import { NEW_RECORD, FETCH_RECORDS } from '../actions/types';

const initialState = {
  records: [],
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECORDS:
      return {
        ...state,
        records: action.payload,
      };
    case NEW_RECORD:
      return {
        ...state,
        records: [...state.records, action.payload],
      };

    default:
      return state;
  }
};

export default recordReducer;
