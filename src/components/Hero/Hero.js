import React from 'react';
import Link from "next/dist/client/link";


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there !!<br />
          This is Chandramita
        </SectionTitle>
        <SectionText>
       Passionate Coding Enthusiast, Relentless Learner, and a Budding Developer
        </SectionText>
        <Link href="mailto:chandramitasantra@gmail.com">
          <Button>Say Hello</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;