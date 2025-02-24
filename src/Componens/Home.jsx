import styled from "styled-components";
import HomePageTires from "../assets/HomePageTires.png";
import colors from "../colors.js";

function Home() {
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
                                Used Tires
                                <br />
                                <span style={{ color: `${colors.primary}`, textTransform: "uppercase" }}>
                  At very Affordable <br />
                  Prices
                </span>
                            </h1>
                            <TextParagraph>
                                Without tires, no travel by car or motorbike. Vehicle tires must be in good condition and
                                suitable for the type of road. When the time comes to change them, sometimes even in an emergency if you have
                                a tire, you often have to seek a tire sales professional quickly. We would like him to be able to
                                offer us a wide range of tires at reasonable prices.
                            </TextParagraph>
                            <ContactUSbtn>CONTACT US</ContactUSbtn>
                        </Container>
                    </Box>
                </Box>
            </DesktopWrapper>

            {/* Mobile view: új sorrend */}
            <MobileWrapper>
                <MobileTextContainer>
                    <h1>
                        Used Tires
                        <br />
                        <span style={{ color: `${colors.primary}`, textTransform: "uppercase" }}>
              At very Affordable <br />
              Prices
            </span>
                    </h1>
                    <TextParagraph>
                        Without tires, no travel by car or motorbike. Vehicle tires must be in good condition and
                        suitable for the type of road. When the time comes to change them, sometimes even in an emergency if you have
                        a tire, you often have to seek a tire sales professional quickly. We would like him to be able to
                        offer us a wide range of tires at reasonable prices.
                    </TextParagraph>
                    <ContactUSbtn>CONTACT US</ContactUSbtn>
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
