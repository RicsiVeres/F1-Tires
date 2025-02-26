import styled from 'styled-components';
import colors from "../colors.js";
import LanguageSelector from "./LanguageSelector.jsx";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';

function HeaderBar() {
    return (
        <Nav>
            <ContactsWrapper>
                <ContactLink href="tel:+380990961499">
                    <StyledPhoneIcon />
                    +38 (099) 096-14-99
                </ContactLink>

                <ContactLink href="mailto:f1-tires@kinchesh.com">
                    <StyledEmailIcon />
                    f1-tires@kinchesh.com
                </ContactLink>

                <ContactLink
                    href="https://maps.app.goo.gl/GecJBev9wbjRjo278"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <StyledRoomIcon />
                    с. Кінчеш вул. Шевченка, 59а
                </ContactLink>
            </ContactsWrapper>
            <LanguageSelector />
        </Nav>
    );
}

export default HeaderBar;

const Nav = styled.nav`
    display: flex;
    background-color: ${colors.secondary};
    height: auto;
    min-height: 3.5rem;
    align-items: center;
    padding: 0.5rem 5%;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

const ContactsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
`;

const ContactLink = styled.a`
    display: flex;
    align-items: center;
    color: ${colors.white};
    text-decoration: none;
    font-size: 0.875rem;
    gap: 0.3rem;
    padding: 0.25rem 0;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        font-size: 0.75rem;
    }

    @media (max-width: 480px) {
        gap: 0.2rem;
    }
`;

const iconStyles = `
    font-size: 1.1rem !important;
    color: ${colors.primary} !important;

    @media (max-width: 768px) {
        font-size: 1rem !important;
    }
`;

const StyledPhoneIcon = styled(PhoneIcon)`${iconStyles}`;
const StyledEmailIcon = styled(EmailIcon)`${iconStyles}`;
const StyledRoomIcon = styled(RoomIcon)`${iconStyles}`;