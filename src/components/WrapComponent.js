import React from 'react';
import {useState,useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function WrapComponent() {
  const [age,setAge] = useState(0)
  const [score,setScore] = useState(100)
  const incrementAge = useCallback(()=> {
    setAge(age + 1)
  },[age])
  const incrementScore = useCallback(()=> {
    setScore(score + 1)
  },[score])

  return (
    <div>
      <Title />
      <Count text = '年齢' count = {age} />
      <Count text = '信用スコア' count = {score} />
      <Button handleClick={incrementAge}>Age++</Button>
      <Button handleClick={incrementScore}>Score++</Button>
    </div>
  );
}

export default WrapComponent;
