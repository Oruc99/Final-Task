import React from 'react'
import Link from 'next/link'
import PFixed from '../../../Components/PFixed/page'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Blog = () => {
  let articlesNews = [
    {
      img: 'blogD1.png',
      name: 'Kitchan Design',
      date: '26 December,2022 ',
      bgColor: 'white',
      color: '#F4F0EC',
      desc: 'Let’s Get Solution For Building Construction Work'
    },
    {
      img: 'blogD2.png',
      name: 'Living Design',
      date: '22 December,2022 ',
      bgColor: '#F4F0EC',
      color: 'white',
      desc: 'Low Cost Latest Invented Interior Designing The Ideas.'
    },
    {
      img: 'blogD3.png',
      name: 'Interior Design',
      date: '25 December,2022 ',
      bgColor: 'white',
      color: '#F4F0EC',
      desc: `Best For Any Office & Business Interior Of Solution`
    },
    {
      img: 'blogD4.png',
      name: 'Kitchan Design',
      date: '26 December,2022 ',
      bgColor: 'white',
      color: '#F4F0EC',
      desc: `Let’s Get Solution For Building Construction Work`
    },
    {
      img: 'blogD5.png',
      name: 'Living Design',
      date: '25 December,2022 ',
      bgColor: 'white',
      color: '#F4F0EC',
      desc: `Low Cost Latest Invented Interior Designing The Ideas.`
    },
    {
      img: 'blogD6.png',
      name: 'Interior Design',
      date: '22 December,2022',
      bgColor: 'white',
      color: '#F4F0EC',
      desc: `Best For Any Office & Business Interior Of Solution`
    },
  ]

  let oneImg = [
    {
      img: '/blogImg2.png',
      date: '26 December,2022 ',
      desc: 'Low Cost Latest Invented Interior Designing Ideas'
    },
  ]
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <img src="blogImg.png" style={{ width: '100%', height: '400px', backgroundPosition: 'center', objectFit: 'cover', }} alt="" />
        <div style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white', padding: '20px 60px', borderRadius: '30px 30px 0 0', bottom: '0px' }}>
          <p style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600', fontSize: "40px" }}>Articles & News</p>
          <p style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / Blog</p>
        </div>
      </div>


      <div className='containeR' style={{ width: '1050px', borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
        <p style={{ fontWeight: '600', fontSize: "38px", fontFamily: 'serif', paddingTop: '140px' }}>Latest Post</p>
        {
          oneImg.map((e, i) => {
            return <div key={i} style={{ border: '1px solid rgb(0,0,0,0.1)', borderRadius: '30px', width: '100%', marginTop: '15px', padding: '20px', display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'space-between' }}>
              <img src={e.img} style={{ width: '50%', borderRadius: '30px' }} />
              <div style={{ paddingRight: '20px' }}>
                <p style={{ fontWeight: '600', fontSize: "25px", fontFamily: 'serif' }}>{e.desc}</p>
                <p style={{ opacity: '0.9', paddingTop: '20px' }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                <p style={{ opacity: '0.9', paddingTop: '22px' }}>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', justifyContent: "space-between" }}>
                  <p>{e.date}</p>
                  <div>
                    <Link href='/BlogDetails'>
                      <div className='linkH1' style={{ width: "50px", height: '50px', display: 'flex', backgroundColor: '#F4F0EC', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', }}>
                        <ArrowForwardIosIcon style={{ width: '25px', height: '25px' }}></ArrowForwardIosIcon>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          })}


        <p style={{ fontWeight: '600', fontSize: "38px", fontFamily: 'serif', paddingTop: '160px' }}>Articles & News</p>
        <div className='blogCC' style={{ display: 'grid',  gap: '50px 30px', paddingTop: '20px' }}>
          {articlesNews.map((e, i) => {
            return <div key={i} style={{ border: '1px solid rgb(0, 0, 0, 0.1)', padding: '20px', backgroundColor: e.bgColor, borderRadius: '50px' }}>
              <div style={{ position: 'relative' }}>
                <img style={{ width: '100%', objectFit: 'cover', borderRadius: '38px 38px 0 0', height: '200px', backgroundPosition: 'center' }} src={e.img} />
                <p style={{ backgroundColor: 'white', opacity: '0.8', position: 'absolute', bottom: "15px", left: '15px', fontSize: '14px', borderRadius: '8px 8px  8px 0', padding: '7px 12px' }}>{e.name}</p>
              </div>
              <p style={{ fontSize: '24px', paddingTop: '15px', paddingLeft: '5px', fontFamily: 'serif', fontWeight: '600' }}>{e.desc}</p>
              <div style={{ display: 'flex', marginTop: '25px', marginBottom: '10px', marginInline: '5px', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ opacity: '0.8' }}>{e.date}</p>
                <div className='linkH1' style={{ backgroundColor: e.color, padding: '15px 20px', borderRadius: '100%' }}>
                  <Link href={{
                    pathname: '/BlogDetails',
                    query: { name: e.name, date: e.date, desc: e.desc, img: e.img }
                  }}>
                    <div style={{ width: "15px", height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', }}>
                      <ArrowForwardIosIcon style={{ width: '25px', height: '25px' }}></ArrowForwardIosIcon>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>





      <PFixed />
    </div>
  )
}

export default Blog