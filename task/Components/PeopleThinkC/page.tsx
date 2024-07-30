"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const PeopleThinkC = () => {
    let imgs = [
        <img style={{ borderRadius: '40px', height: '400px',width:'100%', objectFit: 'cover' }} src="/peopleThink1.png" alt="" />,
        <img style={{ borderRadius: '40px', height: '400px',width:'100%', objectFit: 'cover', objectPosition: 'center right' }} src="peopleThink2.jpg" alt="" />,
        <img src="/teamD7.png" style={{ borderRadius: '40px',width:'100%',objectPosition:' center', height: '400px', objectFit: 'cover'}} alt="" />,
        <img style={{ borderRadius: '40px',width:"100%", height: '400px', objectFit: 'cover', objectPosition: 'right center' }} src="teamD6.png" alt="" />
    ]
    return (
        <div>
            <div style={{ backgroundColor: '#F4F0EC', width: '100%', paddingTop: '40px', paddingBottom: '70px' }}>
                <p className='peopleThinkH1' style={{ fontFamily: 'serif', fontWeight: '600', textAlign: 'center', paddingTop: '60px' }}>What the People Thinks<br />About Us</p>
                <div className='containeR peopleThinkResC' style={{ margin: '50px auto', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
                    {
                        imgs.map(e => {
                            return <div>{e}</div>
                        })
                    }
                </div>
                   <div className='peopleThinkResH' >
                   <Swiper style={{width:"82%" ,marginTop:"30px", display:'flex' ,height:"500px", justifyContent:'center' , alignItems:'center'}}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        
                        {
                            imgs.map(e => {
                                return <SwiperSlide style={{height:'100%',display:"grid", objectFit:"cover", placeItems:"center"}}>
                                    <div className='peopleThinkImgRes' >{e}</div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                   </div>
            </div>
        </div>
    )
}

export default PeopleThinkC