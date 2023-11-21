import {Container, ProgressBar, Title, ControlsContainer, ControlContainer} from "./index_styles";
import backIcon  from "./../../images/Left.png";
import forwardIcon from "./../../images/Right.png";

function Control({icon, isBackBtn, percent, handleClick}){
    return <ControlContainer onClick={handleClick} isBackBtn={isBackBtn} percent={percent}>
        <img src={icon} alt="control icon"/>
    </ControlContainer>
}

function Header({percent, handleBackClick, handleForwardClick}){
    return<Container>
            <ProgressBar percent={percent}/>
            <Title>Start <span>growing</span></Title>
            <ControlsContainer>
                <Control icon={backIcon} isBackBtn={true} handleClick={handleBackClick} percent={percent}/>

                
                <Control icon={forwardIcon} isBackBtn={false} handleClick={handleForwardClick} percent={percent}/>
            </ControlsContainer>
    </Container>
}

export default Header;