import React, { useState } from 'react';
import styles from "./App.module.css";
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
const App = () => {

  const [calVal,setCalVal]=useState("")
  const onButtonClick=(buttonText)=>{
    if(buttonText==="C"){
      setCalVal("")

    }
    else if(buttonText==="="){
      let result=eval(calVal);
      setCalVal(result);

    }
    else{
     let  newDisplayValue=calVal+buttonText;
      setCalVal(newDisplayValue);

    }
  }


  return (
    <>
      <center>
        <h1>Calculator</h1>
        <div className={styles.calculator}>
          <Display DisplayValue={calVal} />
          <ButtonsContainer  onButtonClick={onButtonClick}/>



        </div>
      </center>
    </>
  )
}

export default App
