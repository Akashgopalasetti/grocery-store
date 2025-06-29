import React from 'react';
import {
  HomeContainer,
  Container,
  CenteredRow,
  ContentColumn,
  Heading,
  Paragraph,
  PrimaryButton
} from './styledComponents';

import { Link } from 'react-router-dom';
import Footer from '../Footer';
import About from '../About';
import ContactUs from '../Contact';
import Header from '../Header';

const Home = () => {
  return (
    <div>
      <Header />

      <HomeContainer
        className="home-container"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQ3JcDRp9uozKybMn6aap2lMs5BYDIFmOoA&s"
      >
        <Container>
          <CenteredRow>
            <ContentColumn>
              <Heading>Welcome to Grocery </Heading>
              <Paragraph>
                Explore a wide selection of fresh groceries and everyday essentials, delivered right to your door.
              </Paragraph>
              <PrimaryButton>
                <Link to="/shopping" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                  Shop Now
                </Link>
              </PrimaryButton>
            </ContentColumn>
          </CenteredRow>
        </Container>
      </HomeContainer>

      <About />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
