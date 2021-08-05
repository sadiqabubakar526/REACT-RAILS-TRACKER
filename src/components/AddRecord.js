/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newRecord } from '../actions';

function AddRecord({ newRecord, user }) {
  function resetForm() {
    document.getElementById('portfolio').value = '';
    document.getElementById('emotion').value = '';
    document.getElementById('description').value = '';
  }

  function addNewRecord(e) {
    e.preventDefault();
    const portfolio = document.getElementById('portfolio').value;
    const emotion = document.getElementById('emotion').value;
    const description = document.getElementById('description').value;
    newRecord({
      user_id: user.id,
      portfolio,
      emotion,
      description,
    });
    resetForm();
  }

  return (
    <div className="add-record-container">
      <h1>Add Record</h1>
      <form action="" className="add-record-form">
        <label htmlFor="portfolio">Portfolio:</label>
        <input type="number" name="portfolio" id="portfolio" />
        <label htmlFor="emotion">Emotion:</label>
        <select defaultValue="3" id="emotion" name="emotion">
          <option value="1">I'm Dumb :(</option>
          <option value="2">Sad</option>
          <option value="3">Neutral</option>
          <option value="4">Yayy</option>
          <option value="5">I'm a Genius!</option>
        </select>
        <label htmlFor="description">Description: </label>
        <textarea type="text" id="description" />
        <button type="submit" onClick={addNewRecord}>
          Add Record
        </button>
      </form>
    </div>
  );
}

AddRecord.propTypes = {
  newRecord: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  users: state.userReducer.users,
  user: state.userReducer.user,
});

const mapDispatchToProps = () => ({
  newRecord,
});

export default connect(mapStateToProps, mapDispatchToProps())(AddRecord);
