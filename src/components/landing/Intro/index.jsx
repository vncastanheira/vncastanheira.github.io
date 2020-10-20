import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {SiMongodb} from 'react-icons/si'

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
      <Thumbnail>
          <img src={dev} alt="Sou Vinícius, Desenvolvedor Fullstack!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Olá!</h1>
          <h4>Sou <span style={{color: theme === 'light' ? "blue" : "lightBlue"}}>Vinícius Castanheira</span>!</h4>
          <h3>Fullstack Developer</h3>
          <div className="techs">
            <FaReact style={{color: "blue"}}/>
            <FaNodeJs style={{color: "green"}}/>
            <SiMongodb style={{color: "darkgreen"}}/>
          </div>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>

      </IntroWrapper>
    </Wrapper>
  );
};
