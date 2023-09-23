import './App.css';
import {Helmet} from "react-helmet";
import TopSection from './components/TopSection';
import MiddleSection from './components/MiddleSection';
import BottomSection from './components/BottomSection';
import { useState } from 'react';

function App() {

  const[diners,setDiners]=useState(0)

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopSection props={{diners:diners,setDiners:setDiners}}/>
      <MiddleSection diners={diners}/>
      <BottomSection/>
    </div>
  );
}

export default App;
