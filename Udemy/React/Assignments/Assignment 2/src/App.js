import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator';
import Char from './Char/Char';

class App extends Component {

  state = {
    length: 0,
    string: ""
  }

  inputChangeHandler = (event) => {
      this.setState({length: event.target.value.length, string: event.target.value});
  }


  deleteCharHandler = (charIndex) => {
    const resultChars = [...this.state.string];
    resultChars.splice(charIndex,1);
    this.setState({string: resultChars.join("")})
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input onChange={this.inputChangeHandler} value={this.state.string}/>
        <p>{this.state.length}</p>
        <Validator length={this.state.length}></Validator>
        {
          [...this.state.string].map((char, index) => {
              return <Char key={index} value={char} click = {() => this.deleteCharHandler(index)} ></Char>
            }
          )
        }
      </div>
    );
  }
}

export default App;
