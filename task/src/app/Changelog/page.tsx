import React from 'react'
import PFixed from '../../../Components/PFixed/page'


const Changelog = () => {
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <img src="/changelogImg.png" style={{ width: '100%', height: '400px', backgroundPosition: 'center', objectFit: 'cover', }} alt="" />
                <div style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white', padding: '20px 60px', borderRadius: '30px 30px 0 0', bottom: '0px' }}>
                    <p style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600', fontSize: "40px" }}>Changelog</p>
                    <p style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / Changelog</p>
                </div>
            </div>

            <div style={{ width: '1050px', borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
                <div style={{ paddingTop: '190px' }}>
                    <div style={{ paddingBlock: "115px", backgroundColor: '#F4F0EC', borderRadius: '30px', width: '100%' ,display:'flex',alignItems:'center',justifyContent:'center',gap:"20px"}}>
                        <svg width="58" height="34" viewBox="0 0 58 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9041 33.15L4.2041 3.35C3.97077 2.68333 3.6541 2.16667 3.2541 1.8C2.88744 1.4 2.37077 1.1 1.7041 0.899999L0.504102 0.499998V-1.3113e-06H14.9041V0.499998L13.3541 0.949998C12.5874 1.15 12.1541 1.5 12.0541 2C11.9874 2.5 12.0708 3.11667 12.3041 3.85L19.7041 25.8L27.1541 3.8C27.4208 3.03333 27.5374 2.4 27.5041 1.9C27.5041 1.4 27.1208 1.05 26.3541 0.85L25.0541 0.499998V-1.3113e-06H32.0541V0.499998L30.7041 0.899999C30.0708 1.06667 29.6208 1.36667 29.3541 1.8C29.0874 2.2 28.8374 2.73333 28.6041 3.4L18.6041 33.15H14.9041ZM32.8252 33.75C31.6252 33.75 30.6085 33.3333 29.7752 32.5C28.9419 31.6667 28.5252 30.6667 28.5252 29.5C28.5252 28.3333 28.9419 27.3167 29.7752 26.45C30.6085 25.5833 31.6252 25.15 32.8252 25.15C34.0252 25.15 35.0419 25.5833 35.8752 26.45C36.7085 27.3167 37.1252 28.3333 37.1252 29.5C37.1252 30.6667 36.7085 31.6667 35.8752 32.5C35.0419 33.3333 34.0252 33.75 32.8252 33.75ZM42.2154 33V32.5L44.1654 31.9C45.4321 31.4667 46.0654 30.6167 46.0654 29.35V5.15L42.0154 5.7V5.05C43.9821 4.65 45.8654 4.08333 47.6654 3.35C49.4988 2.61667 51.2154 1.76667 52.8154 0.799997L53.4654 1.25L53.2654 8.4V29.35C53.2654 30.65 53.8988 31.4833 55.1654 31.85L57.2154 32.5V33H42.2154Z" fill="#292F36" />
                        </svg>
                        <p>Initial Interno Webflow Template Release</p>

                    </div>
                </div>
            </div>



            <PFixed />
        </div>
    )
}

export default Changelog