import {
  FETCH_USERS, NEW_RECORD, FETCH_RECORDS, LOGIN, LOGOUT,
} from './types';

const url = 'https://kyle-api2.herokuapp.com';

export const fetchUsers = () => dispatch => {
  fetch(`${url}/users`)
    .then(res => res.json())
    .then(users => dispatch({
      type: FETCH_USERS,
      payload: users,
    }));
};
export const fetchRecords = id => dispatch => {
  fetch(`${url}/measurements`)
    .then(data => data.json())
    .then(records => {
      const filteredRecords = records.filter(record => record.user_id === id);
      dispatch({
        type: FETCH_RECORDS,
        payload: filteredRecords,
      });
    });
};

export const newRecord = postData => dispatch => {
  fetch(`${url}/measurements`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(record => dispatch({
      type: NEW_RECORD,
      payload: record,
    }));
};

export const login = (userObj, username) => dispatch => {
  if (userObj) {
    dispatch({
      type: LOGIN,
      payload: userObj,
    });
  } else {
    fetch(`${url}/users`, {
      method: 'POST',
      body: JSON.stringify({ username }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(newUser => dispatch({
        type: LOGIN,
        payload: newUser,
      }));
  }
};

export const logout = () => ({
  type: LOGOUT,
  payload: '',
});
