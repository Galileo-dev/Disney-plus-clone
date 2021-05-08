import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Container, Content, BgImage } from "./styles";

const GetStarted = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>Get Started Here</SignUp>
          <Description>
            {" "}
            As of 02/05/2021 Axel is Unofficially not Open for Business as this
            is not a Real Streaming Service and is just a Movie Explorer. so for
            just €1 you can get Nothing and I mean Nothing we don't Even Take
            Payments. But we do take Donations Which Should be Somewhere on my
            Github Page. Did I Mention this is in No Way Affiliated with Any
            Brand.
          </Description>
        </CTA>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css"
        />
        <a
          class="github-fork-ribbon right-bottom"
          href="https://url.to-your.repo"
          data-ribbon="Fork me on GitHub"
          title="Fork me on GitHub"
        >
          Fork me on GitHub
        </a>
        <BgImage />
      </Content>
    </Container>
  );
};

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;

  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 550px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 85%;
  border-radius: 4px;
  border: 1px solid transparent;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  transition: all 0.2s ease 0s;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
`;

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default GetStarted;
