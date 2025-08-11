import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 0;
  const deleteValue = () => {
    if(counter > 0) {
      counter--;
      setCounter(counter);
    }
  }

  const addValue = () => {
    // console.log("Value added", Math.random());
    // if(counter < 20)  { //Homework
    //   counter++;
    //   setCounter(counter);
    // }

    //Concept of badges
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);  //if add the value the increament will be of only one every time because of the state
    // //so we have to use the concept of callbacks
    // setCounter(counter + 1);

    setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);

            setCounter(prevCounter => prevCounter + 1);

                setCounter(prevCounter => prevCounter + 1);


  }

  return (

    
    <>
     <h1>Gaurav aur React</h1>
     <h3>Counter value: {counter}</h3>

     <button onClick={addValue}>Increase</button>
     <br />
     <button onClick={deleteValue}>Decrease</button>

    <p>{counter}</p>
    </>
  )
}

export default App
