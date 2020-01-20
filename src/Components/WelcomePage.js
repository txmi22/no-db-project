import React from 'react';

function WelcomePage(props){
  return(
     <div className="welcome-page">
       {props.welcomeToggle && 
      <p className="background-page">
        <button className='welcome-btn' onClick={props.turnOff} > Click Me </button>
      </p>
       }
    </div>
  )
}

export default WelcomePage;
