import { useState } from 'react';
import styled from 'styled-components';
import colors from "../colors.js";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
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

    function handleClick() {
        window.open('https://maps.app.goo.gl/SBM9wZYyNydCS6Eu5', '_blank');
    }

    return (
        <Element name="contact">
            <FormWrapper id="contactForm">
                <Heading>
                    {t("contact.getInTouch")} <br/>
                    <span>{t("contact.contact")}</span>
                </Heading>
                <Box>
                    <StyledForm onSubmit={handleSubmit} id="contactUs">
                        <InputGroup>
                            <Select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            >
                                <option value="">{t("contact.subject")}</option>
                                <option value="general">{t("contact.generalInquiry")}</option>
                                <option value="support">{t("contact.support")}</option>
                                <option value="feedback">{t("contact.feedback")}</option>
                            </Select>
                            <GridContainer>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder={t("contact.email")}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder={t("contact.phone")}
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </GridContainer>
                            <TextArea
                                name="message"
                                placeholder={t("contact.message")}
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        <SubmitButton type="submit">
                            {t("contact.send")}
                        </SubmitButton>
                    </StyledForm>

                    <ComoanzPOS>
                        <img src="https://i.imgur.com/qJf6gtn.png" alt="company position" onClick={handleClick} />
                        <PhoneBubble>
                            <PhoneNumber>{t("contact.phoneNumber")}</PhoneNumber>
                            <Address>{t("contact.address")}</Address>
                        </PhoneBubble>
                    </ComoanzPOS>
                </Box>
            </FormWrapper>
        </Element>
    );
};

export default Contact;

const Box = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ComoanzPOS = styled.div`
    position: relative;
    max-width: 523px;
    max-height: 532px;
    margin-left: 5rem;
    margin-top: -3rem;
    border-radius: 1rem;
    box-shadow: -5px 5px rgba(165, 161, 161, 0.25);

    img {
        height: 100%;
        zoom: 0.65;
        border-radius: 1rem;
    }

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 2rem;
        max-width: 100%;
        box-shadow: none;

        img {
            width: 100%;
            height: auto;
            zoom: 1;
        }
    }
`;

const PhoneBubble = styled.div`
    position: absolute;
    top: -3rem;
    right: 1.5rem;
    background-color: ${colors.primary};
    color: #fff;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);

    @media (max-width: 768px) {
        position: absolute;
        top: 20rem;
        left: 0;
        width: 80vw;
    }
`;

const PhoneNumber = styled.div`
    font-size: 1.25rem;
    margin-bottom: 0.25rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Address = styled.div`
    font-size: 0.875rem;

    @media (max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const FormWrapper = styled.div`
    max-width: 42rem;
    margin: 3rem auto 8rem auto;
    padding: 1.5rem;
    font-family: sans-serif;
`;

const Heading = styled.h2`
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 2rem;

    span {
        color: ${colors.primary};
    }

    @media (max-width: 768px) {
        text-align: center;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-left: -5rem;
    margin-right: 2rem;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        width: 100%;
        align-items: center;
    }
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Select = styled.select`
    max-width: 432px;
    min-width: 350px;
    margin: 0.5rem 0;
    padding: 0.75rem;
    border: 1px solid ${colors.secondary};
    outline: none;
    transition: all 0.2s;
    background-color: rgba(20, 20, 20, 0.9);
    color: ${colors.white};
    border-radius: 0.5rem;

    &:focus {
        box-shadow: 0 0 0 1px #000;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        min-width: auto;
    }
`;

const Input = styled.input`
    max-width: 432px;
    min-width: 350px;
    margin: 0.5rem 0;
    padding: 0.75rem;
    border: 1px solid ${colors.secondary};
    outline: none;
    transition: all 0.2s;
    background-color: rgba(20, 20, 20, 0.9);
    color: ${colors.white};
    border-radius: 0.5rem;

    &:focus {
        box-shadow: 0 0 0 1px #000;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        min-width: auto;
        width: 93%;
    }
`;

const TextArea = styled.textarea`
    max-width: 432px;
    padding: 0.75rem;
    border: 1px solid ${colors.secondary};
    outline: none;
    resize: vertical;
    min-height: 6rem;
    transition: all 0.2s;
    background-color: rgba(20, 20, 20, 0.9);
    color: ${colors.white};
    border-radius: 0.5rem;

    &:focus {
        box-shadow: 0 0 0 1px #000;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const GridContainer = styled.div`
    display: block;
    @media (min-width: 768px) {
        grid-gap: 0.5rem;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SubmitButton = styled.button`
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 0.75rem 2rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    align-self: start;
    max-width: 462px;
    width: 100%;
    border-radius: 0.5rem;

    &:hover {
        background-color: #333;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;
