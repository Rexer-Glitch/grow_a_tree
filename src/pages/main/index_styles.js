import styled from "styled-components";
import styles from "../../helper/styles";




export const TextBefore = styled.h3`
    max-width: 300px;
`;

export const TextAfter = styled.h3`
    max-width: 300px;
`;

export const Textbox = styled.input`
    border: 4px solid ${styles.COLORS.dark_green};
    border-radius: 20px;

    padding: 2.5px 1px;

    text-align: center;

    font-size: 64px;

    color: ${styles.COLORS.light_green};
`;

export const InnerContainer = styled.div`
    height: 60vh;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    gap: 30px;

    font-size: 64px;

    color: #595959;

    text-align: center;
`;

export const Container = styled.div`
`;
