import React from 'react'
import PFixed from '../../../Components/PFixed/page';
import PeopleThinkC from '../../../Components/PeopleThinkC/page';
import ContactInp from '../../../Components/ContactInp/page';




const About = () => {
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <img src="/aboutImg.png" style={{ width: '100%', height: '400px', backgroundPosition: 'center', objectFit: 'cover', }} alt="" />
                <div style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white', padding: '20px 60px', borderRadius: '30px 30px 0 0', bottom: '0px' }}>
                    <p style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600', fontSize: "40px" }}>About Us</p>
                    <p style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / About Us</p>
                </div>
            </div>

            <div className='containeR' style={{borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
                <div style={{ paddingTop: '190px', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <svg width="901" height="454" viewBox="0 0 901 454" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M700 441H818.5C857.16 441 888.5 409.66 888.5 371L888.5 83C888.5 44.34 857.16 13 818.5 13L700 13" stroke="#F4F0EC" stroke-width="25" />
                            <path d="M201.5 13H83C44.3401 13 13 44.3401 13 83V371C13 409.66 44.3401 441 83 441H201.5" stroke="#F4F0EC" stroke-width="25" />
                        </svg>
                    </div>
                    <div style={{ position: 'absolute', top: '48%', translate: "-50% 0", left: '50%' }}>
                        <svg style={{ margin: "auto" }} width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.84309 24.07C4.97309 24.07 3.44309 23.4467 2.25309 22.2C1.11975 20.9533 0.553086 19.2817 0.553086 17.185C0.553086 13.5017 1.77142 10.3 4.20809 7.58C6.70142 4.86 9.67642 2.62166 13.1331 0.864999L13.9831 2.31C12.5664 3.21666 11.2348 4.37833 9.98809 5.795C8.79809 7.21167 7.86309 8.74167 7.18309 10.385L9.56309 12.17C10.5264 12.7933 11.3198 13.6433 11.9431 14.72C12.5664 15.74 12.8781 16.7317 12.8781 17.695C12.8781 19.5083 12.3114 21.0383 11.1781 22.285C10.1014 23.475 8.65642 24.07 6.84309 24.07ZM24.3531 24.07C22.4831 24.07 20.9531 23.4467 19.7631 22.2C18.6298 20.9533 18.0631 19.2817 18.0631 17.185C18.0631 13.5017 19.2814 10.3 21.7181 7.58C24.2114 4.86 27.1864 2.62166 30.6431 0.864999L31.4931 2.31C30.0764 3.21666 28.7448 4.37833 27.4981 5.795C26.3081 7.21167 25.3731 8.74167 24.6931 10.385L27.0731 12.17C28.0364 12.7933 28.8298 13.6433 29.4531 14.72C30.0764 15.74 30.3881 16.7317 30.3881 17.695C30.3881 19.5083 29.8214 21.0383 28.6881 22.285C27.6114 23.475 26.1664 24.07 24.3531 24.07Z" fill="#292F36" />
                        </svg>
                        <p className='aboutHeadP1' style={{ textAlign: 'center', paddingBlock: '30px', fontWeight: '600',  fontFamily: 'serif' }}>I like an interior that defies labeling. I don't <br />really want someone to walk into a room and <br />know that I did it</p>
                        <p className='aboutHeadP2' style={{ textAlign: 'center' }}>-BUNNY WILLIAMS</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: "90px", marginTop: '240px' }}>
                    <div style={{ width: '50%' }}>
                        <p className='abouTh1' style={{  fontFamily: 'serif', fontWeight: '600' }}>What We Do</p>
                        <p className='abouTp' style={{ paddingTop: "35px" }}>
                            It is a long established fact that a reader will be distracted by the of readable content of a page
                            when lookings at its layouts the points of using
                            that it has a more-or-less normal.</p>
                        <button className='btn1' style={{ backgroundColor: '#292F36', padding: "17px 20px", borderRadius: '10px', color: 'white', marginTop: '38px' }}>Our Concept <span style={{
                            color: '#CDA274', fontWeight
                                : '600', paddingLeft: '7px'
                        }}>→</span></button>
                    </div>
                    <img src="/aboutImg2.png" style={{ width: '50%', borderRadius: "55px" }} />
                </div>



                <div style={{ display: 'flex', paddingBottom: "120px", alignItems: 'center', justifyContent: 'space-between', gap: "90px", marginTop: '140px' }}>
                    <img src="/aboutImg3.png" style={{ width: '50%', borderRadius: "55px" }} />
                    <div style={{ width: '50%' }}>
                        <p className='abouTh1' style={{  fontFamily: 'serif', fontWeight: '600' }}>The End Result</p>
                        <p className='abouTp' style={{ paddingTop: "35px" }}>
                            It is a long established fact that a reader will be distracted by the of readable content of a page
                            when lookings at its layouts the points of using
                            that it has a more-or-less normal.</p>
                        <button className='btn1' style={{ backgroundColor: '#292F36', padding: "17px 20px", borderRadius: '10px', color: 'white', marginTop: '38px' }}>Our Portfolio <span style={{
                            color: '#CDA274', fontWeight
                                : '600', paddingLeft: '7px'
                        }}>→</span></button>
                    </div>
                </div>

            </div>

           <PeopleThinkC />


            <div className='containeR' style={{ borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
                <p className='peopleThinkH1' style={{  fontFamily: 'serif', fontWeight: '600', textAlign: 'center', paddingTop: '190px' }}>Creative project? Let's have<br />a productive tal</p>
            <ContactInp />
                
            </div>






            <PFixed />
        </div>
    )
}

export default About