import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

const ContactInp = () => {

  
    return (
        <div >
            <Box className="contactINP" style={{ width: '75%', margin: '80px auto ', display: 'grid', gap: '40px', }}>
                <TextField  id="standard-basic" label="Name" variant="standard" />
                <TextField  id="standard-basic" label="Email" variant="standard" />
                <TextField className='contactSpan'  style={{  marginTop: '20px' }}
                    id="standard-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue="Hello Iam Intrested in.."
                    variant="standard"
                />
            </Box>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className='btn1' style={{ backgroundColor: '#292F36', padding: "17px 20px", borderRadius: '10px', color: 'white', marginTop: '65px' }}>  Send Now <span style={{
                    color: '#CDA274', fontWeight
                        : '600', paddingLeft: '7px'
                }}>→</span></button>
            </div>
        </div>
    )
}

export default ContactInp