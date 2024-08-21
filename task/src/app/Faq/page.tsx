"use client"
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PFixed from '../../../Components/PFixed/page';

const Faq = () => {
    const [openPanel, setOpenPanel] = useState('panel2');

    const handleChange = (panel) => (event, isExpanded) => {
        if (isExpanded || openPanel !== panel) {
            setOpenPanel(panel);
        }
    }

    const [openPanel2, setOpenPanel2] = useState('panel2');

    const handleChange2 = (panel2) => (event, isExpanded2) => {
        if (isExpanded2 || openPanel2 !== panel2) {
            setOpenPanel2(panel2);
        }
    }
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <img src="/faqImg.png" style={{ width: '100%', height: '400px', backgroundPosition: 'center', objectFit: 'cover', }} alt="" />
                <div className='pageHeadD' style={{ position: 'absolute', left: '50%', translate: '-50% 0px', backgroundColor: 'white', borderRadius: '30px 30px 0 0', bottom: '0px' }}>
                    <p className='pageHeadP1' style={{ color: "black", textAlign: 'center', fontFamily: 'serif', fontWeight: '600', }}>Faq's</p>
                    <p className='pageHeadP2' style={{ color: "black", textAlign: 'center', opacity: '0.9' }}>Home / Faq</p>
                </div>
            </div>

            <div className='containeR' style={{ borderInline: '1px solid rgb(0,0,0,0.1)', margin: 'auto' }}>
                <p className='peopleThinkH1' style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: '600', paddingTop: '140px', }}>Every Question Answered</p>

                <div style={{ marginTop: "50px", display: 'flex', justifyContent: 'space-between' }}>
                    <div className='divAccR' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Accordion className="faqAccordion"
                            expanded={openPanel === 'panel1'}
                            onChange={handleChange('panel1')}
                            style={{ border: "none", backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #CDA274", borderRadius: "0px" }}
                        >
                            <AccordionSummary
                                className="faqAccSummary"
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className='AccSumTyp' style={{ fontWeight: '600', fontFamily: "serif", color: openPanel === 'panel1' ? '#CDA274' : 'black' }}>
                                    What is the Hipcouch Interior Design Service?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='AccD'>
                                <Typography className='AccDTyp' style={{ opacity: '0.9' }}>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="faqAccordion"
                            expanded={openPanel === 'panel2'}
                            onChange={handleChange('panel2')}
                            style={{ border: "none", backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #CDA274", borderRadius: "0px" }}
                        >
                            <AccordionSummary
                                className="faqAccSummary"
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className='AccSumTyp' style={{ fontWeight: '600', fontFamily: "serif", color: openPanel === 'panel2' ? '#CDA274' : 'black' }}>
                                    So, how exactly does this work?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className="AccD">
                                <Typography className="AccDTyp" style={{ opacity: '0.9' }}>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="faqAccordion"
                            expanded={openPanel === 'panel3'}
                            onChange={handleChange('panel3')}
                            style={{ border: "none", backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #CDA274", borderRadius: "0px" }}
                        >
                            <AccordionSummary
                                className="faqAccSummary"
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography className='AccSumTyp' style={{ fontWeight: '600', fontFamily: "serif", color: openPanel === 'panel3' ? '#CDA274' : 'black' }}>
                                    What cities do you currently operate in?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className="AccD">
                                <Typography className="AccDTyp" style={{ opacity: '0.9' }}>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="faqAccordion"
                            expanded={openPanel === 'panel4'}
                            onChange={handleChange('panel4')}
                            style={{ border: "none", backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #CDA274", borderRadius: "0px" }}
                        >
                            <AccordionSummary
                                className="faqAccSummary"
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4-content"
                                id="panel4-header"
                            >
                                <Typography className='AccSumTyp' style={{ fontWeight: '600', fontFamily: "serif", color: openPanel === 'panel4' ? '#CDA274' : 'black' }}>
                                    Hipcouch Interior Design Service?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className="AccD">
                                <Typography className="AccDTyp" style={{ opacity: '0.9' }}>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="faqAccordion"
                            expanded={openPanel === 'panel5'}
                            onChange={handleChange('panel5')}
                            style={{ border: "none", backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #CDA274", borderRadius: "0px" }}
                        >
                            <AccordionSummary
                                className="faqAccSummary"
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel5-content"
                                id="panel5-header"
                            >
                                <Typography className='AccSumTyp' style={{ fontWeight: '600', fontFamily: "serif", color: openPanel === 'panel5' ? '#CDA274' : 'black' }}>
                                    What kind of interior designers do you have?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className="AccD">
                                <Typography className="AccDTyp" style={{ opacity: '0.9' }}>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className='divWimg'>
                        <img className='faqAccImg' style={{ width: "100%", objectFit: 'cover' }} src="/faqD1.png" alt="" />
                    </div>
                </div>

                <p className='peopleThinkH1' style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: '600', paddingTop: '190px' }}>Project related questions</p>

                <div style={{ marginTop: "70px", display: 'flex', justifyContent: 'space-between' }}>
                    <div className='divWimg'>
                        <img className='faqAccImg' style={{ width: "100%", objectFit: 'cover' }} src="/faqD2.png" alt="" />
                    </div>
                    <div className='divAccR' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Accordion
                            expanded={openPanel2 === 'panel1'}
                            onChange={handleChange2('panel1')}
                            style={{ border: "none", backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #CDA274", borderRadius: "0px" }}
                        >
                            <AccordionSummary
                            className='faqAccSummary'
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className='AccSumTyp' style={{ fontWeight: '600', fontFamily: "serif", color: openPanel2 === 'panel1' ? '#CDA274' : 'black' }}>
                                    How long does it take?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='AccD'>
                                <Typography className='AccDTyp' style={{ opacity: '0.9' }}>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={openPanel2 === 'panel2'}
                            onChange={handleChange2('panel2')}
                            style={{ border: "none", backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #CDA274", borderRadius: "0px" }}
                        >
                            <AccordionSummary
                            className='faqAccSummary'
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className='AccSumTyp' style={{ fontWeight: '600', fontFamily: "serif", color: openPanel2 === 'panel2' ? '#CDA274' : 'black' }}>
                                    Can I use my existing furnishings?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='AccD'>
                                <Typography className='AccDTyp' style={{ opacity: '0.9' }}>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={openPanel2 === 'panel3'}
                            onChange={handleChange2('panel3')}
                            style={{ border: "none", backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #CDA274", borderRadius: "0px" }}
                        >
                            <AccordionSummary
                            className='faqAccSummary'
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography className='AccSumTyp' style={{ fontWeight: '600', fontFamily: "serif", color: openPanel2 === 'panel3' ? '#CDA274' : 'black' }}>
                                    I put into redesigning my interior?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='AccD'>
                                <Typography className='AccDTyp' style={{ opacity: '0.9' }}>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={openPanel2 === 'panel4'}
                            onChange={handleChange2('panel4')}
                            style={{ border: "none", backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #CDA274", borderRadius: "0px" }}
                        >
                            <AccordionSummary
                            className='faqAccSummary'
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4-content"
                                id="panel4-header"
                            >
                                <Typography className='AccSumTyp' style={{ fontWeight: '600', fontFamily: "serif", color: openPanel2 === 'panel4' ? '#CDA274' : 'black' }}>
                                    What do your services cost?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='AccD'>
                                <Typography className='AccDTyp' style={{ opacity: '0.9' }}>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={openPanel2 === 'panel5'}
                            onChange={handleChange2('panel5')}
                            style={{ border: "none", backgroundColor: 'transparent', boxShadow: 'none', borderBottom: "1px solid #CDA274", borderRadius: "0px" }}
                        >
                            <AccordionSummary
                            className='faqAccSummary'
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel5-content"
                                id="panel5-header"
                            >
                                <Typography className='AccSumTyp' style={{ fontWeight: '600', fontFamily: "serif", color: openPanel2 === 'panel5' ? '#CDA274' : 'black' }}>
                                    Do you offer free consultations?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='AccD'>
                                <Typography className='AccDTyp' style={{ opacity: '0.9' }}>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                </div>


            </div>


            <PFixed />
        </div>
    )
}

export default Faq