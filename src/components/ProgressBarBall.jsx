import React from 'react';

import useWindowWidth from '../hooks/useWindowWidth'

const ProgressBarBall = ({ title, progressBarWidth, value }) => {

  const { width } = useWindowWidth();

  const isTextVisible = () => {
    if(width > 600){
      return true;
    }else if(width < 600 && progressBarWidth === value){
      return true
    }else{
      return false;
    }    
  }

  return ( 
    <div className="progressBar__ball" style={
      progressBarWidth >= value 
      ? {backgroundColor: 'gold', border: '1px solid transparent'}
      : {backgroundColor: 'black', border: '1px solid white'}
    }>
      <span className="progressBar__ball-text" style={isTextVisible() ? {display: 'block'} : {display: 'none'}}>{title}</span>
    </div>
   );
}
 
export default ProgressBarBall;