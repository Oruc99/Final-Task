"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import PFixed from '../../../Components/PFixed/page'
import LogoSvg from '../../../Components/LogoSvg/page'
import NumbersC from '../../../Components/NumbersC/page'


const Home = () => {

  let peopleThink = [
    {
      name: "Nattasha Mith",
      country: 'Sydney, USA',
      desc: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.',
      img:'/peopleImg1.png'
    },
    {
      name: "Raymond Galario",
      country: 'Sydney, Australia',
      desc: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.',
      img:'/peopleImg2.png'
    },
    {
      name: "Benny Roll",
      country: 'Sydney, New York',
      desc: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.',
      img:'/peopleImg3.png'
    },
  ]

  let followProjects = [
    {
      img:'/projectImg1.png',
      name: 'Modern Kitchan',
      info: 'Decor / Artchitecture',
      imgRadius: '0 100px 0 0',
    },
    {
      img:'/projectImg2.png',
      name: 'Modern Kitchan',
      info: 'Decor / Artchitecture',
      imgRadius: '100px 0 0 0 ',
    },
    {
      img:'/projectImg3.png',
      name: 'Modern Kitchan',
      info: 'Decor / Artchitecture',
      imgRadius: '0 0 100px 0',
    },
    {
      img:'/projectImg4.png',
      name: 'Modern Kitchan',
      info: 'Decor / Artchitecture',
      imgRadius: '0 0 0 100px ',
    },
  ]



  let articlesNews = [
    {
      img:'/articlesImg1.png',
      name: 'Kitchan Design',
      date: '26 December,2022 ',
      bgColor: 'white',
      color: '#F4F0EC',
      desc: 'Let’s Get Solution For Building Construction Work'
    },
    {
      img:'/articlesImg2.png',
      name: 'Living Design',
      date: '22 December,2022 ',
      bgColor: '#F4F0EC',
      color: 'white',
      desc: 'Low Cost Latest Invented Interior Designing The Ideas.'
    },
    {
      img:'/articlesImg3.png',
      name: 'Interior Design',
      date: '25 December,2022 ',
      bgColor: 'white',
      color: '#F4F0EC',
      desc: `Best For Any Office & Business Interior Of Solution`
    },
  ]

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <img className='homeHeadImg' style={{ width: '100%', objectFit: 'cover', backgroundPosition: 'center' }} src='/homeImg.jpg'  />
        <div style={{ position: 'absolute', top: '25%', left: '18%' }}>
          <h1 className='homeHeadH1' style={{ fontFamily: 'serif', fontWeight: '600', opacity: '0.9' }}>Let Your Home <br />Be Unique</h1>
          <p className='homeHeadP' style={{  opacity: '0.9', paddingTop: '10px' }}>There are many variations of the passages of lorem Ipsum<br /> fromavailable,variations of the passages.</p>
          <button className='btn1' style={{ backgroundColor: '#292F36', padding: "14px 20px", borderRadius: '10px', color: 'white', marginTop: '45px' }}>Get Started <span style={{
            color: '#CDA274', fontWeight
              : '600', paddingLeft: '7px'
          }}>→</span></button>
        </div>
      </div>

      <div className='containeR'  style={{  borderInline: '1px solid rgb(0, 0 ,0 ,0.1)', margin: "auto", position: 'relative' }}>
        <div  style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-around', paddingTop: "100px" }}>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '28px', fontFamily: "serif", fontWeight: '600' }}>Project Plan</h1>
            <p style={{ paddingTop: "14px", opacity: "0.8", fontSize: '18px' }}>There are many variations of the<br /> passages of lorem Ipsum from<br /> available, majority.</p>
            <button className='btnB'  style={{ fontWeight: '600', marginTop: "27px" }}>Read More <span style={{ color: '#CDA274', paddingLeft: '7px', fontWeight: '600' }}>→</span></button>
          </div>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '28px', fontFamily: "serif", fontWeight: '600' }}>Interior Work</h1>
            <p style={{ paddingTop: "14px", opacity: "0.8", fontSize: '18px' }}>There are many variations of the<br /> passages of lorem Ipsum from<br /> available, majority.</p>
            <button  className='btnB' style={{ fontWeight: '600', marginTop: "27px" }}>Read More <span style={{ color: '#CDA274', paddingLeft: '7px', fontWeight: '600' }}>→</span></button>
          </div>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '28px', fontFamily: "serif", fontWeight: '600' }}>Realization</h1>
            <p style={{ paddingTop: "14px", opacity: "0.8", fontSize: '18px' }}>There are many variations of the<br /> passages of lorem Ipsum from<br /> available, majority.</p>
            <button className='btnB'  style={{ fontWeight: '600', marginTop: "27px" }}>Read More <span style={{ color: '#CDA274', paddingLeft: '7px', fontWeight: '600' }}>→</span></button>
          </div>
        </div>

        <div className='createArt' style={{ marginTop: '160px', display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ width: '50%' }}>
            <h1 style={{ fontFamily: "serif", fontWeight: '600' }}>We Create The Art<br />Of Stylish Living<br />Stylishly</h1>
            <p className='createArtP' style={{ padding: '20px 0', opacity: "0.9" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal.</p>
            <div style={{ display: 'flex', alignItems: "center", gap: "15px" }}>
              <svg className='callSvg'  viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="46.5" cy="46.5" r="46.5" fill="#F4F0EC" />
                <path d="M61.0012 55.0749C59.7796 53.8442 56.8211 52.0482 55.3857 51.3243C53.5164 50.3828 53.3625 50.3059 51.8933 51.3974C50.9133 52.1258 50.2617 52.7766 49.1148 52.532C47.9678 52.2874 45.4754 50.9082 43.2931 48.7329C41.1107 46.5576 39.6514 43.9931 39.4061 42.8501C39.1607 41.7071 39.8222 41.0632 40.5438 40.081C41.5607 38.6964 41.4838 38.4657 40.6145 36.5965C39.9368 35.1427 38.0883 32.2121 36.8529 30.9967C35.5313 29.6914 35.5313 29.9222 34.6798 30.276C33.9865 30.5677 33.3214 30.9222 32.6928 31.3352C31.462 32.1529 30.7789 32.8321 30.3012 33.8528C29.8235 34.8735 29.6089 37.2665 32.0759 41.7478C34.5429 46.2292 36.2737 48.5206 39.8561 52.0928C43.4385 55.6649 46.1931 57.5856 50.2202 59.844C55.2018 62.6339 57.1126 62.09 58.1365 61.6131C59.1604 61.1362 59.8427 60.4593 60.662 59.2286C61.076 58.6011 61.4314 57.9368 61.7235 57.2441C62.0781 56.3957 62.3089 56.3957 61.0012 55.0749Z" stroke="#CDA274" stroke-width="2" stroke-miterlimit="10" />
              </svg>
              <div>
                <p className='callP1' style={{ fontWeight: '900',  opacity: "0.8" }}>012345678</p>
                <p className='callP2'>Call Us Anytime</p>
              </div>
            </div>
            <button className='btn1 btnR' style={{ backgroundColor: '#292F36', padding: "17px 20px", borderRadius: '10px', color: 'white', marginTop: '45px' }}>Get Estimate <span style={{
              color: '#CDA274', fontWeight
                : '600', paddingLeft: '7px'
            }}>→</span></button>
          </div>
          <img style={{ width: '50%', borderRadius: "0 230px 0 85px", objectFit: 'cover', backgroundPosition: 'center' }} src="/homeImg2.png" alt="" />
        </div>

        <div style={{ marginTop: "190px", backgroundColor: '#F4F0EC', borderRadius: '35px', padding: '30px 20px 60px' }}>
          <h1 className='peopleThinkH1' style={{ textAlign: 'center', padding: '20px',  fontFamily: 'serif', fontWeight: '600' }}>What the People Thinks<br />About Us</h1>
          <div className='peopleThinK' style={{ display: 'grid', gap: '15px', marginTop: '25px' }}>
            {peopleThink.map((e, i) => {
              return <div key={i} style={{ backgroundColor: 'white', padding: '38px 30px', borderRadius: '20px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <img style={{ width: '70px', height: '70px', borderRadius: '100%', objectFit: 'cover' }} src={e.img} />
                  <div>
                    <p className='peopleThinkPP1' style={{  fontWeight: '600', fontFamily: 'serif' }}>{e.name}</p>
                    <p className='peopleThinkPP2' style={{ opacity: '0.8' }}>{e.country}</p>
                  </div>
                </div>
                <p className='peopleThinkDesc' style={{ marginTop: '30px', opacity: '0.8' }}>{e.desc}</p>
              </div>
            })}
          </div>
        </div>

< LogoSvg />



        <p className='pTitle' style={{ textAlign: 'center', marginTop: '170px', fontFamily: 'serif', fontWeight: '600' }}>Follow Our Projects</p>
        <p className='pInfo' style={{ textAlign: 'center',  opacity: '0.7', paddingTop: '15px' }}>It is a long established fact that a reader will be distracted by the of readable<br /> content of page  lookings at its layouts  points.</p>



        <div className="homeProjectFollow" style={{ display: 'grid',  marginTop: '80px', paddingBottom: "140px", gap: '70px 110px' }}>
          {followProjects.map((e, i) => {
            return <div key={i}>
              <img src={e.img} style={{ width: '100%', height: '500px', objectFit: 'cover', backgroundPosition: 'center', borderRadius: e.imgRadius }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <div>
                  <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'serif' }}>{e.name}</p>
                  <p style={{ opacity: '0.8', fontSize: '18px' }}>{e.info}</p>
                </div>
                <div className='linkH1' style={{ backgroundColor: '#F4F0EC', padding: '18px 23px', borderRadius: '100%' }}>
                  <Link href={{
                    pathname: '/ProjectDetails',
                    query: { projectImg: e.img, projectName: e.name }
                  }}>
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
          })}
        </div>

      </div>

      <NumbersC />

   

      <div className='containeR' style={{  margin: 'auto', borderInline: '1px solid rgb(0, 0 ,0 ,0.1)', }}>
        <p style={{ textAlign: 'center', paddingTop: '180px', fontSize: '45px', fontWeight: '600', fontFamily: 'serif' }}>Articles & News</p>
        <p style={{ textAlign: 'center', opacity: '0.8', paddingTop: '10px' }}>It is a long established fact that a reader will be distracted by the of readable content <br />of a page when lookings at its layouts the points of using.</p>
      </div>


      <div className='containeR'  style={{ borderInline: '1px solid rgb(0, 0 ,0 ,0.1)', margin: 'auto' }}>
        <div className='homeBDF' style={{ display:'grid', gap: '30px', paddingTop: '80px' }}>
          {articlesNews.map((e, i) => {
            return <div key={i} style={{ border: '1px solid rgb(0, 0, 0, 0.1)', padding: '20px', backgroundColor: e.bgColor, borderRadius: '50px' }}>
              <div style={{ position: 'relative' }}>
                <img style={{ width: '100%', objectFit: 'cover', borderRadius: '38px 38px 0 0', backgroundPosition: 'center', height: '200px' }} src={e.img} />
                <p style={{ backgroundColor: 'white', opacity: '0.8', position: 'absolute', bottom: "15px", left: '15px', fontSize: '14px', borderRadius: '8px 8px  8px 0', padding: '7px 12px' }}>{e.name}</p>
              </div>
              <p style={{ fontSize: '24px', paddingTop: '15px', paddingLeft: '5px', fontFamily: 'serif', fontWeight: '600' }}>{e.desc}</p>
              <div style={{ display: 'flex', marginTop: '25px', marginBottom: '10px', marginInline: '5px', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ opacity: '0.8' }}>{e.date}</p>
                <div className='linkH1' style={{ backgroundColor: e.color, padding: '15px 20px', borderRadius: '100%' }}>
                  <Link href={{
                    pathname: '/BlogDetails',
                    query: { img: e.img, desc: e.desc, date: e.date }
                  }}>
                    <svg width="8" height="17" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 19L9 10L1 1.00003" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          })}
        </div>


        <div  style={{ width: '100%', backgroundColor: '#292F36', margin: '180px auto 0', padding: '45px', borderRadius: '45px' }}>
          <p className='contacTP1' style={{ textAlign: 'center', color: 'white', paddingTop: '20px', fontFamily: 'serif' }}>Wanna join the interno?</p>
          <p className='contacTP2' style={{ textAlign: 'center', padding: '10px', color: 'rgb(258,258,258,0.8)' }}>It is a long established fact  will be distracted.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link className='btn1 btnR' href='/Contact' style={{ backgroundColor: '#CDA274', padding: "16px 22px", borderRadius: '10px', color: 'white', marginTop: '40px' }}>Contact With Us <span style={{ color: '#292F36', fontWeight: '900', paddingLeft: '7px' }}>→</span></Link>
          </div>
        </div>

        
      </div>
     <PFixed />
    </div>
  )
}

export default Home