import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  const [mode,setMode]=useState('dark');
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
     <Navbar title="PracticeApp" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
     {/* <Navbar/> */}
     <TextForm title="text"  mode={mode}/>
    </>
  );
}

export default App;
