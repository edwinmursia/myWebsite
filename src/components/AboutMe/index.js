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
              Edwin Mursia. I am 25 years old software developer at Tietoevry. I graduated in autumn 2022 
              in information technology. I started to learn coding
              a little bit before starting my studies. I am always willing to
              learn more about coding and I enjoy it a lot. In my free time I
              like to go to the gym, spend time with people close to me, play
              videogames and watch sports.
            </Text>
          </TextContainer>
          <ImageContainer>
            <Image src={require("../../images/edu.jpg").default} />
          </ImageContainer>
        </AboutMeWrapper>
      </AboutMeContainer>
    </>
  );
};

export default AboutMe;
