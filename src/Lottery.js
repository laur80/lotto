import React, { useState } from "react";
import Ball from "./Ball";
import "./Lottery.css";

function Lottery () {

 const helpers= {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };
  
    const[state,setState]=useState({ nums: Array.from({ length: helpers.numBalls }) });
 
 function generate() {
    setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * helpers.maxNum) + 1
      )
    }));
  }

  function handleClick() {
    generate();
  }
 
    return (
      <section className='Lottery'>
        <h1>{helpers.title}</h1>
        <div>
          {state.nums.map((n,i) => (
            <Ball key={i} num={n} />
          ))}
        </div>
        <button onClick={handleClick}>Generate</button>
      </section>
    );

}

export default Lottery;
