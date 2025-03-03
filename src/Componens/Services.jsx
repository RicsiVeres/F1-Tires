import styled from "styled-components";
import colors from "../colors.js";
import TireFromTiresLine from "../assets/TiresWithTiresLine.png";
import HorizontalLine from "../assets/horizontaltiresline.png";
import TiresIcon from "../assets/tireIcon.png";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

function Services() {
    const { t } = useTranslation();

    return (
        <Element name="services">
            <Box>
                <Decoration src={HorizontalLine} alt="HorizontalLine" />
                <Title>
                    <span>{t("services.our")}</span> <br /> <b>{t("services.services")}</b>
                </Title>

                <ServicesContainer>
                    <ServiceColumn>
                        <Service>
                            <img src={TiresIcon} alt="TiresIcon" />
                            <h2>{t("services.shippingTitle")}</h2>
                            <SmallText>{t("services.shippingText")}</SmallText>
                        </Service>
                    </ServiceColumn>

                    <ServiceColumn>
                        <Service>
                            <img src={TiresIcon} alt="TiresIcon" />
                            <h2>{t("services.recyclingTitle")}</h2>
                            <SmallText>{t("services.recyclingText")}</SmallText>
                        </Service>
                    </ServiceColumn>

                    <ServiceColumn>
                        <Service>
                            <img src={TiresIcon} alt="TiresIcon" />
                            <h2>{t("services.tireSalesTitle")}</h2>
                            <SmallText>{t("services.tireSalesText")}</SmallText>
                        </Service>
                    </ServiceColumn>
                </ServicesContainer>
                <TireImage src={TireFromTiresLine} alt="TireFromTiresLine" />
            </Box>
        </Element>
    );
}

export default Services;

const Box = styled.div`
    position: relative;
    background: linear-gradient(${colors.primary}, ${colors.secondary});
    min-height: 500px;
    max-width: 1200px;
    margin: 30rem auto 0 auto;
    padding: 300px 5% 100px;
    overflow: hidden;

    @media (max-width: 768px) {
        img {
            display: block;
        }

        padding: 150px 5% 50px;
        margin: 36rem auto 0;
    }
`;

const Title = styled.h2`
    color: ${colors.white};
    font-size: 3rem;
    margin-bottom: 4rem;
    padding-left: 5%;
    position: relative;
    z-index: 1;
    font-weight: normal;

    span {
        color: ${colors.white};
    }

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const ServicesContainer = styled.div`
    display: flex;
    gap: 2rem;
    z-index: 1;
    padding: 0 5%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ServiceColumn = styled.div`
    flex: 1;
`;

const Service = styled.div`
    h2 {
        color: ${colors.white};
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }
`;

const SmallText = styled.p`
    color: ${colors.white};
    line-height: 1.6;
    font-size: 0.9rem;
    font-family: Poppins;
`;

const TireImage = styled.img`
    position: absolute;
    right: -50px;
    top: 45%;
    transform: translateY(-40%);
    width: 600px;
    opacity: 0.9;
    z-index: 1;
    zoom: 0.9;

    @media (max-width: 768px) {
        display: none;
        opacity: 0;
    }
`;

const Decoration = styled.img`
    display: none;
    @media (max-width: 768px) {
        position: absolute;
        zoom: 0.5;
        top: 0;
        right: 0;
    }
`;
