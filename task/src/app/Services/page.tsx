import React from 'react'
import Link from 'next/link'
import PFixed from '../../../Components/PFixed/page'

const Services = () => {
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <img src="/servicesImg.png" style={{ width: '100%', height: '400px', backgroundPosition: 'center', objectFit: 'cover', }} alt="" />
                <div className='pageHeadD' style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white',  borderRadius: '30px 30px 0 0', bottom: '0px' }}>
                    <p className='pageHeadP1' style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600',  }}>Services</p>
                    <p className='pageHeadP2' style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / Services</p>
                </div>
            </div>

            <div className='containeR' style={{  borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
                <div className='servicesHeaD' style={{ display: "grid",gap:'30px 50px', paddingTop: "130px" }}>
                    <div style={{ padding: '20px', textAlign: 'center', paddingBlock: '60px' }}>
                        <h1 style={{ fontSize: '28px', fontFamily: "serif", fontWeight: '600' }}>Project Plan</h1>
                        <p className='servicesInfoP' style={{ paddingBlock: "17px", opacity: "0.8",  }}>There are many variations of the<br /> passages of lorem Ipsum from<br /> available, majority.</p>
                        <Link className='btnB' href='/ServicesSingle' style={{ fontWeight: '600', marginTop: "17px" }}>Read More <span style={{ color: '#CDA274', paddingLeft: '7px', fontWeight: '600' }}>→</span></Link>
                    </div>
                    <div style={{ padding: '20px', textAlign: 'center', paddingBlock: '60px' }}>
                        <h1 style={{ fontSize: '28px', fontFamily: "serif", fontWeight: '600' }}>Interior Work</h1>
                        <p className='servicesInfoP' style={{ paddingBlock: "17px", opacity: "0.8",  }}>There are many variations of the<br /> passages of lorem Ipsum from<br /> available, majority.</p>
                        <Link className='btnB' href='/ServicesSingle' style={{ fontWeight: '600', marginTop: "17px" }}>Read More <span style={{ color: '#CDA274', paddingLeft: '7px', fontWeight: '600' }}>→</span></Link>
                    </div>
                    <div style={{ padding: '20px', textAlign: 'center', paddingBlock: '60px' }}>
                        <h1 style={{ fontSize: '28px', fontFamily: "serif", fontWeight: '600' }}>Realization</h1>
                        <p className='servicesInfoP' style={{ paddingBlock: "17px", opacity: "0.8",  }}>There are many variations of the<br /> passages of lorem Ipsum from<br /> available, majority.</p>
                        <Link className='btnB' href='/ServicesSingle' style={{ fontWeight: '600', marginTop: "17px" }}>Read More <span style={{ color: '#CDA274', paddingLeft: '7px', fontWeight: '600' }}>→</span></Link>
                    </div>
               


                    <div style={{ padding: '20px', textAlign: 'center', paddingBlock: '60px' }}>
                        <h1 style={{ fontSize: '28px', fontFamily: "serif", fontWeight: '600' }}>2d/3d Art Work</h1>
                        <p className='servicesInfoP' style={{ paddingBlock: "17px", opacity: "0.8",  }}>There are many variations of the<br /> passages of lorem Ipsum from<br /> available, majority.</p>
                        <Link className='btnB' href='/ServicesSingle' style={{ fontWeight: '600', marginTop: "17px" }}>Read More <span style={{ color: '#CDA274', paddingLeft: '7px', fontWeight: '600' }}>→</span></Link>
                    </div>
                    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F4F0EC', borderRadius: '30px', paddingBlock: '60px' }}>
                        <h1 style={{ fontSize: '28px', fontFamily: "serif", fontWeight: '600' }}>Interior Work</h1>
                        <p className='servicesInfoP' style={{ paddingBlock: "17px", opacity: "0.8",  }}>There are many variations of the<br /> passages of lorem Ipsum from<br /> available, majority.</p>
                        <Link className='btnB' href='/ServicesSingle' style={{ fontWeight: '600', marginTop: "17px" }}>Read More <span style={{ color: '#CDA274', paddingLeft: '7px', fontWeight: '600' }}>→</span></Link>
                    </div>
                    <div style={{ padding: '20px', textAlign: 'center', paddingBlock: '60px' }}>
                        <h1 style={{ fontSize: '28px', fontFamily: "serif", fontWeight: '600' }}>Decoration Work</h1>
                        <p className='servicesInfoP' style={{ paddingBlock: "17px", opacity: "0.8",  }}>There are many variations of the<br /> passages of lorem Ipsum from<br /> available, majority.</p>
                        <Link className='btnB' href='/ServicesSingle' style={{ fontWeight: '600', marginTop: "17px" }}>Read More <span style={{ color: '#CDA274', paddingLeft: '7px', fontWeight: '600' }}>→</span></Link>
                    </div>
                </div>

                <div className='servicesMain' style={{ width: "100%", backgroundColor: '#F4F0EC', borderRadius: '45px', marginTop: '200px' }}>
                    <p className='pTitle' style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: '600', paddingTop: '85px' }}>How We Work</p>
                    <p className='pInfo' style={{ textAlign: 'center',  opacity: '0.7', paddingTop: '15px' }}>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of <br />the printing and typesetting industry.</p>

                    <div className="servicesGap" style={{ display: 'flex',  marginTop: '110px', alignItems: 'center' }}>
                        <img className='servicesWorkImg'   style={{ width: "46%",  objectFit: 'cover', borderRadius: '0 80px 0 270px', objectPosition: 'right center' }} src="/servicesWork1.png" />

                        <div style={{ width: "50%" }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <svg  viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M92.5 89.8347H89.5322V92.8025H92.5V89.8347Z" fill="#CDA274" />
                                    <path d="M71.7258 15.6412V3.77023H47.9839V0.80249H45.0161V3.77023H21.2742V35.833L12.371 30.6932V30.4799H12.0037L11.6828 30.2944L11.5752 30.4799H0.5V51.2541C0.5 54.5279 3.16169 57.1896 6.43548 57.1896H21.2742V63.1251H34.3026L28.9606 89.8347H0.5V92.8025H86.5645V89.8347H64.0394L58.6974 63.1251H71.7258V39.3831H83.5968V36.4154H81.0445L83.7303 25.6759L78.2289 18.8C83.799 19.7756 88.0484 24.6353 88.0484 30.4799H91.0161C91.0161 25.6239 88.6605 21.317 85.0417 18.6089H92.5V15.6412H71.7258ZM9.40323 51.2541C9.40323 52.8901 8.07145 54.2218 6.43548 54.2218C4.79952 54.2218 3.46774 52.8901 3.46774 51.2541V33.4477H9.40323V51.2541ZM20.3709 39.7819L23.3386 44.9198L13.7491 50.4584L19.6827 40.1789L20.3709 39.7819ZM12.371 35.0391L12.7698 34.3472L17.9077 37.315L12.371 46.9082V35.0391ZM13.163 54.2218L23.4444 48.2864H24.2419V54.2218H13.163ZM45.0161 89.8347H31.9877L37.3297 63.1251H45.0161V89.8347ZM61.0123 89.8347H47.9839V63.1251H55.6703L61.0123 89.8347ZM68.6245 25.6759L71.3103 36.4154H68.7581V60.1573H24.2419V57.1896H27.2097V46.1125L27.3933 46.0049L27.2097 45.6877V45.3186H26.9964L24.2419 40.548V6.73797H68.7581V15.6412H59.8548V18.6089H67.3131C63.6944 21.317 61.3387 25.6239 61.3387 30.4799H64.3065C64.3065 24.6353 68.5559 19.7756 74.126 18.7981L68.6245 25.6759ZM80.4955 26.3826L77.9877 36.4154H74.3671L71.8594 26.3807L74.6936 22.838V28.996H77.6613V22.8398L80.4955 26.3826Z" fill="#CDA274" />
                                    <path d="M33.1451 12.6734H30.1774V15.6411H33.1451V12.6734Z" fill="#CDA274" />
                                    <path d="M62.8225 51.2541H59.8548V54.2218H62.8225V51.2541Z" fill="#CDA274" />
                                    <path d="M59.8549 33.4476C59.8549 26.0839 53.8637 20.0927 46.5 20.0927C44.0999 20.0927 41.8499 20.7382 39.9005 21.8511L35.8291 16.2532L33.429 17.9986L37.5059 23.604C34.8331 26.0468 33.1452 29.5487 33.1452 33.4476C33.1452 40.8113 39.1363 46.8024 46.5 46.8024C48.9002 46.8024 51.1501 46.1569 53.0995 45.044L57.1709 50.6419L59.5711 48.8965L55.4941 43.2912C58.167 40.8484 59.8549 37.3465 59.8549 33.4476ZM46.5 43.8347C40.7741 43.8347 36.1129 39.1735 36.1129 33.4476C36.1129 30.5355 37.3223 27.9016 39.2606 26.0152L51.343 42.6309C49.8944 43.3951 48.2491 43.8347 46.5 43.8347ZM41.657 24.2661C43.1057 23.5001 44.7509 23.0605 46.5 23.0605C52.2259 23.0605 56.8871 27.7217 56.8871 33.4476C56.8871 36.3597 55.6778 38.9936 53.7395 40.8799L41.657 24.2661Z" fill="#CDA274" />
                                </svg>
                                <svg  viewBox="0 0 98 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.0263 80.6025C23.2263 80.6025 18.7063 79.2425 14.4663 76.5225C10.3063 73.8025 6.94625 69.5225 4.38625 63.6825C1.82625 57.8425 0.54625 50.2425 0.54625 40.8825C0.54625 31.4425 1.82625 23.8025 4.38625 17.9625C6.94625 12.0425 10.3063 7.72249 14.4663 5.00249C18.7063 2.28249 23.2263 0.922484 28.0263 0.922484C32.8263 0.922484 37.3063 2.28249 41.4663 5.00249C45.7063 7.72249 49.1063 12.0425 51.6663 17.9625C54.3063 23.8025 55.6263 31.4425 55.6263 40.8825C55.6263 50.2425 54.3063 57.8425 51.6663 63.6825C49.1063 69.5225 45.7063 73.8025 41.4663 76.5225C37.3063 79.2425 32.8263 80.6025 28.0263 80.6025ZM28.0263 78.2025C30.0263 78.2025 31.7063 77.6825 33.0663 76.6425C34.5063 75.6025 35.6663 73.7225 36.5463 71.0025C37.4263 68.2825 38.0663 64.5225 38.4663 59.7225C38.8663 54.8425 39.0663 48.5625 39.0663 40.8825C39.0663 33.2025 38.8663 26.9225 38.4663 22.0425C38.0663 17.0825 37.4263 13.2425 36.5463 10.5225C35.6663 7.80249 34.5063 5.92248 33.0663 4.88248C31.7063 3.84249 30.0263 3.32249 28.0263 3.32249C26.0263 3.32249 24.3063 3.84249 22.8663 4.88248C21.5063 5.92248 20.3863 7.80249 19.5063 10.5225C18.6263 13.1625 17.9863 16.9625 17.5863 21.9225C17.1863 26.8025 16.9863 33.1225 16.9863 40.8825C16.9863 48.5625 17.1863 54.8425 17.5863 59.7225C17.9863 64.6025 18.6263 68.4025 19.5063 71.1225C20.3863 73.7625 21.5063 75.6025 22.8663 76.6425C24.3063 77.6825 26.0263 78.2025 28.0263 78.2025ZM61.5006 78.8025V77.6025L66.1806 76.1625C69.2206 75.1225 70.7406 73.0825 70.7406 70.0425V11.9625L61.0206 13.2825V11.7225C65.7406 10.7625 70.2606 9.40248 74.5806 7.64248C78.9806 5.88249 83.1006 3.84249 86.9406 1.52248L88.5006 2.60248L88.0206 19.7625V70.0425C88.0206 73.1625 89.5406 75.1625 92.5806 76.0425L97.5006 77.6025V78.8025H61.5006Z" fill="white" />
                                </svg>
                            </div>
                            <p className='servicesWorkH1' style={{  paddingTop: '45px', fontWeight: '600', fontFamily: 'serif' }}>Concept & Details</p>
                            <p className='servicesWorkInfo' style={{ paddingTop: '5px', opacity: '0.9' }}>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
                        </div>
                    </div>

                    <div className="servicesGap" style={{ display: 'flex',  marginTop: '90px', alignItems: 'center' }}>
                        <div style={{ width: "50%" }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <svg  viewBox="0 0 86 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M58.7669 76.3741H55.9003V69.2075V14.7408C55.9003 14.4541 55.7569 14.0241 55.6136 13.8808L51.4569 1.4108C51.3136 0.837471 50.7403 0.407471 50.1669 0.407471C49.5936 0.407471 49.0203 0.837471 48.8769 1.4108L44.7203 13.8808C44.5769 14.1675 44.4336 14.4541 44.4336 14.7408V69.2075V84.9741C44.4336 85.8341 45.0069 86.4075 45.8669 86.4075H54.4669C55.3269 86.4075 55.9003 85.8341 55.9003 84.9741V79.2408H60.2003C61.0603 79.2408 61.6336 78.6675 61.6336 77.8075V34.8075H58.7669V76.3741ZM47.3003 16.1741H53.0336V67.7741H47.3003V16.1741ZM50.1669 6.42747L52.4603 13.3075H47.8736L50.1669 6.42747ZM53.0336 83.5408H47.3003V70.6408H53.0336V83.5408Z" fill="#CDA274" />
                                    <path d="M84.5662 0.407471H68.7995C67.9395 0.407471 67.3662 0.980804 67.3662 1.8408V84.9741C67.3662 85.8341 67.9395 86.4075 68.7995 86.4075H84.5662C85.4262 86.4075 85.9995 85.8341 85.9995 84.9741V1.8408C85.9995 0.980804 85.4262 0.407471 84.5662 0.407471ZM83.1329 83.5408H70.2329V73.5075H77.3995V70.6408H70.2329V59.1741H77.3995V56.3075H70.2329V44.8408H77.3995V41.9741H70.2329V30.5075H77.3995V27.6408H70.2329V16.1741H77.3995V13.3075H70.2329V3.27414H83.1329V83.5408Z" fill="#CDA274" />
                                    <path d="M20.0667 14.7408C9.03 14.7408 0 23.7708 0 34.8075C0 42.5475 4.44333 49.5708 11.4667 52.8675V63.4742V70.6408C11.4667 71.5008 12.04 72.0742 12.9 72.0742H18.6333V76.3742H21.5V72.0742H27.2333C28.0933 72.0742 28.6667 71.5008 28.6667 70.6408V63.4742V52.8675C35.69 49.5708 40.1333 42.5475 40.1333 34.8075C40.1333 23.7708 31.1033 14.7408 20.0667 14.7408ZM25.8 69.2075H14.3333V64.9075H25.8V69.2075ZM26.66 50.7175C26.0867 50.8608 25.8 51.4342 25.8 52.0075V62.0408H14.3333V59.1742H21.5V56.3075H14.3333V52.0075C14.3333 51.4342 14.0467 50.8608 13.4733 50.7175C7.02333 47.9942 2.86667 41.6875 2.86667 34.8075C2.86667 25.3475 10.6067 17.6075 20.0667 17.6075C29.5267 17.6075 37.2667 25.3475 37.2667 34.8075C37.2667 41.6875 33.11 47.9942 26.66 50.7175Z" fill="#CDA274" />
                                    <path d="M23.3637 26.6375L20.067 29.9341L16.7703 26.6375L14.7637 28.6441L18.6337 32.5141V47.7075H21.5003V32.5141L25.3703 28.6441L23.3637 26.6375Z" fill="#CDA274" />
                                </svg>

                                <svg  viewBox="0 0 118 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.0692 80.2075C23.2692 80.2075 18.7492 78.8475 14.5092 76.1275C10.3492 73.4075 6.98922 69.1275 4.42922 63.2875C1.86922 57.4475 0.589219 49.8475 0.589219 40.4875C0.589219 31.0475 1.86922 23.4075 4.42922 17.5675C6.98922 11.6475 10.3492 7.32747 14.5092 4.60747C18.7492 1.88747 23.2692 0.527465 28.0692 0.527465C32.8692 0.527465 37.3492 1.88747 41.5092 4.60747C45.7492 7.32747 49.1492 11.6475 51.7092 17.5675C54.3492 23.4075 55.6692 31.0475 55.6692 40.4875C55.6692 49.8475 54.3492 57.4475 51.7092 63.2875C49.1492 69.1275 45.7492 73.4075 41.5092 76.1275C37.3492 78.8475 32.8692 80.2075 28.0692 80.2075ZM28.0692 77.8075C30.0692 77.8075 31.7492 77.2875 33.1092 76.2475C34.5492 75.2075 35.7092 73.3275 36.5892 70.6075C37.4692 67.8875 38.1092 64.1275 38.5092 59.3275C38.9092 54.4475 39.1092 48.1675 39.1092 40.4875C39.1092 32.8075 38.9092 26.5275 38.5092 21.6475C38.1092 16.6875 37.4692 12.8475 36.5892 10.1275C35.7092 7.40747 34.5492 5.52746 33.1092 4.48746C31.7492 3.44747 30.0692 2.92747 28.0692 2.92747C26.0692 2.92747 24.3492 3.44747 22.9092 4.48746C21.5492 5.52746 20.4292 7.40747 19.5492 10.1275C18.6692 12.7675 18.0292 16.5675 17.6292 21.5275C17.2292 26.4075 17.0292 32.7275 17.0292 40.4875C17.0292 48.1675 17.2292 54.4475 17.6292 59.3275C18.0292 64.2075 18.6692 68.0075 19.5492 70.7275C20.4292 73.3675 21.5492 75.2075 22.9092 76.2475C24.3492 77.2875 26.0692 77.8075 28.0692 77.8075ZM66.4636 22.4875L67.3036 5.44747C69.7036 4.08747 72.6636 2.92747 76.1836 1.96747C79.7836 1.00747 83.8236 0.527465 88.3036 0.527465C94.7036 0.527465 99.8636 1.44746 103.784 3.28747C107.704 5.04747 110.584 7.48747 112.424 10.6075C114.264 13.7275 115.184 17.2475 115.184 21.1675C115.184 26.6875 112.504 32.0875 107.144 37.3675C101.784 42.5675 94.4636 48.3275 85.1836 54.6475C83.4236 55.9275 81.3436 57.4875 78.9436 59.3275C76.5436 61.1675 74.3036 62.9675 72.2236 64.7275H117.224V78.4075H64.4236V68.3275C67.3036 65.5275 70.1036 62.7675 72.8236 60.0475C75.6236 57.2475 78.2636 54.6075 80.7436 52.1275C86.5036 46.2075 90.7836 40.9675 93.5836 36.4075C96.4636 31.7675 97.9036 26.8075 97.9036 21.5275C97.9036 16.0075 96.9036 11.5675 94.9036 8.20747C92.9036 4.76747 89.9036 3.04747 85.9036 3.04747C83.4236 3.04747 81.1036 3.68747 78.9436 4.96746C76.8636 6.16747 75.0236 8.28747 73.4236 11.3275L67.6636 22.4875H66.4636Z" fill="white" />
                                </svg>

                            </div>
                            <p className='servicesWorkH1' style={{  paddingTop: '45px', fontWeight: '600', fontFamily: 'serif' }}>Idea for Work</p>
                            <p className='servicesWorkInfo' style={{ paddingTop: '5px', opacity: '0.9' }}>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
                        </div>
                        <img className='servicesWorkImg' style={{ width: "46%",  objectFit: 'cover', borderRadius: '0 80px 0 270px', objectPosition: 'right center' }} src="/servicesWork2.png" />
                    </div>

                    <div className="servicesGap" style={{ display: 'flex',  marginTop: '90px', alignItems: 'center' }}>
                        <img className='servicesWorkImg'   style={{ width: "46%",  objectFit: 'cover', borderRadius: '0 80px 0 270px', objectPosition: 'right center' }} src="/servicesWork3.png" />
                        <div style={{ width: "50%" }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <svg  viewBox="0 0 90 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M90 42.6092V38.9639L46.9216 7.77052H43.0784L33.3871 14.7872V9.22213H36.2903V0.512451H7.25806V9.22213H10.1613V31.606L0 38.9639V42.6092H7.25806V64.3834H0V84.706H7.25806V90.5125H82.7419V60.0286C86.7448 60.0286 90 56.7733 90 52.7705C90 48.7677 86.7448 45.5125 82.7419 45.5125V42.6092H90ZM10.1613 3.41568H33.3871V6.3189H10.1613V3.41568ZM30.4839 9.22213V16.8903L13.0645 29.5048V9.22213H30.4839ZM5.80645 75.9963V81.8028H2.90323V67.2866H69.6774V81.8028H66.7742V75.9963H63.871V81.8028H60.9677V75.9963H58.0645V81.8028H55.1613V75.9963H52.2581V81.8028H49.3548V75.9963H46.4516V81.8028H43.5484V75.9963H40.6452V81.8028H37.7419V75.9963H34.8387V81.8028H31.9355V75.9963H29.0323V81.8028H26.129V75.9963H23.2258V81.8028H20.3226V75.9963H17.4194V81.8028H14.5161V75.9963H11.6129V81.8028H8.70968V75.9963H5.80645ZM79.8387 87.6092H10.1613V84.706H72.5807V64.3834H10.1613V42.6092H79.8387V45.5125H27.1415L16.2544 52.7705L27.1415 60.0286H79.8387V87.6092ZM76.9355 48.4157V57.1254H74.0323V48.4157H76.9355ZM30.4839 51.3189V48.4157H71.129V51.3189H30.4839ZM71.129 54.2221V57.1254H30.4839V54.2221H71.129ZM27.5806 48.7096V56.8332L21.4875 52.7705L27.5806 48.7096ZM87.0968 52.7705C87.0968 55.1711 85.1425 57.1254 82.7419 57.1254H79.8387V48.4157H82.7419C85.1425 48.4157 87.0968 50.3699 87.0968 52.7705ZM3.92661 39.706L44.0183 10.6737H45.9817L86.0734 39.706H3.92661Z" fill="#CDA274" />
                                    <path d="M45 15.0281C38.5966 15.0281 33.3871 20.2376 33.3871 26.641C33.3871 33.0444 38.5966 38.2539 45 38.2539C51.4034 38.2539 56.6129 33.0444 56.6129 26.641C56.6129 20.2376 51.4034 15.0281 45 15.0281ZM45 35.3507C40.197 35.3507 36.2903 31.444 36.2903 26.641C36.2903 21.838 40.197 17.9313 45 17.9313C49.803 17.9313 53.7097 21.838 53.7097 26.641C53.7097 31.444 49.803 35.3507 45 35.3507Z" fill="#CDA274" />
                                </svg>


                                <svg  viewBox="0 0 118 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.5692 79.8125C22.7692 79.8125 18.2492 78.4525 14.0092 75.7325C9.84922 73.0125 6.48922 68.7325 3.92922 62.8925C1.36922 57.0524 0.089219 49.4524 0.089219 40.0924C0.089219 30.6524 1.36922 23.0124 3.92922 17.1724C6.48922 11.2524 9.84922 6.93245 14.0092 4.21245C18.2492 1.49245 22.7692 0.132445 27.5692 0.132445C32.3692 0.132445 36.8492 1.49245 41.0092 4.21245C45.2492 6.93245 48.6492 11.2524 51.2092 17.1724C53.8492 23.0124 55.1692 30.6524 55.1692 40.0924C55.1692 49.4524 53.8492 57.0524 51.2092 62.8925C48.6492 68.7325 45.2492 73.0125 41.0092 75.7325C36.8492 78.4525 32.3692 79.8125 27.5692 79.8125ZM27.5692 77.4125C29.5692 77.4125 31.2492 76.8925 32.6092 75.8525C34.0492 74.8125 35.2092 72.9325 36.0892 70.2125C36.9692 67.4925 37.6092 63.7325 38.0092 58.9325C38.4092 54.0524 38.6092 47.7724 38.6092 40.0924C38.6092 32.4124 38.4092 26.1324 38.0092 21.2524C37.6092 16.2924 36.9692 12.4524 36.0892 9.73245C35.2092 7.01245 34.0492 5.13245 32.6092 4.09244C31.2492 3.05245 29.5692 2.53245 27.5692 2.53245C25.5692 2.53245 23.8492 3.05245 22.4092 4.09244C21.0492 5.13245 19.9292 7.01245 19.0492 9.73245C18.1692 12.3724 17.5292 16.1724 17.1292 21.1324C16.7292 26.0124 16.5292 32.3324 16.5292 40.0924C16.5292 47.7724 16.7292 54.0524 17.1292 58.9325C17.5292 63.8125 18.1692 67.6125 19.0492 70.3325C19.9292 72.9725 21.0492 74.8125 22.4092 75.8525C23.8492 76.8925 25.5692 77.4125 27.5692 77.4125ZM88.1636 79.8125C82.8036 79.8125 78.4036 79.2125 74.9636 78.0125C71.6036 76.8125 68.2836 75.4125 65.0036 73.8125L66.3236 58.2125H67.5236L72.8036 67.9325C76.3236 74.2525 81.2036 77.4125 87.4436 77.4125C91.1236 77.4125 94.0836 75.8925 96.3236 72.8525C98.6436 69.7325 99.8036 64.5325 99.8036 57.2525C99.8036 50.9325 98.8436 46.4125 96.9236 43.6924C95.0036 40.8924 91.7236 39.4924 87.0836 39.4924H79.8836V37.0924H86.2436C90.4836 37.0924 93.5236 35.8124 95.3636 33.2524C97.2836 30.6924 98.2436 26.2524 98.2436 19.9324C98.2436 13.7724 97.3236 9.41245 95.4836 6.85244C93.6436 4.21245 91.2036 2.89245 88.1636 2.89245C85.1236 2.89245 82.5636 3.77245 80.4836 5.53245C78.4836 7.29245 76.8436 9.37245 75.5636 11.7724L70.1636 21.8524L68.9636 21.7324L70.1636 4.09244C72.7236 2.97244 75.5636 2.05244 78.6836 1.33244C81.8836 0.532445 85.4436 0.132445 89.3636 0.132445C97.7636 0.132445 104.124 1.97245 108.444 5.65245C112.844 9.25245 115.044 13.7724 115.044 19.2125C115.044 23.1324 113.364 26.8924 110.004 30.4924C106.644 34.0124 101.364 36.4524 94.1636 37.8125C102.324 38.5325 108.244 40.7325 111.924 44.4125C115.604 48.0925 117.444 52.5324 117.444 57.7324C117.444 61.8925 116.244 65.6525 113.844 69.0125C111.524 72.3725 108.164 75.0125 103.764 76.9325C99.4436 78.8525 94.2436 79.8125 88.1636 79.8125Z" fill="white" />
                                </svg>


                            </div>
                            <p className='servicesWorkH1' style={{  paddingTop: '45px', fontWeight: '600', fontFamily: 'serif' }}>Design</p>
                            <p className='servicesWorkInfo' style={{ paddingTop: '5px', opacity: '0.9' }}>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
                        </div>
                    </div>

                    <div className="servicesGap" style={{ display: 'flex',  marginTop: '90px', paddingBottom: '130px', alignItems: 'center' }}>
                        <div style={{ width: "50%" }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <svg  viewBox="0 0 87 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M87 21.1799V0.617432H57.3407V32.9299H51.4088V50.5549H25.7053V68.1799H0V94.6174H80.0801V32.9299H60.3066V21.1799H87ZM60.3066 3.55493H84.0341V18.2424H60.3066V3.55493ZM28.6713 53.4924H51.4107V58.3889H28.6713V53.4924ZM2.96593 71.1174H25.7053V76.0139H2.96593V71.1174ZM77.1142 91.6799H2.96593V78.9514H25.7053V85.3166H28.6713V61.3264H51.4107V71.6076H54.3766V43.7014H77.1142V91.6799ZM77.1142 35.8674V40.7639H54.3748V35.8674H77.1142Z" fill="#CDA274" />
                                    <path d="M79.5852 6.49243H72.6653V9.42993H79.5852V6.49243Z" fill="#CDA274" />
                                    <path d="M79.585 12.3674H64.7554V15.3049H79.585V12.3674Z" fill="#CDA274" />
                                    <path d="M32.1303 11.3889V14.3264H40.4145L3.39966 50.9845L5.49805 53.0628L42.511 16.4028V22.6487H45.4769V11.3889H32.1303Z" fill="#CDA274" />
                                    <path d="M9.39072 81.8889H5.43677V84.8264H9.39072V81.8889Z" fill="#CDA274" />
                                    <path d="M23.2325 81.8889H19.2786V84.8264H23.2325V81.8889Z" fill="#CDA274" />
                                    <path d="M35.0963 64.2639H31.1423V67.2014H35.0963V64.2639Z" fill="#CDA274" />
                                    <path d="M48.9378 64.2639H44.9839V67.2014H48.9378V64.2639Z" fill="#CDA274" />
                                    <path d="M60.8016 46.6389H56.8477V49.5764H60.8016V46.6389Z" fill="#CDA274" />
                                    <path d="M74.6412 46.6389H70.6873V49.5764H74.6412V46.6389Z" fill="#CDA274" />
                                </svg>
                                <svg  viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.7177 79.9174C22.9177 79.9174 18.3977 78.5574 14.1577 75.8374C9.99766 73.1174 6.63766 68.8374 4.07766 62.9974C1.51766 57.1574 0.237656 49.5574 0.237656 40.1974C0.237656 30.7574 1.51766 23.1174 4.07766 17.2774C6.63766 11.3574 9.99766 7.03743 14.1577 4.31743C18.3977 1.59743 22.9177 0.237426 27.7177 0.237426C32.5177 0.237426 36.9977 1.59743 41.1577 4.31743C45.3977 7.03743 48.7977 11.3574 51.3577 17.2774C53.9977 23.1174 55.3177 30.7574 55.3177 40.1974C55.3177 49.5574 53.9977 57.1574 51.3577 62.9974C48.7977 68.8374 45.3977 73.1174 41.1577 75.8374C36.9977 78.5574 32.5177 79.9174 27.7177 79.9174ZM27.7177 77.5174C29.7177 77.5174 31.3977 76.9974 32.7577 75.9574C34.1977 74.9174 35.3577 73.0374 36.2377 70.3174C37.1177 67.5974 37.7577 63.8374 38.1577 59.0374C38.5577 54.1574 38.7577 47.8774 38.7577 40.1974C38.7577 32.5174 38.5577 26.2374 38.1577 21.3574C37.7577 16.3974 37.1177 12.5574 36.2377 9.83743C35.3577 7.11743 34.1977 5.23743 32.7577 4.19742C31.3977 3.15743 29.7177 2.63743 27.7177 2.63743C25.7177 2.63743 23.9977 3.15743 22.5577 4.19742C21.1977 5.23743 20.0777 7.11743 19.1977 9.83743C18.3177 12.4774 17.6777 16.2774 17.2777 21.2374C16.8777 26.1174 16.6777 32.4374 16.6777 40.1974C16.6777 47.8774 16.8777 54.1574 17.2777 59.0374C17.6777 63.9174 18.3177 67.7174 19.1977 70.4374C20.0777 73.0774 21.1977 74.9174 22.5577 75.9574C23.9977 76.9974 25.7177 77.5174 27.7177 77.5174ZM92.272 78.1174V58.6774H60.712V51.8374L95.872 1.07743H107.632V49.7974H119.032V58.6774H107.632V78.1174H92.272ZM65.992 49.7974H92.272V11.9974L65.992 49.7974Z" fill="white" />
                                </svg>
                            </div>
                            <p className='servicesWorkH1' style={{  paddingTop: '45px', fontWeight: '600', fontFamily: 'serif' }}>Perfection</p>
                            <p className='servicesWorkInfo' style={{ paddingTop: '5px', opacity: '0.9' }}>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
                        </div>
                        <img className='servicesWorkImg' style={{ width: "46%",  objectFit: 'cover', borderRadius: '0 80px 0 270px', objectPosition: 'right center' }} src="/servicesWork4.png" />
                    </div>
                </div>

                <div style={{ width: '100%', backgroundColor: '#292F36', marginTop: '180px',paddingBottom:'50px', padding: '45px', borderRadius: '45px' }}>
                    <p className='contacTP1' style={{ textAlign: 'center', color: 'white',  paddingTop: '20px', fontFamily: 'serif' }}>Wanna join the interno?</p>
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

export default Services