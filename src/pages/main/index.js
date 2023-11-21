import {
  Container,
  InnerContainer,
  TextBefore,
  Textbox,
  TextAfter,
} from "./index_styles";
import Header from "../../components/header";
import Problems from "../../components/problems";
import { useState } from "react";

function Age({ state: { age, setAge } }) {
  return (
    <InnerContainer>
      <TextBefore>Our Baby is</TextBefore>
      <Textbox
        type="number"
        min="1"
        max="28"
        defaultValue={1}
        value={age}
        onChange={({ target }) => setAge(target.value)}
      />
      <TextAfter>Days Old</TextAfter>
    </InnerContainer>
  );
}

function Weight({state: {weight, setWeight}}) {
  return (
    <InnerContainer>
      <TextBefore>They Weighed</TextBefore>
      <Textbox type="number" min="650" max="6000" defaultValue={650} value={weight} onChange={({target})=> setWeight(target.value)}/>
      <TextAfter>Grams at Birth</TextAfter>
    </InnerContainer>
  );
}


function Main() {
  const [stage, setStage] = useState({
    stage1: true,
    stage2: false,
    stage3: false,
    current: 1,
  });

  const [progress, setProgress] = useState(33);

  const [age, setAge] = useState(1);

  const [weight, setWeight] = useState(650);

  const changeStage = (n) => {
    const s = {
      stage1: false,
      stage2: false,
      stage3: false,
      current: n,
    };

    s[`stage${n}`] = true;

    setProgress((n / 3) * 100);
    setStage(s);
  };

  const handleBackClick = () => {
    changeStage(stage.current - 1);
  };

  const handleForwardClick = () => {
    changeStage(stage.current + 1);
  };

  return (
    <Container>
      <Header
        percent={progress}
        handleBackClick={handleBackClick}
        handleForwardClick={handleForwardClick}
      />
      {stage.stage1 && <Age state={{ age, setAge }} />}
      {stage.stage2 && <Weight state={{ weight, setWeight }} />}
      {stage.stage3 && <Problems age={age} weight={weight}/>}
    </Container>
  );
}

export default Main;
