// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = () => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Pablo', age: '24' },
//       { name: 'Danielle', age: '21' }
//     ]
//   });

//   const switchNameHandler = (newName) => {
//     //console.log('Was clicked!');
//     setPersonsState({
//       persons: [
//         { name: newName, age: '24' },
//         { name: 'Danielle', age: '21' }],
//     });
//   };
//   console.log(personsState);

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <button onClick={() => switchNameHandler('Pablo Nunes')} >Button</button>
//       <Person click={switchNameHandler.bind(this, 'Pablo Henrique')} name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
//     </div>
//   );
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World!'));
// };

// export default app;

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Pablo', age: '24' },
//       { name: 'Danielle', age: '21' }
//     ]
//   }

//   switchNameHandler = (newName) => {
//     //console.log('Was clicked!');
//     this.setState(
//       {
//         persons: [
//           { name: newName, age: '24' },
//           { name: 'Danielle', age: '21' }
//         ]
//       })
//   }

//   nameChangedHandler = (event) => {
//     this.setState(
//       {
//         persons: [
//           { name: 'Pablo', age: '24' },
//           { name: event.target.value, age: '21' }
//         ]
//       })
//   }

//   render() {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px'
//     };

//     return (
//       <div className="App">
//         <h1>Hello World</h1>
//         <button
//           style={style}
//           onClick={() => this.switchNameHandler('Pablo Nunes')} >Button</button>
//         <div>
//           <Person click={this.switchNameHandler.bind(this, 'Pablo Henrique')}
//             name={this.state.persons[0].name}
//             age={this.state.persons[0].age}></Person>
//           <Person changed={this.nameChangedHandler}
//             name={this.state.persons[1].name}
//             age={this.state.persons[1].age}></Person>
//         </div>
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World!'));
//   }
// }

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Pablo', age: '24' },
      { id: '2', name: 'Danielle', age: '21' },
      { id: '3', name: 'Vera', age: '77' }
    ]
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //Es6 sintaxe with spread for copying array breaking the pointer to old object
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    // const person = this.state.persons.find(person => person.id === id);

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({},this.state.persons[personIndex]);

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState(
      {
        persons: persons
      });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = this.state.showPersons ? (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        })}
      </div>) : null;

    return (
      <div className="App">
        <h1>Hello World</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler} >Toggle</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World!'));
  }
}

export default App;
