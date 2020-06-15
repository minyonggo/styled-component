import React, {Component} from 'react';
import styled, {createGlobalStyle, keyframes, css, ThemeProvider} from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0; margin: 0;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Button />
        </Container>
      </ThemeProvider>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

export default App;
