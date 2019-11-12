import React from 'react';
import Header from './component/header';
import './app.scss';
import Headline from './component/headline';

function App() {
  return (<div>
    <Header/>
    test
    <section className="main">
      <Headline header="tse" desc="Click the Button to render posts"/>
    </section>
  </div>);
}

export default App;
