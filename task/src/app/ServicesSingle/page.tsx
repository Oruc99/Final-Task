import React from 'react'
import PFixed from '../../../Components/PFixed/page'
import LogoSvg from '../../../Components/LogoSvg/page'
import NumbersC from '../../../Components/NumbersC/page'

const ServicesSingle = () => {
    let numbers = [
        {
          nuum: '12',
          info: "Years Of Experiance",
          borderRifht: '2px solid #CDA274',
        },
        {
          nuum: '85',
          info: "Success project",
          borderRifht: '2px solid #CDA274',
        },
        {
          nuum: '15',
          info: "Active Project",
          borderRifht: '2px solid #CDA274',
        },
        {
          nuum: '95',
          info: "Happy CUstomers",
        },
      ]
    let column1 = [
        {
            desc: 'We provide high quality design services.'
        },
        {
            desc: 'Project on time and Latest Design.'
        },
        {
            desc: 'Scientific Skills For getting a better result.'
        },
        {
            desc: 'Renovations Benefit of Service'
        },
        {
            desc: 'We are confident about our projects.'
        },
    ]
    let column2 = [
        {
            desc: 'We provide high quality design services.'
        },
        {
            desc: 'Project on time and Latest Design.'
        },
        {
            desc: 'Scientific Skills For getting a better result.'
        },
        {
            desc: 'Renovations Benefit of Service'
        },
        {
            desc: 'We are confident about our projects.'
        },
    ]
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <img src="/servicesSingleImg.png" style={{ width: '100%', height: '400px', backgroundPosition: 'center', objectFit: 'cover', }} alt="" />
                <div style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white', padding: '20px 60px', borderRadius: '30px 30px 0 0', bottom: '0px' }}>
                    <p style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600', fontSize: "40px" }}>Services Single</p>
                    <p style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / Services Single</p>
                </div>
            </div>

            <div style={{ width: '1050px', borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '160px' }}>
                    <div style={{ width: '45%' }}>
                        <p style={{ fontSize: '45px', fontFamily: 'serif', fontWeight: '600', }}>We set the trends of <br />modern living<br />Services.</p>
                    </div>
                    <div style={{ width: '55%' }}>
                        <p style={{ color: '#CDA274', paddingTop: '10px' }}>It is a long established fact that a reader will be distracted by the of readable content of a page</p>
                        <p style={{ opacity: '0.8', paddingTop: '32px', textAlign: 'justify' }}>when lookings at its layouts the points spriof using that it has a more
                            less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine</p>
                        <p style={{ opacity: '0.8', paddingTop: '32px', textAlign: 'justify' }}>when lookings at its layouts the points spriof using that it has a more
                            less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
                    </div>
                </div>

                <LogoSvg />

                <div style={{ position: 'relative' }}>
                    <img style={{ width: '100%', height: '400px', borderRadius: '30px', objectFit: 'cover', marginTop: '180px' }} src="/servicesSingleImgg1.png" alt="" />
                    <svg style={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} width="132" height="132" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1_2163)">
                            <circle cx="86" cy="76" r="66" fill="white" />
                            <path d="M82.941 91.4289L99.1666 77.7781C99.428 77.558 99.6378 77.2851 99.7817 76.9779C99.9255 76.6708 100 76.3368 100 75.9987C100 75.6607 99.9255 75.3266 99.7817 75.0195C99.6378 74.7123 99.428 74.4394 99.1666 74.2194L82.941 60.5686C81.3923 59.2658 79 60.3459 79 62.3479V89.6534C79 91.6554 81.3923 92.7355 82.941 91.4289Z" fill="#CDA274" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1_2163" x="0" y="0" width="172" height="172" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="10" />
                                <feGaussianBlur stdDeviation="10" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2163" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2163" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </div>


                <div style={{ width: "92%", marginTop: '140px', marginInline: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ width: '49%', display: 'flex', justifyContent: 'center' }}>
                            <div >
                                <p style={{ fontSize: '35px', paddingBottom: '5px', fontFamily: 'serif', fontWeight: '600', }}>Use of Interior</p>
                                {
                                    column1.map((e, i) => {
                                        return <p key={i} style={{ opacity: '0.9', paddingTop: '20px', }}><span style={{ paddingRight: '15px', fontSize: '20px', color: '#CDA274', fontFamily: 'serif' }}>{i + 1}</span>{e.desc}</p>
                                    })
                                }
                            </div>
                        </div>
                        <hr style={{ border: '1px solid rgb(0,0,0,0.1)', height: '270px' }} />
                        <div style={{ width: '49%', display: 'flex', justifyContent: 'center' }}>
                            <div >
                                <p style={{ fontSize: '35px', paddingBottom: '5px', fontFamily: 'serif', fontWeight: '600', }}>Make An Art</p>
                                {
                                    column2.map((e, i) => {
                                        return <p key={i} style={{ opacity: '0.9', paddingTop: '20px', }}><span style={{ paddingRight: '15px', fontSize: '20px', color: '#CDA274', fontFamily: 'serif' }}>{i + 1}</span>{e.desc}</p>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', paddingBottom: "120px", alignItems: 'center', justifyContent: 'space-between', gap: "60px", marginTop: '140px' }}>
                    <img src="servicesSingleImgg2.png" style={{ width: '60%',height:"400px", borderRadius: "55px",objectFit:'cover' }} />
                    <div style={{ width: '50%' }}>
                        <p style={{ fontSize: '38px', fontFamily: 'serif', fontWeight: '600', paddingRight: '15px' }}>We love design.That's how we got here.</p>
                        <p style={{ paddingTop: "25px" }}>It is a long established fact that a reader will be distracted by the of readable content .</p>
                        <button className='btn1' style={{ backgroundColor: '#292F36', padding: "17px 20px", borderRadius: '10px', color: 'white', marginTop: '38px' }}> Our Portfolio<span style={{
                            color: '#CDA274', fontWeight
                                : '600', paddingLeft: '7px'
                        }}>→</span></button>
                    </div>
                </div>


            </div>

           <NumbersC />

            <PFixed />
        </div>
    )
}

export default ServicesSingle