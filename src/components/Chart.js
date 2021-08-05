/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { fetchRecords } from '../actions';

function Chart({ records = [], fetchRecords, user }) {
  function addPortfolioChart() {
    document.getElementById('portfolio').innerHTML = '';

    //  the data that powers the bar chart, a simple array of numeric values
    let portfolioData = records.map(r => r.portfolio);
    const recordMax = Math.max(...portfolioData);
    portfolioData = portfolioData.map(d => (d / recordMax) * 200);

    //  the size of the overall svg element
    const height = 200;
    const width = 400;

    //  the width of each bar and the offset between each bar
    const barWidth = 20;
    const barOffset = 5;
    d3.select('#portfolio')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#4cb5e8')
      .selectAll('rect')
      .data(portfolioData)
      .enter()
      .append('rect')
      .attr('width', barWidth)
      .attr('height', data => data)
      .attr('x', (data, i) => i * (barWidth + barOffset))
      .attr('y', data => height - data);
  }

  function addEmotionChart() {
    document.getElementById('emotion').innerHTML = '';

    //  the data that powers the bar chart, a simple array of numeric values
    const emotionData = records.map(r => r.emotion * 10);

    //  the size of the overall svg element
    const height = 50;
    const width = 400;

    //  the width of each bar and the offset between each bar
    const barWidth = 20;
    const barOffset = 5;
    d3.select('#emotion')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#4cb5e8')
      .selectAll('rect')
      .data(emotionData)
      .enter()
      .append('rect')
      .attr('width', barWidth)
      .attr('height', data => data)
      .attr('x', (data, i) => i * (barWidth + barOffset))
      .attr('y', data => height - data);
  }

  useEffect(() => {
    fetchRecords(user.id);
    addPortfolioChart();
    addEmotionChart();
    // eslint-disable-next-line
  }, [records]);

  return (
    <div className="chart-container">
      <h2>Portfolio Value</h2>
      <div id="portfolio" className="bar-chart" />
      <h2>Emotion Swings</h2>
      <div id="emotion" className="bar-chart" />
    </div>
  );
}

Chart.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps())(Chart);
