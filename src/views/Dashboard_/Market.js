import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Typography } from '@material-ui/core';
//
import { BaseOptionChart } from './charts';
import SelectVariants from './select0';
import MultipleSelectPlaceholder from './select0';
import TeachCount from './TeachCount';
import StudCount from './ButtonCreateSchool';
import SalleCount from './SalleCount';


// ----------------------------------------------------------------------


const CHART_DATA = [
  
  { data: [] },
  {
    name: 'This week',
    data: [80 , 20, 40, 100,80, 100]
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
     
      'G SECTION',
      'P SECTION',
      'CP',
      'CE1',
      'CE2',
      'CM1',
      'CM2',
    ]
  });

  return (
    <Card>
      <CardHeader title="payment statistics"
           action={
            <MultipleSelectPlaceholder />
          } 
          />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
