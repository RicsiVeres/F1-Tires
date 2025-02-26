import styled from "styled-components";
import colors from "../colors.js";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
    return (
        <Element name="about">
            <Container>
                <ContentWrapper>
                    <Header>{t("about.header")}</Header>
                    <Text>{t("about.text")}</Text>
                </ContentWrapper>
            </Container>
        </Element>
    );
}

export default About;

const Container = styled.section`
    background: ${colors.secondary} url("https://i.imgur.com/cTfvomv.png") no-repeat center/cover;
    position: relative;
    width: 100%;
    max-width: 1116px;
    max-height: 393px;
    padding: 3rem 0;
    overflow-x: hidden;
    margin: 5rem auto -32rem;

    @media (max-width: 1200px) {
        width: calc(100% - 4rem);
    }

    @media (max-width: 768px) {
        width: 100vw;
        min-height: 350px;
        padding: 3rem 0;
    }

    @media (max-width: 480px) {
        padding-top: 8rem;
        margin-top: -8rem;
    }
`;

const ContentWrapper = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 6%;

    @media (max-width: 768px) {
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
`;

const Header = styled.h2`
    color: ${colors.white};
    font-size: clamp(2rem, 5vw, 2.5rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    text-align: left;
    padding-left: 0.8rem;
`;

const Text = styled.p`
    color: ${colors.white};
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    line-height: 1.6;
    max-width: 50%;
    text-align: left;
    padding-left: 0.5rem;
    font-family: Poppins;

    @media (max-width: 992px) {
        max-width: 60%;
    }

    @media (max-width: 768px) {
        max-width: 90%;
        font-size: 1rem;
        padding-left: 1rem;
    }

    @media (max-width: 480px) {
        padding-left: 0.8rem;
    }
`;
