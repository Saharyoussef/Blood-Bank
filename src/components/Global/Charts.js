import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts';

const BloodQuantity = [100,350,450,250,400,150];
const xLabels = [
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
];


//hospital chart

const requests=[100,50,200,500,60,200,480,320,555,302,220,178]
const donations=[60,20,190,400,200,100,580,220,755,402,100,188]
const months=['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'];

//blood bank chart
const nbrDonors=[20,50,80,10,60,22,48,32,55,30,22,17]


const years = [
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
  new Date(2019, 0, 1),
  new Date(2020, 0, 1),
  new Date(2021, 0, 1),
  new Date(2022, 0, 1),
];

const BloodTypeA = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807,
  31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03, 35093.824,
  35495.465, 36166.16, 36845.684, 36761.793, 35534.926, 36086.727, 36691, 36571,
  36632, 36527, 36827, 37124, 37895, 38515.918,
];

const BloodTypeB = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248, 29259.764,
  30077.385, 30932.537, 31946.037, 32660.441, 33271.3, 34232.426, 34865.78,
  35623.625, 36214.07, 36816.676, 36264.79, 34402.36, 34754.473, 34971, 35185, 35618,
  36436, 36941, 37334, 37782.83, 38058.086,
];

const BloodTypeAB = [
  25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982, 30186.945,
  31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44, 35528.715,
  36205.574, 38014.137, 39752.207, 40715.434, 38962.938, 41109.582, 43189, 43320,
  43413, 43922, 44293, 44689, 45619.785, 46177.617,
];



const Blood = [
  { label: 'IN', value: 5000 },
  { label: 'OUT', value: 3000 },
];

//blood request chart
const region=['Grand Tunis','Sousse','Monastir','Sfax','Hammamet']
const bloodBank=[2,3,1,4,5]
const hospitals=[5,4,2,4,2]

export default function StackedBarChart() {
  return (
    <div>
      <h1>dashboard donor</h1>
      <BarChart
        width={400}
        height={300}
        series={[
          { data: BloodQuantity, 
            label: 'Blood Quantity', 
            id: 'BloodQuantity', 
            stack: 'total',
            color:'red' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />

      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 40, label: 'Donation' },
            { id: 1, value: 60, label: 'Request' },
          ],
        },
      ]}
      width={400}
      height={200}
      colors={['blue', 'green']}
      />

      <h1>Dashboard hospital</h1>

      <BarChart
        width={400}
        height={300}
        series={[
          { data: requests, 
            label: 'Blood Requests', 
            id: 'BloodRequests', 
            stack: 'total',
            color:'red' },
        ]}
        xAxis={[{ data: months, scaleType: 'band' }]}
      />

      <BarChart
        width={400}
        height={300}
        series={[
          { data: donations, 
            label: 'Blood Donations', 
            id: 'BloodDonations', 
            stack: 'total',
            color:'red' },
        ]}
        xAxis={[{ data: months, scaleType: 'band' }]}
      />

      <h1>dashboard blood bank</h1>
      <BarChart
        width={400}
        height={300}
        series={[
          { data: nbrDonors, 
            label: 'Donors Number', 
            id: 'nbrDonors', 
            stack: 'total',
            color:'red' },
        ]}
        xAxis={[{ data: months, scaleType: 'band' }]}
      />

      <LineChart
        xAxis={[
          {
            id: 'Years',
            data: years,
            scaleType: 'time',
            valueFormatter: (date) => date.getFullYear(),
          },
        ]}
        series={[
          {
            id: 'BloodTypeA',
            label: 'Blood Type A',
            data: BloodTypeA,
            stack: 'total',
            area: true,
          },
          {
            id: 'BloodTypeB',
            label: 'Blood Type B',
            data: BloodTypeB,
            stack: 'total',
            area: true,
          },
          {
            id: 'BloodTypeAB',
            label: 'Blood Type AB',
            data: BloodTypeAB,
            stack: 'total',
            area: true,
          },
        ]}
        sx={{
          '--ChartsLegend-itemWidth': '200px',
        }}
        width={600}
        height={400}
        margin={{ left: 70 }}
      />

      <PieChart
        series={[
          {
            data: Blood,
            cx: 500,
            cy: 200,
            innerRadius: 40,
            outerRadius: 80,
          },
        ]}
        height={300}
      />
      
      <h1>dashboard seeker</h1>

      <BarChart
        width={400}
        height={300}
        series={[
          { data: hospitals, 
            label: 'Hospitals', 
            id: 'hospitals', 
            stack: 'total',
            color:'red' },
        ]}
        xAxis={[{ data: region, scaleType: 'band' }]}
      />

      <BarChart
        width={400}
        height={300}
        series={[
          { data: bloodBank, 
            label: 'Blood Bank', 
            id: 'BloodBank', 
            stack: 'total',
            color:'red' },
        ]}
        xAxis={[{ data: region, scaleType: 'band' }]}
      />

      

    </div>
    
  );
}

