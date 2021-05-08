import styled from "styled-components";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: calc(100vh - 70px);
`;

const Content = styled.section`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: calc(100vh - 70px);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 80px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/Images/MovieGrid.png");

  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(
    248.66deg,
    #000000 0%,
    rgba(0, 0, 0, 0.0551181) 64.58%,
    rgba(0, 0, 0, 0) 72.92%
  );
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const OutLinedBox = styled.div`
  font-weight: normal;
  color: #f9f9f9;
  background-color: #1a1d29;
  width: ${(props) => props.width};
  border-radius: 33px;
  border: 2px solid white;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
`;

const OutLinedInputBox = styled.input`
  width: 90%;
  padding: 20px;
  border-radius: 50px;
  border: 2px solid white;
  background-color: #131313;
  color: #f9f9f9;
  margin: 10px;

  &:focus {
    outline: none;
  }
`;

export { Container, Content, BgImage, OutLinedBox, OutLinedInputBox };
