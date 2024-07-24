"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from 'next/link'
import { Pagination, PaginationItem, Stack } from '@mui/material';
import PFixed from '../../../Components/PFixed/page';
import { Height } from '@mui/icons-material';

const Project = () => {
    const [value, setValue] = React.useState('2');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };







    const yoxlama = () => {
        if (value == '2') {
            return <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: "30px " }}>
                    <div>
                        <div>
                            <img src="/projectD1.png" alt="" />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Minimal Bedroom</p>
                                    <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                                </div>
                                <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                    <Link href={{
                                        pathname: '/ProjectDetails',
                                        query:{projectImg:'/projectD1.png',projectName:'Minimal Bedroom'}
}}>
                                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <img src="/projectD2.png" alt="" style={{height:'470px',width:'100%',objectFit:'cover'}}/>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Minimal Bedroom</p>
                                    <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                                </div>
                                <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                    <Link href={{
                                        pathname: '/ProjectDetails',
                                        query:{projectImg:'/projectD2.png',projectName:'Minimal Bedroom'}
}}>
                                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <img src="/projectD3.png" alt="" />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Minimal Bedroom</p>
                                    <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                                </div>
                                <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                    <Link href={{
                                        pathname: '/ProjectDetails',
                                        query:{projectImg:'/projectD3.png',projectName:'Minimal Bedroom'}
}}>
                                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <img src="/projectD4.png" alt="" style={{height:"400px",width:'100%',objectFit:'cover'}}/>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Minimal Bedroom</p>
                                    <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                                </div>
                                <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                    <Link href={{
                                        pathname: '/ProjectDetails',
                                        query:{projectImg:'/projectD4.png',projectName:'Minimal Bedroom'}
}}>
                                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src="/projectD5.png" alt="" style={{height:"450px",objectFit:'cover',width:'100%'}}/>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Minimal Bedroom</p>
                                    <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                                </div>
                                <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                    <Link href={{
                                        pathname: '/ProjectDetails',
                                        query:{projectImg:'/projectD5.png',projectName:'Minimal Bedroom'}
}}>
                                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <img src="/projectD6.png" alt="" />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Minimal Bedroom</p>
                                    <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                                </div>
                                <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                    <Link href={{
                                        pathname: '/ProjectDetails',
                                        query:{projectImg:'/projectD6.png',projectName:'Minimal Bedroom'}
}}>
                                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <img src="/projectD7.png" alt="" />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Minimal Bedroom</p>
                                    <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                                </div>
                                <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                    <Link href={{
                                        pathname: '/ProjectDetails',
                                        query:{projectImg:'/projectD7.png',projectName:'Minimal Bedroom'}
}}>
                                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <img src="/projectD8.png" alt="" style={{height:"620px",width:'100%',objectFit:'cover'}}/>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Minimal Bedroom</p>
                                    <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                                </div>
                                <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                    <Link href={{
                                        pathname: '/ProjectDetails',
                                        query:{projectImg:'/projectD8.png',projectName:'Minimal Bedroom'}
}}>
                                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '130px' }}>

                </div>
            </div>
        }
        else if (value == '1') {
            return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: "30px " }}>
                <div>
                    <div>
                        <img src="/projectDD1.webp" style={{ width: '100%' ,height:'340px',objectFit:'cover'}} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Bathroom</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectDD1.webp', projectName: 'Bathroom' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectDD2.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Bathroom</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectDD2.jpg', projectName: 'Bathroom' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectDD3.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Bathroom</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectDD3.jpg', projectName: 'Bathroom' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectDD4.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Bathroom</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectDD4.jpg', projectName: 'Bathroom' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

                <div>
                    <div>
                        <img src="/projectDD5.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Bathroom</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectDD5.jpg', projectName: 'Bathroom' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectDD7.webp" style={{ width: '100%',height:"400px",objectFit:'cover' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Bathroom</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectDD7.webp', projectName: 'Bathroom' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectDD6.jpg" style={{ width: '100%',height:"370px",objectFit:'cover' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Bathroom</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectDD6.jpg', projectName: 'Bathroom' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectDD8.jpeg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Bathroom</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectDD8.jpeg', projectName: 'Bathroom' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        }
        else if (value == '3') {
            return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: "30px " }}>
                <div>
                    <div>
                        <img src="/projectKitchan1.webp" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Kitchan</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: '/ProjectDetails',
                                    query: { projectImg: '/projectKitchan1.webp', projectName: 'Kitchan' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectKitchan2.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Kitchan</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: '/ProjectDetails',
                                    query: { projectImg: '/projectKitchan2.jpg', projectName: 'Kitchan' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectKitchan3.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Kitchan</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: '/ProjectDetails',
                                    query: { projectImg: '/projectKitchan3.jpg', projectName: 'Kitchan' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectKitchan4.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Kitchan</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: '/ProjectDetails',
                                    query: { projectImg: '/projectKitchan4.jpg', projectName: 'Kitchan' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

                <div>
                    <div>
                        <img src="/projectKitchan5.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Kitchan</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: '/ProjectDetails',
                                    query: { projectImg: '/projectKitchan5.jpg', projectName: 'Kitchan' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectKitchan6.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Kitchan</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: '/ProjectDetails',
                                    query: { projectImg: '/projectKitchan6.jpg', projectName: 'Kitchan' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectKitchan7.avif" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Kitchan</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: '/ProjectDetails',
                                    query: { projectImg: '/projectKitchan7.avif', projectName: 'Kitchan' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectKitchan8.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Kitchan</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: '/ProjectDetails',
                                    query: { projectImg: '/projectKitchan8.jpg', projectName: 'Kitchan' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        }
        else if (value == '4') {
            return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: "30px " }}>
                <div>
                    <div>
                        <img src="/projectLiving1.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Living Area</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectLiving1.jpg', projectName: 'Living Area' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectLiving2.avif" style={{ width: '100%',height:'400px',objectFit:'cover' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Living Area</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectLiving2.avif', projectName: 'Living Area' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectLiving3.avif" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Living Area</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectLiving3.avif', projectName: 'Living Area' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectLiving4.webp" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Living Area</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectLiving4.webp', projectName: 'Living Area' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

                <div>
                    <div>
                        <img src="/projectLiving5.avif" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Living Area</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectLiving5.avif', projectName: 'Living Area' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectLiving6.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Living Area</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectLiving6.jpg', projectName: 'Living Area' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectLiving7.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Living Area</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectLiving7.jpg', projectName: 'Living Area' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img src="/projectLiving8.jpg" style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>Living Area</p>
                                <p style={{ opacity: '0.8', fontSize: '18px' }}>Decor / Artchitecture</p>
                            </div>
                            <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                                <Link href={{
                                    pathname: "/ProjectDetails",
                                    query: { projectImg: '/projectLiving8.jpg', projectName: 'Living Area' }
                                }}>
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        }
    }




    return (
        <div>
            <div style={{ position: 'relative' }}>
                <img src="https://s3-alpha-sig.figma.com/img/7ccf/2faf/d318a350c4848f6d8512052a3c5eac84?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXvvqJv4Nxc36gPxvAjnQSCtt47Jp30EtWshqr8HL2LFZY9WYouAOL2jjFCUXnx58cznT-PdgQu6fZXEr0soF1u7rTC45V4bDS14B~toWnpejqTQWHT7hR02UGeTXsK-IBr32lgRoDAVrMD3v-QLm5w~mNCePpZCEL0gQuWN~ZJdkCH~ButKwtmx7GCQTuOXi1rtAmBzyu4LrzlnnEXfRsrdtNCoHTatP5qcbCTl-cCWddZcGZ5peo4pJRqgrxTEmmb630CUor5Eeta3pR8soGfbwgWwOKLch9L9eEECYZHFUitFY6V-F4tPWmheAuD0wIMPXhbMDLYEibphIPKb9A__" style={{ width: '100%', height: '400px', backgroundPosition: 'center', objectFit: 'cover', }} alt="" />
                <div style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white', padding: '20px 60px', borderRadius: '30px 30px 0 0', bottom: '0px' }}>
                    <p style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600', fontSize: "40px" }}>Our Project</p>
                    <p style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / Project</p>
                </div>
            </div>

            <div className='containeR' style={{ width: '1050px', borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
                <div style={{ paddingTop: '120px', display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <TabContext value={value} >
                            <Box >
                                <TabList TabIndicatorProps={{ style: { display: 'none' } }} style={{ border: '2px solid #CDA274', marginBottom: '90px', borderRadius: '20px' }} onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab style={{ transition: '300ms', borderRadius: '15px', paddingInline: '32px', color: value == '1' ? 'white' : 'black', backgroundColor: value == '1' ? '#CDA274' : 'white' }} label="Bathroom" value="1" />
                                    <Tab style={{ transition: '300ms', borderRadius: '15px', paddingInline: '32px', color: value == '2' ? 'white' : 'black', backgroundColor: value == '2' ? '#CDA274' : 'white' }} label="Bed Room" value="2" />
                                    <Tab style={{ transition: '300ms', borderRadius: '15px', paddingInline: '32px', color: value == '3' ? 'white' : 'black', backgroundColor: value == '3' ? '#CDA274' : 'white' }} label="Kitchan" value="3" />
                                    <Tab style={{ transition: '300ms', borderRadius: '15px', paddingInline: '32px', color: value == '4' ? 'white' : 'black', backgroundColor: value == '4' ? '#CDA274' : 'white' }} label="Living Area" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel value="1"></TabPanel>
                            <TabPanel value="2"></TabPanel>
                            <TabPanel value="3"></TabPanel>
                            <TabPanel value="4"></TabPanel>
                        </TabContext>



                    </div>
                </div>
                <div >
                    {
                        yoxlama()
                    }
                </div>
            </div>



            <PFixed />
        </div >
    )
}

export default Project