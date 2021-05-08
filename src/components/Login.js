import React from "react";
import styled from "styled-components";
import CustomDropDown from "./CustomDropDown";

import {
  Container,
  Content,
  BgImage,
  OutLinedBox,
  OutLinedInputBox,
} from "./styles";

const options = [
  {
    name: "Trakt",
    image:
      "https://trakt.tv/assets/branding/logos/icon/pixels/trakt-icon-red-46d9d5748d43ee952be3861646c10e584a6e0cbade5ef6651b6de41b88058175.png",
  },
  {
    name: "MAL",
    image:
      "https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAiC8a86sHufn_jOI-JGtoCQ",
  },
  {
    name: "IMDB",
    image:
      "https://cdn0.iconfinder.com/data/icons/social-media-2091/100/social-31-512.png",
  },
  {
    name: "TheMovieDB",
    image:
      "data:image/jpeg;base64,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",
  },
];

function Login() {
  return (
    <Container>
      <Content>
        <LoginBox>
          <OutLinedBox width="50%">
            <LoginBoxContainer>
              <LoginWith>Login With</LoginWith>
              <CustomDropDown options={options} />

              <OutLinedInputBox placeholder="Email" />
              <OutLinedInputBox placeholder="Password" />
              <TsandCs>
                by clicking “Login” you are accepting our nonexsistant terms and
                conditions
              </TsandCs>
              <Submit>LOGIN</Submit>
            </LoginBoxContainer>
          </OutLinedBox>
        </LoginBox>
      </Content>
    </Container>
  );
}
const Submit = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin: 12px;
  width: 2px;
  border-radius: 4px;
  border: 1px solid transparent;
  letter-spacing: 1.5px;
  font-size: 18px;

  padding: 12px;
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

const LoginBox = styled.div`
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

const LoginBoxContainer = styled.div`
  margin: 10px 10px 50px 10px;
`;

const TsandCs = styled.p`
  font-size: 10px;
  font-weight: 200;
`;

const LoginWith = styled.h1`
  display: inline;
  font-weight: bolder;
`;

export default Login;
