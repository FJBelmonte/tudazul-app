import {
  FETCH_PATIENT_PATIENT,
  LOGIN_PATIENT_FAIL,
  LOGIN_PATIENT_SUCCESS,
} from '../../actions/types';

const INITIAL_STATE = {
  ref: null,
  lastCreated: null,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PATIENT_PATIENT:
      return {...state, user: action.payload.patient};
    case LOGIN_PATIENT_SUCCESS:
      return {...state, ref: action.payload.ref};
    default:
      return state;
  }
};
