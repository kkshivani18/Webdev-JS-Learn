import React from 'react';
import Assignment1 from './components/Assignment1';
import Assignment2 from './components/Assignment2';
import Assignment3 from './components/Assignment3';
import Assignment4 from './components/Assignment4';
import Assignment5 from './components/Assignment5';
import ReactDOM from 'react-dom';
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'

function App() {
  const user = useRecoilValue()
  return (
      <RecoilRoot>
        <Assignment1 />
        {/* <Assignment2 /> */}
        {/* <Assignment3 /> */}
        {/* <Assignment4 /> */}
        <Assignment5 />
      </RecoilRoot>
  );
};

export default App;
