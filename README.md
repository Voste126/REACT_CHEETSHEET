# REACT_CHEETSHEET

| Package/Method     | Description                                                          | Code Example                                                      |
|---------------------|----------------------------------------------------------------------|-------------------------------------------------------------------|
| let and const      | `let` allows you to restrict the scope of variables within the block where they are declared. `const` allows you to declare constants whose values cannot be changed.|```javascript
    {
    let a = 10;
    console.log(a);
    a = 15;
    console.log(a);
    }
    console.log(a);
    const num = 5;
    console.log(num);
    num = 8; // This will throw an error
    console.log(num); // This will not execute

    ``` |
| Arrow function     | Arrow functions allow you to write shorter function syntax.         | ```javascript
hello = () => {
  return "Hello World!";
}

    ```|

| Promises           | The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. | ```javascript
let promiseArgument = (resolve, reject) =>
    setTimeout (() => {
      let currTime = new Date().getTime();
      if (currTime % 2 === 0) {
        resolve("Success");
      } else {
        reject("Failed!!!");
      }
    }, 2000);

let myPromise = new Promise(promiseArgument);
    ``` |
| class              | Class is a template or blueprint for creating objects.               | ```javascript
function Car(name, year) {
  this.name = name;
  this.year = year;
  return this;
}

let car = new Car("Ford", 2014);
console.log(car);
console.log(car.name);
console.log(car.year);
    ``` |
| Inheritance        | A class created with a class inheritance inherits all the methods from another class. | ```javascript
class Square extends Rectangle {
  constructor(height, width) {
    if (height === width) {
      super(height, width);
    } else {
      super(width, width);
    }
  }
}

let mySquare = new Square(5, 5);
    ``` |
| React components   | Components are reusable segments of code that come under the class and functional component types. | ```javascript
import React from 'react';
import { Text } from 'react-native';

const HelloWorld = () => {
  return (
        <Text>Hello, World!</Text>
  );
}

export default HelloWorld;
    ``` |
| React class Component | React class component contains- Props: set from outside the class State: internal to the class | ```javascript
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }
  render() {
    return (
      <>
        <button onClick={() => { this.setState({ change: !this.state.change }); }}>Click Here!</button>
        {this.state.change ? <Text>Hello!!</Text> : <Text>Welcome to the React Course</Text>}
      </>
    );
  }
}

export default App;
    ``` |
| onClick            | When an event fires, event handlers decide what should happen next. This could involve pressing a button or altering a text entry. | ```javascript
function changeColor() {
  const shoot = () => {
    alert("Color Changed!");
  }
  return (
    <button onClick={change}>Change the Color! </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<changeColor />);
    ```|
