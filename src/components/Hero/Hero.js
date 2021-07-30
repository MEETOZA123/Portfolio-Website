import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>The Portfolio is nothing but your resume in more attractive way.</SectionText>
      <Button onClick={() => window.location="https://linkedin.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;