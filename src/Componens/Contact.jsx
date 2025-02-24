import { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 1.5rem;
  font-family: sans-serif;
`;

const Heading = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  outline: none;
  transition: all 0.2s;

  &:focus {
    box-shadow: 0 0 0 1px #000;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  outline: none;
  resize: vertical;
  min-height: 6rem;
  transition: all 0.2s;

  &:focus {
    box-shadow: 0 0 0 1px #000;
  }
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  align-self: start;

  &:hover {
    background-color: #333;
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.125rem;
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <FormWrapper>
            <Heading>Get in touch CONTACT</Heading>

            <StyledForm onSubmit={handleSubmit}>
                <InputGroup>
                    <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />

                    <GridContainer>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </GridContainer>

                    <TextArea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </InputGroup>

                <SubmitButton type="submit">
                    Send Message
                </SubmitButton>
            </StyledForm>

            <ContactInfo>
                <p>+38 (096) 096-14-99</p>
                <p>С. Кинеш Вул. Шевченка, 5ав</p>
            </ContactInfo>
        </FormWrapper>
    );
};

export default Contact;