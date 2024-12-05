import React from 'react'
import { useState } from 'react';
import moment from "moment";

function DataBinding3() {
    const [mfd]=useState(new Date());

  return (
    <div className='container-fluid'>
        {/* <h2>{moment(mfd).format('DD dddd,MMMM YYYY')}</h2> */}
        <h2>{moment (mfd).format('D M Y')}</h2>

    </div>
  )
}

export default DataBinding3