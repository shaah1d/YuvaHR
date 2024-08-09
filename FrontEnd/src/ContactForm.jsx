import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Contact from './Contact';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', Message: '', field: '' });
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (evt) => {
    setFile(evt.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('Message', formData.Message);
    data.append('field', formData.field);
    if (file) {
      data.append('file', file); // Append the file
    }

    try {
      const response = await fetch('https://api.yuvahr.com/contact', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSuccess(true);
        // Reset form data
        setFormData({ name: '', email: '', Message: '', field: '' });
        setFile(null);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccess(false);
    }
  };

  return (
    <>
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center' }}>
        <form
          style={{
            width: '90%',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '1rem',
            boxSizing: 'border-box'
          }}
          onSubmit={handleSubmit}
        >
          {success && (
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" style={{ marginTop: '1rem' }}>
              Your response has been recorded.
            </Alert>
          )}
          <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact us</h1>

          <label htmlFor="name">Name</label>
          <TextField
            fullWidth
            label="Name"
            id="name"
            name="name"
            placeholder='Full name'
            autoComplete='off'
            required
            value={formData.name}
            style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <TextField
            fullWidth
            label="Email"
            id="email"
            name="email"
            placeholder='Email'
            autoComplete='off'
            required
            value={formData.email}
            style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
            onChange={handleChange}
          />

          <label htmlFor="field">Field</label>
          <TextField
            fullWidth
            label="Field"
            id="field"
            name="field"
            placeholder='Field of interest'
            autoComplete='off'
            required
            value={formData.field}
            style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
            onChange={handleChange}
          />

          <label htmlFor="Message">Message</label>
          <TextField
            fullWidth
            id="Message"
            name="Message"
            label="Message"
            multiline
            maxRows={10}
            required
            value={formData.Message}
            style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
            onChange={handleChange}
          />

          <Button
            component="label"
            variant="outlined"
            style={{
              backgroundColor: '#100f33',
              width: '100%',
              color: 'white',
              marginTop: '1rem'
            }}
            startDecorator={
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </SvgIcon>
            }
          >
            Upload your resume
            <VisuallyHiddenInput
              type="file"
              name="file"
              required
              onChange={handleFileChange}
            />
          </Button>

          <Button
            type="submit"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            Submit
          </Button>
        </form>
      </div>
      <Contact />
    </>
  );
}

export default ContactForm;

