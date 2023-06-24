import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Modal from './Modal';
import '../src/App.css'

function App() {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Series 1',
      data: [30, 40, 45, 50, 39],
    },
  ]);

  const [chartType, setChartType] = useState('bar');

  return (
    <div id="chart">
      <ReactApexChart  options={chartOptions} series={chartSeries} type={chartType} />
      <Modal/>
    </div>
  );
}

export default App;
