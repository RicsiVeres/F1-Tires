import styled from 'styled-components';
import colors from "../colors.js";
import LanguageSelector from "./LanguageSelector.jsx";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';


function HeaderBar() {
    return (
        <Nav>
            <Box>
                <a href="tel:+380990961499">
                    <PhoneIcon sx={{
                        color: `${colors.primary}`,
                        alignItems: `center`,
                        marginBottom: "-8px",
                        marginRight: ".5rem"
                    }} />
                    +38 (099) 096-14-99
                </a>

                <a href="mailto:f1-tires@kinchesh.com">
                    <EmailIcon sx={{
                        color: `${colors.primary}`,
                        alignItems: `center`,
                        marginBottom: "-8px",
                        marginRight: ".5rem"
                    }} />
                    f1-tires@kinchesh.com
                </a>

                <a
                    href="https://maps.app.goo.gl/GecJBev9wbjRjo278"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <RoomIcon sx={{
                        color: `${colors.primary}`,
                        alignItems: `center`,
                        marginBottom: "-8px",
                        marginRight: ".3rem"
                    }} />
                    с. Кінчеш вул. Шевченка, 59а
                </a>
            </Box>
            <LanguageSelector/>
        </Nav>
    );
}


export default HeaderBar;

const Nav = styled.nav`
    display: flex;
    background-color: ${colors.secondary};
    height: 3.5rem;
    align-items: center;
    padding: 0 21%;
    justify-content: space-between;
    max-width: 1116px;
    margin: 0 auto;

    @media (max-width: 768px) {
        display: none;
    }
}
`;

const Box = styled.div`
    display: flex;
    
    a {
        margin: 0 1rem;
        color: ${colors.white};
        text-decoration: none;
    }
`;
