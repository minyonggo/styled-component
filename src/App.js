import React, {Component} from 'react';
import styled, {createGlobalStyle, keyframes, css} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0; margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Button rotationTime={5}>Hello!</Button>
        <Button danger rotationTime={5}>Hello!</Button>
        <Anchor href="https://google.com">Go to Google</Anchor>
      </Container>
    );
  }
}

const rotation = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg);}
`;
const rotation_css = (danger, rotationTime) => {
  if(danger) return css`${rotation} ${rotationTime}s linear infinite;`;
  return css`${rotation} ${rotationTime}s linear infinite reverse;`
};


const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
  animation: ${props => (rotation_css(props.danger, props.rotationTime))};
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;
