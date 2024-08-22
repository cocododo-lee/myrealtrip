import React from 'react';
import  Buttons from '../components/atoms/Buttons'
const Home:React.FC = () => {
  return (
    <div>
        <h1>Home</h1>
        <Buttons
      width="150px"
      height="30px"
      bgColor="green"
      fontColor="indigo"
      fontSize="16px"
      >Button Clone Coding</Buttons>
    </div>
  )
}

export default Home