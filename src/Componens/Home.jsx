import styled from "styled-components";
import HomePageTires from "../assets/HomePageTires.png";
import colors from "../colors.js";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
function Home() {
    const { t } = useTranslation();

        return (
        <>
            <DesktopWrapper>
                <Box>
                    <img
                        src={HomePageTires}
                        alt="HomePageTires"
                        style={{ justifyContent: "center", alignItems: "center", marginTop: "3rem" }}
                    />
                    <Box>
                        <Container>
                            <h1>
                                {t("usedTires")}
                                <br />
                                <span style={{ color: `${colors.primary}`, textTransform: "uppercase" }}>
                  {t("affordablePrices")}
                </span>
                            </h1>
                            <TextParagraph>{t("paragraph")}</TextParagraph>
                            
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                            > 
                                <ContactUSbtn>{t("contactUs")}</ContactUSbtn>
                            </Link>
                        </Container>
                    </Box>
                </Box>
            </DesktopWrapper>

            {/* Mobile view: új sorrend */}
            <MobileWrapper>
                <MobileTextContainer>
                    <h1>
                        {t("usedTires")}
                        <br />
                        <span style={{ color: `${colors.primary}`, textTransform: "uppercase" }}>
              {t("affordablePrices")}
            </span>
                    </h1>
                    <TextParagraph>{t("paragraph")}</TextParagraph>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        <ContactUSbtn>{t("contactUs")}</ContactUSbtn>
                    </Link>
                </MobileTextContainer>
                <MobileImageContainer>
                    <img src={HomePageTires} alt="HomePageTires" />
                </MobileImageContainer>
            </MobileWrapper>
        </>
    );
}

export default Home;

const DesktopWrapper = styled.div`
    display: block;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1116px;
    margin: 0 auto;
    img {
        max-width: 460px;
        margin-left: -4rem;
    }
`;

const Container = styled.div`
    padding-left: 12rem;
`;

const TextParagraph = styled.p`
    max-width: 432px;
    font-size: 16px;
    font-family: Poppins;
`;

const ContactUSbtn = styled.button`
    background: ${colors.primary};
    border: none;
    color: ${colors.white};
    border-radius: 1.5rem;
    padding: 1.2rem 3.5rem;
`;

const MobileWrapper = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        max-width: 1116px;
        margin: 0 auto;
        padding: 1rem;
        text-align: center;
    }
`;

const MobileTextContainer = styled.div`
    margin-bottom: 2rem;
`;

const MobileImageContainer = styled.div`
    img {
        max-width: 100%;
    }
`;
