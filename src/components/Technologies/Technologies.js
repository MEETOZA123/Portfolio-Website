import React from 'react';
import { DiFirebase, DiFirefox, DiReact, DiZend } from 'react-icons/di';
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked on a number of technologies in Web Devlopment.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <LinkContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </LinkContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <LinkContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Database
          </ListParagraph>
        </LinkContainer>
      </ListItem>
      <ListItem>
        <DiFirefox size="3rem" />
        <LinkContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tools like Figma
          </ListParagraph>
        </LinkContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
