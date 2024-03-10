import React from 'react';
import { Typography,Grid,Container,Paper, Divider } from '@material-ui/core';
import {
    AppTasks,
    AppNewsUpdate,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppWidgetSummary,
    AppCurrentSubject,
    AppConversionRates,
  } from './app';

const Circular=()=>{
    return(
        <Grid item xs={12} md={6} lg={4}>
        <AppCurrentVisits
        title="Current Visits"
        chartData={[
            { label: 'America', value: 4344 },
            { label: 'Asia', value: 5435 },
            { label: 'Europe', value: 1443 },
            { label: 'Africa', value: 4443 },
        ]}
        chartColors={[
            theme.palette.primary.main,
            theme.palette.info.main,
            theme.palette.warning.main,
            theme.palette.error.main,
        ]}
        />
        </Grid>
    )
}

export default Circular;