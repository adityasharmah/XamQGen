import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import robot from "../assets/robot.png"; // Replace with the actual path to your robot image

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 500px;
  padding-right: 0;
`;

const TextContainer = styled.div`
  width: 50%;
  text-align: left;
`;

const RobotImage = styled.img`
  width: 50%;
  height: 120%;
`;

const HeroText = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff; /* Text color set to white */
  line-height: 100px;
`;

const BlueText = styled.span`
  color: #8fe1e8;
`;

const Subtitle = styled.p`
  font-size: 25px;
  margin-bottom: 20px;
  color: #fff; /* Text color set to white */
  text-align: justify;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background: #8fe1e8; /* Button background color */
  color: #fff; /* Button text color */
  font-size: 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
  &:hover {
    background: #6db6c9; /* Button background color on hover */
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroText>
          Crafting The
          <br />
          <BlueText>Future</BlueText>
          <br />
          Of Assessments
        </HeroText>
        <Subtitle>
          Discover the power of AI-driven assessment customization with XamQgen.
          Our AI-based approach employs a meticulous methodology to create
          question papers that perfectly align with your specific requirements.
          We carefully evaluate content, format, and difficulty levels, ensuring
          your assessments are tailored to your unique needs.
        </Subtitle>
        <Button to="/get-started">Get Started</Button>
      </TextContainer>
      <RobotImage src={robot} alt="Robot" />
    </HeroContainer>
  );
}

export default Hero;
