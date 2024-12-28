import {Button, TextField } from '@mui/material'
import React from 'react'

export default function MuiDemo() {
  return (
    <div className='container-fluid'>

        <div className='row'>
            <div className="col">
                <h3>Bootstrap Form</h3>
                <div className='w-50'>
                    <div className='my-2'>
                        <label className='form-labe' > User Name</label>
                        <div>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label className='form-label' > Password</label>
                            <div>
                                <input type="password" className='form-control' />
                            </div>
                        </div>
                        <div>
                            <button className='btn btn-warning'>Login</button>
                        </div>

                    </div>

                </div>
            </div>

            <div className='col'>
                <h3>MUI Form</h3>
                <div className='w-50'>
                    <div>
                        <TextField label="User Name" variant='standard' />
                    </div>
                    <div className='my-3'>
                        <TextField label="Password" variant='standard' />

                    </div>
                    <div>
                    <Button onClick={""} variant="contained" color="warning"> Login </Button>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}
