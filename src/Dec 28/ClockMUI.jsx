import { LocalizationProvider, TimeClock } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs'
import React from 'react'


let today=dayjs();
let twoPM=dayjs().set('hour',14).startOf('hour');
let fourPM=dayjs().set('hour',16).startOf('hour');
export default function ClockMUI() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

    
    <div>
      <div className='text-center'>
      <h1>Validation Behavior View</h1>
      <TimeClock defaultValue={twoPM} maxTime={fourPM}/>

      </div>
    </div>
    </LocalizationProvider>
  );
}
