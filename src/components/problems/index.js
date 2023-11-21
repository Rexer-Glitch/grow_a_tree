import { useEffect, useRef, useState } from "react";
import {
  Container,
  InnerCOntainer,
  Title,
  Content,
  Feeds,
} from "./index_styles";
import {
  getFeeds,
  getTotalTFI,
  getTFI,
  getIVFpH,
  catagorizeWeight,
  drugCalculation
} from "../../helper/neo_references";

function DailyFeeding({ age, weight }) {
  const [totalFeeds, setTotalFeeds] = useState(
    age === 1 ? 0 : getTFI(age, weight)
  );
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef(null);

  const [tFeeds, setTlFeeds] = useState(totalFeeds);

  const setTFeeds = (value, TFI) => {
    const percentMatch = /^(\d{1,2}(\.\d{1,2})?|100(\.0{1,2})?)%$/.exec(value);

    if (percentMatch) {
      setTlFeeds((TFI * (parseFloat(percentMatch[1]) / 100)).toFixed(1));
    } else if (/^\d*\.?\d+$/.test(value)) {
      setTlFeeds(parseFloat(value));
    } else if (value.endsWith(".")) {
      setTlFeeds(value);
    }

    setTotalFeeds(value);
  };

  useEffect(()=> {
    const handleDocumentClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowContent(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return ()=> document.removeEventListener("click", handleDocumentClick);
  }, [])

  return (
    <InnerCOntainer ref={containerRef}>
      <Title  onClick={()=> setShowContent(!showContent)}>Daily Feeding</Title>
      <Content isVisible={showContent}>
        {weight < 2500 && (
          <h4>
            Assessment
            <ol>
              <li>Prematurity with {catagorizeWeight(weight)} @ DOL #{age}</li>
            </ol>
            
          </h4>
        )}
        <h4>Plan</h4>
        <ol>
          <li>
            TFI @ {getTotalTFI(age, weight)}\kg\24h = {getTFI(age, weight)} /
            24h <br /> <b>Total feeds for the day:</b>
            <Feeds
              type="text"
              placeholder="0"
              value={totalFeeds}
              onChange={({ target }) =>
                setTFeeds(target.value, getTFI(age, weight))
              }
            />
            <br />
            {parseFloat(tFeeds) !== 0 && (
              <p>
                <b>Feeds</b> @ {getFeeds(parseFloat(tFeeds)).toFixed(1)}ml every
                3 hourly
              </p>
            )}
            {tFeeds !== getTFI(age, weight) && (
              <p>
                <b>IVF</b> @{" "}
                {getIVFpH(getTFI(age, weight) - parseFloat(tFeeds))}ml of{" "}
                {age === 1 ? "10% dextrose" : "1/2 DD"}{" "}
              </p>
            )}
          </li>
        </ol>
      </Content>
    </InnerCOntainer>
  );
}

function RespiratoryDistress({ age, weight }) {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef(null);

  useEffect(()=> {
    const handleDocumentClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowContent(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return ()=> document.removeEventListener("click", handleDocumentClick);
  }, [])
  return (
     <InnerCOntainer ref={containerRef}>
      <Title onClick={()=> setShowContent(!showContent)}>Respiratory Distress Syndrome</Title>
      <Content isVisible={showContent}>
        <h4>
          Assessment
          <ol>
            <li>Respiratory Distress Syndrome most probably due to __</li>
            {weight < 2500 && (
              <li>
                Prematurity with {catagorizeWeight(weight)} @ DOL #{age}
              </li>
            )}
          </ol>
        </h4>

        <h4>Plan</h4>

        <ol>
            <li>Admit to SCBU in HD</li>
            <li>KEEP NPO</li>
            <li>TFI @ {getTotalTFI(age, weight)}\kg\24h = {getTFI(age, weight)} / 24h
              <p>
                <b>IVF</b> @ {getIVFpH(getTFI(age, weight))}ml of 10% dextrose
              </p>
            </li>
            <li>
                GIVE <ol>
                    <li dangerouslySetInnerHTML={{__html: drugCalculation(weight, "ampicillin")}} />
                    <li dangerouslySetInnerHTML={{__html: drugCalculation(weight, weight < 2500 ? "gentamycin" : "gentamycin_term")}}/>
                    <li dangerouslySetInnerHTML={{__html: drugCalculation(weight, "aminophylline_loading")}} />
                    <li dangerouslySetInnerHTML={{__html: drugCalculation(weight, "aminophylline_maintenance")}} />
                </ol>
            </li>
            <li>
                PUT on O2 to MAINTAIN SpO2 &gt; 92%
            </li>
            <li>
                MONITOR vitals closely
            </li>
        </ol>
      </Content>
    </InnerCOntainer>
  );
}

function Macrosomia({weight}){
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef(null);

  useEffect(()=> {
    const handleDocumentClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowContent(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return ()=> document.removeEventListener("click", handleDocumentClick);
  }, [])

    return <>{weight > 4200 && <InnerCOntainer ref={containerRef}>
        <Title onClick={()=> setShowContent(!showContent)}>Macrosomia</Title>
       <Content isVisible={showContent}>
            <h4>Assessment
              <ol>
                <li>Macrosomia @ {weight} grams</li>
              </ol>
              </h4>
            <h4>Plan</h4>
            <ol>
                <li>Admit to SCBU - nurse with mother</li>
                <li>Feed on demand</li>
                <li>MONITOR RBS closely</li>
            </ol>
        </Content>
    </InnerCOntainer>}</>
}



function Problems({age, weight}) {
  return (
    <Container>
      <DailyFeeding age={age} weight={weight} />
      <RespiratoryDistress age={age} weight={weight} />
      <Macrosomia weight={weight} />
    </Container>
  );
}

export default Problems;
