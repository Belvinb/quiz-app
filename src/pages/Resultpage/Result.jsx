import React from 'react'


const Result = ({ score}) => {

  return (
    <div>
      <h1>Your result:</h1>
      <h1>In this test you have {score} correct answers out of 5</h1>
     
    </div>
  );
};

export default Result