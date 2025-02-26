import { useState } from "react";
import styled from "styled-components";
import colors from "../colors.js";
import i18n from "../Componens/i18n.js"; // Import a saját konfigurációd szerint

function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang); // A lang értéke itt "uk" vagy "en"
        setSelectedLanguage(lang.toUpperCase());
        setIsOpen(false);
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
                {selectedLanguage} <span>▼</span>
            </DropdownButton>
            {isOpen && (
                <DropdownMenu>
                    <DropdownItem onClick={() => handleChangeLanguage("uk")}>
                        UA
                    </DropdownItem>
                    <Divider />
                    <DropdownItem onClick={() => handleChangeLanguage("en")}>
                        EN
                    </DropdownItem>
                </DropdownMenu>
            )}
        </DropdownContainer>
    );
}

export default LanguageSelector;

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    text-align: left;
`;

const DropdownButton = styled.button`
    background: white;
    border: 1px solid gray;
    color: ${colors.primary};
    padding: 8px 16px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;

const DropdownMenu = styled.div`
    position: absolute;
    left: 50%;
    padding: 0.25rem 1rem;
    transform: translateX(-50%);
    margin-top: 8px;
    width: 80px;
    background: ${colors.primary};
    color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const DropdownItem = styled.button`
    width: 100%;
    padding: 8px;
    background: none;
    border: none;
    color: white;
    text-align: center;
    cursor: pointer;
    &:hover {
        background: ${colors.primary};
    }
`;

const Divider = styled.hr`
    border: 0;
    height: 1px;
    background: red;
`;
