import React, {Component, Fragment} from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <Button danger />
      <Button />
    </Fragment>
  );
}

const Button = ({danger}) => (
  <button className={danger
  ?"button button--danger"
  :"button button--success"}>Hello</button>
);


export default App;
