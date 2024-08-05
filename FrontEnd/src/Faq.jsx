import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FAQ = () => {
  return (
    <div style={{ minHeight: '90vh', paddingTop: '4rem' }}>
      <h1 style={{ textAlign: 'center', marginTop: '2rem'}}>FAQ</h1>
      <div style={{ width: '90%', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is YuvaHR?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Founded in 2009, YuvaHR began with a simple yet ambitious mission: to connect talented individuals with leading companies in the IT industry. Over the years, we’ve grown from a small startup into a trusted human resourcing agency, helping over 500 professionals find rewarding careers in 12+ esteemed organizations. Our journey has been marked by a commitment to excellence, personalized service, and a deep understanding of the ever-evolving IT landscape.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How can YuvaHR help job seekers?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We specialize in matching talented IT and manifacturing professionals with opportunities that align with their skills, experience, and career aspirations.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What services does YuvaHR offer to employers?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We work closely with companies to understand their unique needs and culture, ensuring that we provide candidates who are highly qualified and a great fit for the team.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ textAlign: 'center', marginTop: '4rem'}}>
          <h1>Join us today!</h1>
          <form action="/contact">
            <button style={{ backgroundColor: '#100f33', padding: '0.5rem 2rem', color: 'white', border: 'none', cursor: 'pointer' }}>
              Contact
            </button>
          </form>
      </div>
    </div>
  );
};

export default FAQ;
