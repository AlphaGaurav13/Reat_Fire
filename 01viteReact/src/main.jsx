import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function Krishna() {
  return (
    <div>
      <h2>I got my Eyes on you (-)</h2>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href : 'https://google.com',
//     target: '_blank'
//   },
//   childeren: 'Google'
// }

//this is how we inject the variable in the object

const oye2 = "Gaurav is ninja";
//this is the way our actual react take input in the form of object not like we made in the custom React
const reactElement = React.createElement(
  //this React.createElement method is automatically injected into our html using the babble(basically a transpiler)
  //this is evaluated expression
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Google',
  oye2
  //after creation of all the tree variable injection starts

)


const newElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
