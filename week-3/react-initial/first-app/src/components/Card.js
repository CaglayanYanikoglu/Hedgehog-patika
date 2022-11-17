import React, { useEffect } from 'react';

// const Card = (props) => {
const Card = ({
  countValue, appName
}) => {
  // console.log('props from card: ', props);
  useEffect(() => {
    console.log('use effect');
  // }, [countValue])
  }, [])
  // dependency array

  return (
    <>
      <h1>{appName}</h1>
      <div className="card">
        <span>SCORE</span>
        <span>{countValue}</span>
      </div>
    </>
  );
};

/* function Card() {
  return (
    <p>Card</p>
  )
} */


export default Card;
