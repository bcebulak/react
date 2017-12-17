import React, { Component } from 'react'
import logo from './logo.svg'
//import pic from './pizzaPic.png'

import './App.css' 

//import AppBar from './material-ui/lib/app-bar'
// missing library? 

import person, {favoriteColor} from "./Data"
import Pizza from "./Pizza"
import extendsComponent from "./extendsComponent"

class App extends Component {
  state = {
    thumbsUpCount: 222,
    pizzaName: "Default Pizza Name"
  }


/* function Button() {
  return (
    <button>Go</button>
  );
} */ // doesn't compile


/* pizzaNameOnChangeHandler ((e) => {
            console.log(e)
            console.log(e.target)
            console.log(e.target.value)
            this.setState({
                pizzaName: e.target.value
            })
}} */

  render() {
    //alert('do alerts work here?')
    
    return (
      <div className="App">
        
        <ShoppingList name="sl" />     

        Pizza Name: <input type="text" onChange={(e) => { 
            console.log("event e = " + e)
            console.log("e.target = " + e.target)
            console.log("e.target.value = " + e.target.value)
            this.setState({
                pizzaName: e.target.value
                
            })
           
        }} />
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello my name is {person.name} and I like {favoriteColor}.  
          { person.isFunny ? "true" : "false"

          }
        </p>
        {/* 
        <Message specialMessage={person.name} /> 
        {Message({ specialMessage: "Hello from " + person.name + "  -." })}
 */}


        <Pizza pizzaName="The Killer" price={6.99} thumbsUpCountApp={1} />


        <img src="./pizzaPic.png" alt="pizza" />
          
          



      </div>
    )
  }
}
export default App;