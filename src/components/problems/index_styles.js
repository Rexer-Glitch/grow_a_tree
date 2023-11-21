import styled, {keyframes} from "styled-components";
import styles from "../../helper/styles";

const slideIn = keyframes`
 from {
    max-height: 0;
  }
  to {
    max-height: 1000px; /* Adjust the maximum height as needed */
  }
`;

const slideOut = keyframes`
   from {
    max-height: 1000px; /* Adjust the maximum height as needed */
  }
  to {
    max-height: 0;
  }
`;

export const InnerCOntainer = styled.div`
position: relative;
`;

export const Title = styled.h3`
    background: ${styles.COLORS.dark_green};
    padding: 10px;

    color: white;
    
    cursor: pointer;

    border-radius: 5px;
`;

export const Content = styled.div`
    padding: 20px;

    overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
  animation: ${(props) => (props.isVisible ? slideIn : slideOut)} 0.3s forwards;


    & h4 {
        font-size: 32px;
        margin-top: 20px;
    }

    & ol{
        padding: 20px 30px;
        font-size: 20px;

        & p {
            padding-left: 20px;
        }

        & ol {
            padding: 0 30px;
        }

        & ol li {
            text-transform: uppercase;
        }
    }
`;

export const Feeds = styled.input`
    font-size: 20px;
    padding: 8px;
    margin-left: 5px;
    border-radius: 5px;

    border: 1px solid rgba(0,0,0,0.2);

    max-width: 80px;
`;

export const Container = styled.div`
padding: 20px;

  
`;

