/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecords } from '../actions';

function Records({ records = [], fetchRecords, user }) {
  useEffect(() => {
    fetchRecords(user.id);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="records-container">
      <h2>All Records</h2>
      <div>
        <div className="record-header">
          <p>No</p>
          <p>Portfolio($)</p>
          <p>Emotion</p>
          <p>Description</p>
        </div>
        {records
          && records.map((record, index) => (
            <div key={record.id} className="record-item">
              <p>{index + 1}</p>
              <p>
                $
                {record.portfolio}
              </p>
              <p>{record.emotion}</p>
              <p>{record.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

Records.propTypes = {
  records: PropTypes.arrayOf(Object),
  fetchRecords: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  records: state.recordReducer.records,
  user: state.userReducer.user,
});

const mapDispatchToProps = () => ({
  fetchRecords,
});

export default connect(mapStateToProps, mapDispatchToProps())(Records);
