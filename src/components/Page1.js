import React from "react";

import styled from "styled-components";
import banner1 from "../shared/banner1.png";

const Page1 = () => {
  return (
    <React.Fragment>
      {/* 배너 1 */}
      <div style={{ backgroundColor: "#cfdde8" }}>
        <DIV1>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <H1>
              이웃과 배달비를
              <br />
              나눌수 있다!
            </H1>
            <P>
              동네 이웃과 같이 배달비도 나누고
              <br />
              친해지고! <strong>'나'</strong>와 <strong>'누'</strong>군가<strong>'기'</strong>다렸던 플랫폼
            </P>
          </div>

          <Image1></Image1>
        </DIV1>
      </div>
    </React.Fragment>
  );
};

export default Page1;

const DIV1 = styled.div`
  width: 1500px;
  height: 760px;
  margin: 0px 100px 0px 200px;
  background-color: #cfdde8;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const H1 = styled.h1`
  font-size: 3.2rem;
  line-height: 1.3;
  padding-top: 100px;
  margin: 0px;
  margin-bottom: 2rem;
  letter-spacing: -0.4px;
  font-weight: 900;
`;

const P = styled.p`
  font-size: 17px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Image1 = styled.div`
  bottom: 0;
  width: 754px;
  height: 635px;
  background-image: url(${banner1});
  background-size: 754px 635px;
  margin: 120px 0px 0px 0px;
`;