import React from "react";

import styled from "styled-components";
import banner4 from "../shared/banner4.png";

const Page4 = () => {
  return (
    <React.Fragment>
      <div style={{ padding: "6rem 0"}}>
        <Div>
          <Image></Image>
          {/* <div>
            <H1>
              멀리있는 맛집까지
              <br /> 부담없이 배달시켜!
            </H1>
            <P>
            줄서먹는 멀리 있는 맛집 배달비
            <br /> 10000원? 4명이서 나누면 2500원!
            <br /> 줄서지말고 같이 배달시켜 먹자!
            </P>
            {/* <div>
              <A href="https://town.daangn.com/">당근마켓 동네가게 찾기</A>
            </div> */}
          {/* </div> */}
        </Div>
      </div>
    </React.Fragment>
  );
};

export default Page4;

const Div = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.div`
  background-image: url(${banner4});
  background-size: 1200px 735px;
  width: 1200px;
  height: 735px;
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

const A = styled.a`
  background-color: #f1f3f5;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 15px 20px;
  display: inline-block;
  font-size: 18px;
  line-height: 1.47;
  letter-spacing: -0.3px;
  font-weight: 900;
  -webkit-tap-highlight-color: rgba(73, 80, 87, 0.05);
`;