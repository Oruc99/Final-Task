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
        <div style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white', padding: '20px 60px', borderRadius: '30px 30px 0 0', bottom: '0px' }}>
          <p style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600', fontSize: "40px" }}>Professional Single</p>
          <p style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / Team Single</p>
        </div>
      </div>

      <div style={{ width: '1050px', borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '160px', }}>
          <img src={blogImg ?? '/teamD1.png'} style={{ width: "45%", borderRadius: '30px', objectFit: 'cover', objectPosition: position, height: "550px", }} />
          <div style={{ width: '50%', }}>
            <p style={{ fontSize: '30px', fontFamily: 'serif', fontWeight: '600' }}>{blogName ?? 'Charlotte Levi'}</p>
            <p style={{ opacity: '1', paddingTop: '5px' }}>Designer</p>
            <p style={{ opacity: '0.8', paddingTop: '24px' }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don't look even slightly believable.</p>
            <LogoSvgT />
          </div>
        </div>
        <p style={{ marginTop: '80px', fontSize: '30px', fontFamily: 'serif', fontWeight: '600' }}>Short Biography​</p>
        <p style={{ paddingTop: "20px", opacity: '0.8' }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour
          randomised words which don't look even slightly believable.</p>
        <p style={{ paddingTop: "20px", opacity: '0.8' }}>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '45px', marginTop: '80px', paddingBottom: '170px' }}>
          <div style={{ width: '50%' }}>
            <p style={{ fontWeight: '600', fontSize: '25px', fontFamily: 'serif' }}>Simplicity and Functionality</p>
            <p style={{ opacity: '0.8', paddingTop: '18px' }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem<br /> vitae turpmaximus.posuere in belief.</p>
            <p style={{ opacity: '0.8', paddingTop: '18px' }}>There are many variations of passages of Lorem Ipsum from<br /> available, but the majority have suffered alteration in some<br /> form, njecthumour</p>
            <ProgressSvg />

          </div>
          <div style={{ width: '50%' }}>
            <p style={{ fontWeight: '600', fontSize: '25px', fontFamily: 'serif' }}>Qustion And Answer</p>
            <p style={{ opacity: '0.8', paddingTop: '18px' }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>

            <Accordion
              expanded={openPanel2 === 'panel1'}
              onChange={handleChange2('panel1')}
              style={{ border: `1px solid ${openPanel2 === 'panel1' ? '#F4F0EC' : 'rgb(205, 162, 116,0.7)'}`, marginTop: "30px", backgroundColor: openPanel2 === 'panel1' ? '#F4F0EC' : 'white', boxShadow: 'none', borderRadius: "12px" }}
            >
              <AccordionSummary
                expandIcon={openPanel2 === 'panel1' ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ fontWeight: '600', fontSize: '18px' }}>
                  How long does it take?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ opacity: '0.9' }}>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={openPanel2 === 'panel2'}
              onChange={handleChange2('panel2')}
              style={{ backgroundColor: openPanel2 === 'panel2' ? '#F4F0EC' : 'white', marginTop: "30px", boxShadow: 'none', border: `1px solid ${openPanel2 === 'panel2' ? '#F4F0EC' : 'rgb(205, 162, 116,0.7)'}`, borderRadius: "12px" }}
            >
              <AccordionSummary
                expandIcon={openPanel2 === 'panel2' ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography style={{ fontWeight: '600', fontSize: '18px' }}>
                  Can I use my existing furnishings?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ opacity: '0.9' }}>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={openPanel2 === 'panel3'}
              onChange={handleChange2('panel3')}
              style={{ backgroundColor: openPanel2 === 'panel3' ? '#F4F0EC' : 'white', marginTop: '30px', boxShadow: 'none', border: `1px solid ${openPanel2 === 'panel3' ? '#F4F0EC' : 'rgb(205, 162, 116,0.7)'}`, borderRadius: "12px" }}
            >
              <AccordionSummary
                expandIcon={openPanel2 === 'panel3' ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography style={{ fontWeight: '600', fontSize: '18px' }}>
                  I put into redesigning my interior?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ opacity: '0.9' }}>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

        </div>
      </div>

      <div >
        <div style={{ backgroundColor: '#F4F0EC', width: '100%', paddingTop: '40px', paddingBottom: '70px' }}>
          <div style={{ width: '1050px ', display: 'grid', margin: '0 auto', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
            <PeopleThinkC />
          </div>
        </div>
      </div>

      <div style={{ width: '1050px', borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
        <p style={{ fontSize: '38px', fontFamily: 'serif', fontWeight: '600', textAlign: 'center', paddingTop: '160px' }}>Contact ME</p>
        <ContactInp />
      </div>


      <PFixed />

    </div>
  )
}

export default TeamSingle