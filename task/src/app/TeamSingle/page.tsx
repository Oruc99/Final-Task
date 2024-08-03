"use client"
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import PFixed from '../../../Components/PFixed/page';
import LogoSvgT from '../../../Components/LogoSvgT/page';
import ProgressSvg from '../../../Components/ProgressSvg/page';
import PeopleThinkC from '../../../Components/PeopleThinkC/page';
import ContactInp from '../../../Components/ContactInp/page';



const TeamSingle = () => {
  const searchParams = useSearchParams();
  const blogImg = searchParams.get('img');
  const blogName = searchParams.get('name');
  const blogDate = searchParams.get('date');
  const blogDesc = searchParams.get('desc');
  const position = searchParams.get('position')

  const [openPanel2, setOpenPanel2] = useState('panel1');

  const handleChange2 = (panel) => (event, isExpanded) => {
    if (isExpanded || openPanel2 !== panel) {
      setOpenPanel2(panel);
    }
  };

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <img src="/teamSingleImg.png" style={{ width: '100%', height: '400px', objectPosition: 'center', objectFit: 'cover', }} alt="" />
        <div className='pageHeadD' style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white',borderRadius: '30px 30px 0 0', bottom: '0px' }}>
          <p className='pageHeadP1' style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600',  }}>Professional Single</p>
          <p className='pageHeadP2' style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / Team Single</p>
        </div>
      </div>

      <div className='containeR' style={{ borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
        <div className='TSPT1'  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
          <img className='TSimg1' src={blogImg ?? '/teamD1.png'} style={{ width: "45%",  objectFit: 'cover', objectPosition: position, }} />
          <div style={{ width: '50%', }}>
            <p className='TSimgH1' style={{  fontFamily: 'serif', fontWeight: '600' }}>{blogName ?? 'Charlotte Levi'}</p>
            <p className='TSimgInfo' style={{ opacity: '1', paddingTop: '5px' }}>Designer</p>
            <p className='TSimgInfo' style={{ opacity: '0.8',  }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don't look even slightly believable.</p>
            <LogoSvgT />
          </div>
        </div>
        <p className='TSMp1' style={{ fontFamily: 'serif', fontWeight: '600' }}>Short Biography​</p>
        <p className='TSMp2' style={{  opacity: '0.8' }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour
          randomised words which don't look even slightly believable.</p>
        <p className='TSMp2' style={{  opacity: '0.8' }}>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '45px', marginTop: '80px', paddingBottom: '170px' }}>
          <div style={{ width: '50%' }}>
            <p className='TSMp1' style={{ fontWeight: '600',  fontFamily: 'serif' }}>Simplicity and Functionality</p>
            <p className='TSMp2' style={{ opacity: '0.8', }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem<br /> vitae turpmaximus.posuere in belief.</p>
            <p className='TSMp2' style={{ opacity: '0.8', }}>There are many variations of passages of Lorem Ipsum from<br /> available, but the majority have suffered alteration in some<br /> form, njecthumour</p>
            <ProgressSvg />

          </div>
          <div style={{ width: '50%' }}>
            <p  className='TSMp1' style={{ fontWeight: '600',  fontFamily: 'serif' }}>Qustion And Answer</p>
            <p className='TSMp2'  style={{ opacity: '0.8', }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>

            <Accordion className='GMT' 
              expanded={openPanel2 === 'panel1'}
              onChange={handleChange2('panel1')}
              style={{marginTop:"25px", border: `1px solid ${openPanel2 === 'panel1' ? '#F4F0EC' : 'rgb(205, 162, 116,0.7)'}`,  backgroundColor: openPanel2 === 'panel1' ? '#F4F0EC' : 'white', boxShadow: 'none', borderRadius: "12px" }}
            >
              <AccordionSummary 
                expandIcon={openPanel2 === 'panel1' ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography className='GT' style={{ fontWeight: '600', }}>
                  How long does it take?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className='AD' >
                <Typography className='GP' style={{ opacity: '0.9' }}>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='GMT' 
              expanded={openPanel2 === 'panel2'}
              onChange={handleChange2('panel2')}
              style={{ backgroundColor: openPanel2 === 'panel2' ? '#F4F0EC' : 'white',  boxShadow: 'none', border: `1px solid ${openPanel2 === 'panel2' ? '#F4F0EC' : 'rgb(205, 162, 116,0.7)'}`, borderRadius: "12px" }}
            >
              <AccordionSummary
                expandIcon={openPanel2 === 'panel2' ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography className='GT' style={{ fontWeight: '600', }}>
                  Can I use my existing furnishings?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className='AD'>
                <Typography className='GP' style={{ opacity: '0.9' }}>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='GMT' 
              expanded={openPanel2 === 'panel3'}
              onChange={handleChange2('panel3')}
              style={{ backgroundColor: openPanel2 === 'panel3' ? '#F4F0EC' : 'white',  boxShadow: 'none', border: `1px solid ${openPanel2 === 'panel3' ? '#F4F0EC' : 'rgb(205, 162, 116,0.7)'}`, borderRadius: "12px" }}
            >
              <AccordionSummary  
                expandIcon={openPanel2 === 'panel3' ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography className='GT' style={{ fontWeight: '600', }}>
                  I put into redesigning my interior?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className='AD'>
                <Typography className='GP' style={{ opacity: '0.9' }}>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

        </div>
      </div>

      <div >
        <div style={{ backgroundColor: '#F4F0EC', width: '100%', paddingTop: '40px', paddingBottom: '70px' }}>
          <div className='containeR' style={{margin:"auto"}}>
            <PeopleThinkC />
          </div>
        </div>
      </div>

      <div className='containeR' style={{  borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
        <p style={{ fontSize: '38px', fontFamily: 'serif', fontWeight: '600', textAlign: 'center', paddingTop: '160px' }}>Contact ME</p>
        <ContactInp />
      </div>


      <PFixed />

    </div>
  )
}

export default TeamSingle