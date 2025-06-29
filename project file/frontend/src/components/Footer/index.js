import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1f2937; /* Dark Gray (Tailwind: gray-800) */
  color: #f9fafb;           /* Light Text (Tailwind: gray-100) */
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>&copy; {currentYear} G-Mart. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
