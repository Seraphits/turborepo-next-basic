'use client';

import styled from "styled-components";
import { ReactNode } from "react";

// Define the transient prop interface
interface BoxProps {
  $bgColor: string;
}

const StyledBox = styled.div<BoxProps>`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.$bgColor}; // Dynamic color injection
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const ColorBox = ({ color, children }: { color: string, children: ReactNode }) => {
  return <StyledBox $bgColor={color}>{children}</StyledBox>;
};
