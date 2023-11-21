import styled from "styled-components";
import styles from "../../helper/styles";

export const Title = styled.h3`
  margin: 20px 0;
  font-size: 32px;
  color: "#5b5b5b";
  & span {
    color: ${styles.COLORS.light_green};
  }
`;

export const ControlContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  background: ${styles.COLORS.dark_green};

  display: ${props => (props.percent < 34 && props.isBackBtn )? "none" : "flex"};

  ${props=> props.percent > 90 && !props.isBackBtn && `
      display: none;
  `}
  
  justify-content: center;
  align-items: center;

  cursor: pointer;


`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressBar = styled.div`
  width: calc(100%);
  height: 20px;

  border: 0.5px solid #c5c5c5;

  background: #d9d9d9;

  border-radius: 15px;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: ${(props) => props.percent}%;
    height: 100%;

    border-radius: 15px;

    ${(props) =>
      props.percent !== 100 &&
      `
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        `}

    background: ${styles.COLORS.brown};

    transition: all ease-in-out 250ms;
  }
`;

export const Container = styled.div`
  padding: 20px;
`;
