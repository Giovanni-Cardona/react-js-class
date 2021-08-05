import React from 'react';
import './App.css';

function Welcome(props) {
  const date = new Date();
  const hour = date.getHours();
  let timeOfDay;
  let classNameValue;
  let display=true;
  
  if (hour < 12) {
    timeOfDay = "morning"
    classNameValue = "Morning"
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = "afternoon";
    classNameValue = "Afternoon"
  } else {
    timeOfDay = "night";
    classNameValue = "Night"
  }

  return (
    <div>
      <h2> Welcome {props.firstname} {props.lastname} </h2>
      {display ? <p className={classNameValue}>Good {timeOfDay}</p> : null}
    </div>
  );
}
export default Welcome;
    