import styled from "styled-components";
import colors from "../colors.js";
import TireFromTiresLine from "../assets/TiresWithTiresLine.png";
import HorizontalLine from "../assets/horizontaltiresline.png";
import TiresIcon from "../assets/tireIcon.png";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function Services() {
    const { t, i18n } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const [mainServices, setMainServices] = useState([]);
    const [additionalServices, setAdditionalServices] = useState([]);

    const toggleExpand = () => setExpanded(!expanded);

    useEffect(() => {
        const fetchSheetData = async () => {
            const spreadsheetId = import.meta.env.VITE_GOOGLE_SHEETS_ID
            const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

            // Használjuk a resolvedLanguage-t és konvertáljuk 'uk' -> 'ua'
            const lang = i18n.resolvedLanguage === 'uk' ? 'ua' : i18n.resolvedLanguage;

            try {
                // 1. Összes sheet lekérése
                const metadataResponse = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?key=${apiKey}&fields=sheets(properties(title))`
                );
                const { sheets } = await metadataResponse.json();

                // 2. Sheet keresése prioritások szerint
                const supportedLanguages = [lang, 'ua']; // Első a nyelv, majd ukrán
                let sheet = null;

                for (const lng of supportedLanguages) {
                    sheet = sheets.find(s => s.properties.title.toLowerCase() === lng.toLowerCase());
                    if (sheet) break;
                }

                if (!sheet) throw new Error('Nem található sheet!');

                // 3. Adatok lekérése
                const dataResponse = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheet.properties.title}!A2:C?key=${apiKey}`
                );
                const { values } = await dataResponse.json();

                // 4. Szolgáltatások frissítése
                setMainServices(values.slice(0, 3).map(([title, desc, price]) => ({ title, desc, price })));
                setAdditionalServices(values.slice(3, 6).map(([title, desc, price]) => ({ title, desc, price })));
            } catch (error) {
                console.error("Hiba a szolgáltatások betöltésekor:", error);
            }
        };

        fetchSheetData();
    }, [i18n.resolvedLanguage]); // resolvedLanguage függőség

    return (
        <Element name="services">
            <Box>
                <Decoration src={HorizontalLine} alt="HorizontalLine" />
                <Title>
                    <span>{t("services.our")}</span> <br /> <b>{t("services.services")}</b>
                </Title>

                <ServicesContainer>
                    {mainServices.map((service, i) => (
                        <ServiceColumn key={i}>
                            <Service>
                                <img src={TiresIcon} alt="TiresIcon" />
                                <h2>{service.title}</h2>
                                <SmallText>{service.desc}</SmallText>
                                <Price>{service.price}</Price>
                            </Service>
                        </ServiceColumn>
                    ))}
                </ServicesContainer>

                <ExpandedServices expanded={expanded}>
                    {additionalServices.map((service, i) => (
                        <ServiceColumn key={i}>
                            <Service>
                                <img src={TiresIcon} alt="TiresIcon" />
                                <h2>{service.title}</h2>
                                <SmallText>{service.desc}</SmallText>
                                <Price>{service.price}</Price>
                            </Service>
                        </ServiceColumn>
                    ))}
                </ExpandedServices>

                <ArrowButton onClick={toggleExpand}>
                    {expanded ? (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                            <path d="M12 3l12 18h-24z" />
                        </svg>
                    ) : (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                            <path d="M12 21l-12-18h24z" />
                        </svg>
                    )}
                </ArrowButton>

                <TireImage src={TireFromTiresLine} alt="TireFromTiresLine" expanded={expanded}/>
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
    padding: 300px 5% 200px;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 150px 5% 150px;
        margin: 36rem auto 0;
    }
`;

const ExpandedServices = styled.div`
    display: flex;
    gap: 4rem;
    justify-content: center;
    padding: 0 5%;
    opacity: ${props => (props.expanded ? 1 : 0)};
    max-height: ${props => (props.expanded ? "800px" : "0")};
    transform: translateY(${props => (props.expanded ? "0" : "-20px")});
    transition: all 0.6s ease-in-out;
    visibility: ${props => (props.expanded ? "visible" : "hidden")};
    margin-top: ${props => (props.expanded ? "4.5rem" : "0")};

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
        max-height: ${props => (props.expanded ? "1200px" : "0")};
        margin-top: ${props => (props.expanded ? "2rem" : "0")};
    }
`;

const ArrowButton = styled.button`
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateX(-50%) scale(1.2);
    }

    @media (max-width: 768px) {
        bottom: 40px;
    }
`;

const Price = styled.div`
    color: ${colors.white};
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    display: inline-block;

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.4rem 0.8rem;
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
    transform: translateY(-40%);
    width: 600px;
    opacity: 0.9;
    z-index: 1;
    zoom: 0.85;
    top: ${props => (props.expanded ? "35%" : "40%")};
    transition: top 0.5s ease-in, top 0.5s ease-out;

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