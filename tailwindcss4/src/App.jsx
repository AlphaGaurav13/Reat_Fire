import React from 'react'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    username : "Gaurav",
    age : 20
  }
  

  return (
    <>
       <Card channelname="Gaurav"  channel3 = {myObj}/>
       <Card channelname="uskanaam" btntext="AI-ML"/>
    </>
  )
}

export default App
