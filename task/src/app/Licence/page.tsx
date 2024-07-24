import React from 'react'
import PFixed from '../../../Components/PFixed/page'

const Licenses = () => {
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <img src="/licenceImg.png" style={{ width: '100%', height: '400px', objectPosition: ' bottom center', objectFit: 'cover', }} alt="" />
                <div style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white', padding: '20px 60px', borderRadius: '30px 30px 0 0', bottom: '0px' }}>
                    <p style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600', fontSize: "40px" }}>Licenses</p>
                    <p style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / Licenses</p>
                </div>
            </div>


            <div style={{ width: '1050px', borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
                <p style={{ fontWeight: '600', paddingTop: '120px', paddingBottom: '10px', fontSize: "37px", fontFamily: 'serif' }}>Photography</p>
                <p style={{ opacity: '0.9' }}> All images used in the <span style={{ color: "#CDA274" }}>Interno</span> Webflow Ecommerce Template are licensed for free personal<br /> and commercial use. If you'd like to use any specific image, you can check the licenses and<br /> download the images for free on <span style={{ fontWeight: '600' }}>Unsplash, Pexels</span>.</p>

                <div style={{ width: '100%', borderRadius: '35px', backgroundColor: '#F4F0EC', padding: "40px 40px 50px 40px", marginTop: '60px' }}>
                    <p style={{ fontWeight: '600', paddingTop: '20px', paddingBottom: '10px', fontSize: "37px", fontFamily: 'serif' }}>Unsplash</p>
                    <p style={{ opacity: '0.9' }}>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image<br /> 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '45px' }}>
                        <img style={{ height: '300px', objectFit: 'cover', borderRadius: '30px', width: "300px" }} src="/licenceD1.png" />
                        <img style={{ height: '300px', objectFit: 'cover', borderRadius: '30px', width: "300px" }} src="/licenceD2.png" />
                        <img style={{ height: '300px', objectFit: 'cover', borderRadius: '30px', width: "300px" }} src="/licenceD3.png" />
                    </div>

                </div>


                <div style={{ width: '100%', borderRadius: '35px', backgroundColor: '#F4F0EC', padding: "40px 40px 50px 40px", marginTop: '130px' }}>
                    <p style={{ fontWeight: '600', paddingTop: '20px', paddingBottom: '10px', fontSize: "37px", fontFamily: 'serif' }}>Pexels</p>
                    <p style={{ opacity: '0.9' }}>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image<br /> 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '45px' }}>
                        <img style={{ height: '300px', objectFit: 'cover', objectPosition: 'right center', borderRadius: '30px', width: "300px" }} src="/licenceD4.png" />
                        <img style={{ height: '300px', objectFit: 'cover', objectPosition: 'left center', borderRadius: '30px', width: "300px" }} src="/licenceD5.png" />
                        <img style={{ height: '300px', objectFit: 'cover', borderRadius: '30px', width: "300px" }} src="/licenceD6.png" />
                    </div>

                </div>

                <div style={{ width: '100%', borderRadius: '35px', backgroundColor: '#F4F0EC', padding: "40px 40px 50px 40px", marginTop: '130px' }}>
                    <p style={{ fontWeight: '600', paddingTop: '20px', paddingBottom: '10px', fontSize: "37px", fontFamily: 'serif' }}>Font</p>
                    <div style={{display:'flex',gap:'50px',alignItems:'center'}}>
                        <p style={{ opacity: '0.9' }}>Interno template uses free licensed <span style={{ color: '#CDA274', fontWeight: '600' }}>Google Fonts</span>.<br /> Please check <span style={{ fontWeight: '600' }}>DM Serif Display</span> and <span style={{ fontWeight: '600' }}>Jost</span>.</p>
                        <svg width="243" height="133" viewBox="0 0 313 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.18 94V93.15L3.305 92.385C4.43833 91.9317 5.31667 91.3933 5.94 90.77C6.56333 90.09 7.07333 89.155 7.47 87.965L24.98 37.73H32.205L49.46 88.305C49.9133 89.5517 50.4233 90.515 50.99 91.195C51.5567 91.8183 52.435 92.3567 53.625 92.81L54.645 93.15V94H33.055V93.15L34.33 92.725C35.52 92.2717 36.2283 91.6483 36.455 90.855C36.7383 90.005 36.71 89.0133 36.37 87.88L32.375 75.64H13.505L9.425 87.625C9.02833 88.8717 8.88667 89.8633 9 90.6C9.17 91.3367 9.85 91.9317 11.04 92.385L12.91 93.15V94H1.18ZM14.1 73.94H31.865L23.28 47.505L14.1 73.94ZM70.0791 95.275C66.7925 95.275 64.0158 94.34 61.7491 92.47C59.5391 90.6 58.4341 87.9083 58.4341 84.395C58.4341 81.7317 59.7941 79.295 62.5141 77.085C65.2341 74.8183 69.5125 73.1183 75.3491 71.985C76.2558 71.815 77.2758 71.645 78.4091 71.475C79.5425 71.2483 80.7325 71.0217 81.9791 70.795V64.08C81.9791 60.2267 81.4975 57.535 80.5341 56.005C79.6275 54.4183 78.1825 53.625 76.1991 53.625C74.8391 53.625 73.7625 54.0783 72.9691 54.985C72.1758 55.835 71.6658 57.3367 71.4391 59.49L71.2691 60.425C71.1558 62.8617 70.5608 64.6467 69.4841 65.78C68.4075 66.9133 67.0758 67.48 65.4891 67.48C64.0158 67.48 62.7975 67.0267 61.8341 66.12C60.8708 65.2133 60.3891 63.995 60.3891 62.465C60.3891 60.1417 61.1825 58.1867 62.7691 56.6C64.4125 55.0133 66.5658 53.8233 69.2291 53.03C71.8925 52.2367 74.7825 51.84 77.8991 51.84C82.9425 51.84 86.8241 53.0867 89.5441 55.58C92.3208 58.0167 93.7091 62.0117 93.7091 67.565V86.35C93.7091 88.9 94.8991 90.175 97.2791 90.175H99.1491L99.9141 90.855C98.8375 92.215 97.6475 93.2633 96.3441 94C95.0975 94.7367 93.3125 95.105 90.9891 95.105C88.4958 95.105 86.5125 94.5383 85.0391 93.405C83.6225 92.215 82.6875 90.6567 82.2341 88.73C80.5341 90.5433 78.7775 92.1017 76.9641 93.405C75.2075 94.6517 72.9125 95.275 70.0791 95.275ZM75.2641 90.09C76.3975 90.09 77.4458 89.835 78.4091 89.325C79.4291 88.7583 80.6191 87.9083 81.9791 86.775V72.495C81.4125 72.6083 80.8458 72.7217 80.2791 72.835C79.7125 72.9483 79.0608 73.0617 78.3241 73.175C75.7175 73.855 73.6208 75.0167 72.0341 76.66C70.5041 78.2467 69.7391 80.4 69.7391 83.12C69.7391 85.4433 70.2775 87.2 71.3541 88.39C72.4308 89.5233 73.7341 90.09 75.2641 90.09Z" fill="#292F36" />
                            <path d="M198.995 76.15H230.445L227.895 69.35H201.545L198.995 76.15ZM214.55 47.93L224.75 71.9L225.43 73.6L234.1 94H242.175L214.55 31.525L186.925 94H195L203.84 73.09L204.52 71.56L214.55 47.93ZM252.898 81.93C252.898 80.5133 253.238 79.295 253.918 78.275C254.598 77.255 255.618 76.4617 256.978 75.895C258.395 75.3283 260.208 75.045 262.418 75.045C264.798 75.045 267.037 75.3567 269.133 75.98C271.23 76.5467 273.27 77.51 275.253 78.87V74.875C274.857 74.365 274.092 73.7133 272.958 72.92C271.825 72.07 270.295 71.3333 268.368 70.71C266.498 70.03 264.147 69.69 261.313 69.69C256.497 69.69 252.728 70.8517 250.008 73.175C247.345 75.4417 246.013 78.4733 246.013 82.27C246.013 84.9333 246.637 87.2 247.883 89.07C249.13 90.94 250.773 92.385 252.813 93.405C254.91 94.3683 257.148 94.85 259.528 94.85C261.682 94.85 263.835 94.4533 265.988 93.66C268.198 92.8667 270.04 91.6483 271.513 90.005C273.043 88.3617 273.808 86.2933 273.808 83.8L272.448 78.7C272.448 80.74 271.938 82.5533 270.918 84.14C269.955 85.67 268.623 86.86 266.923 87.71C265.28 88.56 263.41 88.985 261.313 88.985C259.67 88.985 258.197 88.73 256.893 88.22C255.647 87.6533 254.655 86.8317 253.918 85.755C253.238 84.6783 252.898 83.4033 252.898 81.93ZM251.878 63.91C252.502 63.4567 253.352 62.9183 254.428 62.295C255.505 61.6717 256.808 61.1333 258.338 60.68C259.925 60.2267 261.682 60 263.608 60C264.798 60 265.932 60.1133 267.008 60.34C268.085 60.5667 269.02 60.935 269.813 61.445C270.663 61.955 271.315 62.6633 271.768 63.57C272.222 64.42 272.448 65.525 272.448 66.885V94H279.248V65.95C279.248 63.4 278.597 61.2467 277.293 59.49C276.047 57.7333 274.262 56.4017 271.938 55.495C269.672 54.5317 267.008 54.05 263.948 54.05C260.322 54.05 257.205 54.5883 254.598 55.665C252.048 56.7417 250.037 57.8183 248.563 58.895L251.878 63.91Z" fill="#292F36" />
                        </svg>
                    </div>
                    <p style={{ fontWeight: '600', paddingTop: '20px', paddingBottom: '10px', fontSize: "37px", fontFamily: 'serif' }}>Icon</p>
                    <p style={{opacity:'0.9',paddingTop:'10px'}}>Icon 1, Icon 2, Icon 3</p>



                </div>
            </div>


            <PFixed />
        </div>
    )
}

export default Licenses