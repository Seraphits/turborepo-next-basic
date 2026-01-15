'use client';

import styled from 'styled-components';

// 1. "Restorative Green" Background (Dorsal)
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.surface};
`;

// 2. "Henny Penny" Font (Playful Header)
const Title = styled.h1`
  font-family: ${props => props.theme.typography.displayFont};
  font-size: 3.5rem;
  color: ${props => props.theme.colors.surface};
  margin-bottom: 2rem;
  text-shadow: 2px 2px 0px ${props => props.theme.colors.primary};
`;

// 3. "Stimulus Orange" Button (Ventral)
const CalmButton = styled.button`
  padding: 1.2rem 3rem;
  font-size: 1.5rem;
  font-family: ${props => props.theme.typography.bodyFont}; // Lexend for readability
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: none;
  border-radius: ${props => props.theme.utils.borderRadius};
  cursor: pointer;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function Page() {
  return (
    <Container>
      <Title>Scrambled Sounds</Title>
      <CalmButton>Start Listening</CalmButton>
    </Container>
  );
}
