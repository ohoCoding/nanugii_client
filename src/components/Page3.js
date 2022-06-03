import React from "react";

import styled from "styled-components";
import banner3 from "../shared/banner3.png";

const Page3 = () => {
  return (
    <React.Fragment>
      <div
        style={{
          padding: "6rem 0",
          backgroundColor: "#cfdde8",
          display: "block",
        }}
      >
        <Div>
          <Image></Image>
          <div>
            <H1>
              근처에 있는
              <br /> 맛집도 공유받기!
            </H1>
            <P>다른 사람만 알고있던 맛집도 알고, <br />나만 알고있던 맛집도 공유하고!
            </P>
          </div>
        </Div>
      </div>
    </React.Fragment>
  );
};

export default Page3;

const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
  justify-content: space-between;
`;

const Image = styled.div`
  // background-image: url(${banner3});
  background-size: 546px 740px;
  width: 546px;
  height: 740px;
  display: inline-block;
`;

const H1 = styled.div`
  font-size: 2.5rem;
  line-height: 1.35;
  margin-bottom: 2.4rem;
  font-weight: 800;
`;

const P = styled.p`
  font-size: 17px !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
`;