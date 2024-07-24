import React from 'react'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import PFixed from '../../../Components/PFixed/page';

const Password = () => {
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <img src="/passwordImg.png" style={{ width: '100%', height: '400px', backgroundPosition: 'center', objectFit: 'cover', }} alt="" />
                <div style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white', padding: '20px 60px', borderRadius: '30px 30px 0 0', bottom: '0px' }}>
                    <p style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600', fontSize: "40px" }}>Restricted Page</p>
                    <p style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / Restricted Page</p>
                </div>
            </div>


            <div style={{ width: '1050px', borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
                <div style={{paddingTop:'190px'}}>
                    <div style={{ paddingBlock: "115px", backgroundColor: '#F4F0EC', borderRadius: '30px', width: '100%' }}>
                        <p style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: '600', fontSize: "40px" }}>Password Protected</p>
                        <p style={{ paddingTop: '10px', opacity: '0.8', textAlign: 'center' }}>This page is password protected. If you are the website admin, or have<br /> access to this page, please type your password below.</p>
                        <Box style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                            <TextField id="standard-basic" label="Enter Your Password" variant="standard" style={{ width: '50%', marginTop: '30px' }} />
                        </Box>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className='btn1' style={{ backgroundColor: '#292F36', padding: "16px 20px", borderRadius: '10px', color: 'white', marginTop: '38px' }}>Submit Now <span style={{
                                color: '#CDA274', fontWeight
                                    : '600', paddingLeft: '7px'
                            }}>→</span></button>
                        </div>
                    </div>
                </div>
            </div>

           <PFixed />
        </div>
    )
}

export default Password