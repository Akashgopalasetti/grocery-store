import styled from 'styled-components';

// Full-screen hero section with dark overlay
export const HomeContainer = styled.section`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55); // dark overlay
    z-index: 0;
  }
`;

// Inner wrapper for centered content
export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
`;

// Flex layout to center vertically
export const CenteredRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

// Semi-transparent box with blur and shadow
export const ContentColumn = styled.div`
  background-color: rgba(255, 255, 255, 0.06);
  padding: 3rem 2rem;
  border-radius: 1rem;
  color: #fff;
  text-align: center;
  max-width: 600px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
`;

// Heading text
export const Heading = styled.h1`
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Paragraph text
export const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// CTA button with hover + focus
export const PrimaryButton = styled.button`
  background-color:rgb(59, 58, 58);
  color: #fff;
  font-size: 1rem;
  padding: 12px 28px;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color:rgb(73, 73, 73);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 3px solid #059669;
    outline-offset: 2px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;
