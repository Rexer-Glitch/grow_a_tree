import styled, { keyframes } from "styled-components";
import styles from "../../helper/styles";
import { Link } from "react-router-dom";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const pulsateAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

export const Title = styled.h1`
  text-align: center;

  max-width: 300px;

  font-size: 96px;

  color: #c7c7c7;

  & span {
    color: ${styles.COLORS.light_green};
  }
`;

export const Button = styled(Link)`
  background: ${styles.COLORS.brown};
  box-shadow: 0px 0.5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  padding: 20px 25px;

  font-size: 32px;
  line-height: 39px;
  text-align: center;

  color: #ffffff;

  text-decoration: none;

  margin-top: 50px;
`;

export const Container = styled.div`
  height: 100vh;
  background: ${styles.COLORS.dark_green};
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #405942, #272727);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease infinite, ${pulsateAnimation} 3s ease-in-out infinite;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 20px;
`;
