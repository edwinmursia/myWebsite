import React from "react";
import {
  AboutMeContainer,
  AboutMeWrapper,
  ImageContainer,
  TextContainer,
  Text,
  Image,
  HeaderText,
} from "./AboutMeElements";

const AboutMe = () => {
  return (
    <>
      <AboutMeContainer>
        <HeaderText>Hello! My name is</HeaderText>
        <AboutMeWrapper>
          <TextContainer>
            <Text>
              Edwin Mursia. I am 23 years old and I am a third year
              information technology student. I am originally from Helsinki but
              I moved to Turku because of my studies. I started to learn coding
              a little bit before starting my studies. I am always willing to
              learn more about coding and I enjoy it a lot. In my free time I
              like to go to the gym, spend time with people close to me, play
              videogames and watch sports.
            </Text>
          </TextContainer>
          <ImageContainer>
            <Image src={require("../../images/edwin.PNG").default} />
          </ImageContainer>
        </AboutMeWrapper>
      </AboutMeContainer>
    </>
  );
};

export default AboutMe;
