import { useState } from 'react'
import './App.css';
import Card from './components/Card'


function App() {

  // ---------------React Counter---------------

  let [counter, updatedCounter] =useState(15)

  // let counter = 5
  const addValue= () => {
    // updatedCounter(counter+1)
    // updatedCounter(counter+1)   return these states as a batch (identical so increment will be only 1)
    // updatedCounter(counter+1)
    // updatedCounter(counter+1)



    updatedCounter(prevCounter => prevCounter + 1)
    updatedCounter(prevCounter => prevCounter + 1)  // also return batch but at every updatedCounter it takes previous counter value which makes it different (increment of 4)
    updatedCounter(prevCounter => prevCounter + 1)
    updatedCounter(prevCounter => prevCounter + 1)
  }
  const subValue = ()=>{
    updatedCounter(counter--)
    console.log(updatedCounter);
  }

  return (
    <>   
    <h1>React Counter</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>
      Add Value</button>
      <br/>
      <button onClick={subValue}>
      reduce Value</button>
    </>

  );

  // --------------props and tailwind------------------
  // return (
  //   <>
  //     <Card numbered="2"/>
  //     <Card numbered="3"/>
  //     <Card numbered="4"/>
  //     <Card/>
  //   </>
  // )

}

export default App;
