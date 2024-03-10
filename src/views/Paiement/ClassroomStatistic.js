import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'SIL', Total_student: 100, compled: 54 },
  { name: 'CP', Total_student: 150, compled: 54 },
  { name: 'CE1', Total_student: 200, compled: 150 },
  { name: 'CE2', Total_student: 80, compled: 25 },
  { name: 'CM1', Total_student: 50, compled: 10 },
  { name: 'CM2', Total_student: 200, compled: 100 },

];

export default function SimpleBarChart({filterValue}) {
    const filteredData = filterValue === "all" 
    ? data 
    : data.filter(d => d.name === filterValue);
  return (
    <div style={{marginLeft:'-60px'}}>
      <BarChart  width={320} height={420}  data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="compled" fill="green" />
        <Bar dataKey="Total_student" fill="blue" />
      </BarChart>
    </div>
  );
}
