import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";
import colors from "../colors"; 
import { Element } from "react-scroll";

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export default function OpeningHours() {
  const [hours, setHours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A2:C8?key=${API_KEY}`
        );
        
        if (!response.ok) throw new Error('Hálózati hiba');
        const data = await response.json();
        
        if (!data.values) throw new Error('Érvénytelen adatformátum');
        
        setHours(data.values.map(([day, open, close]) => ({
          day,
          open,
          close
        })));
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Element name="OpeningHours">
        <OpeningHoursContainer>
      <ContentWrapper>
        <Heading>
          <FaClock />
          <h2>Графік роботи</h2>
        </Heading>
        
        {loading ? (
          <LoadingState>Графік роботи...</LoadingState>
        ) : error ? (
          <LoadingState>Hiba: {error}</LoadingState>
        ) : (
          <GridContainer>
            {hours.map((item, index) => (
              <TimeSlot key={index} index={index}>
                <Day>{item.day}</Day>
                <Hours>{item.open} - {item.close}</Hours>
              </TimeSlot>
            ))}
          </GridContainer>
        )}
      </ContentWrapper>
    </OpeningHoursContainer>
    </Element>
  );
}


const OpeningHoursContainer = styled.div`
  padding: 3rem 1.5rem;
  background: none;
  position: relative;
  overflow: hidden;
  margin: 4rem 0;
  border: none;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 2rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  h2 {
    color: ${colors.secondary};
    font-family: 'Roboto', sans-serif;
    font-size: 2.2rem;
    font-weight: 600;
    margin: 0;

    @media (max-width: 992px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  svg {
    color: ${colors.primary};
    font-size: 2rem;

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  background: ${colors.white};
  border-radius: 8px;
  border: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const TimeSlot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: #f1f1f1;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.8rem;
    gap: 0.5rem;
  }
`;

const Day = styled.span`
  color: ${colors.secondary};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1rem;
`;

const Hours = styled.span`
  color: ${colors.primary};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const LoadingState = styled.div`
  text-align: center;
  color: #666666;
  padding: 2rem;
  font-style: italic;
  font-size: 1rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
    font-size: 0.9rem;
  }
`;
