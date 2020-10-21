import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Sobre mim</h1>
          <p>
            Desenvolvedor com 7 anos de carreira, comecei trabalhando com tecnologias .NET
            para desktop e web.
          </p>
          <Button as={AnchorLink} href="#contact">
          Me Contrate
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
