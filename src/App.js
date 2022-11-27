import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {
  state = {
    persons: [
      { name: 'Matus', age: 24 },
      { name: 'Maros', age: 28 },
      { name: 'Eli', age: 25 }
    ],
    otherState: 'value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //this.state.persons[1].name = 'Jano';
    this.setState({
      persons:[
        { name: 'Matus', age: 24 },
        { name: newName, age: 28 },
        { name: 'Eli', age: 25 }
      ]
     })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        { name: 'Matus', age: 24 },
        { name: event.target.value, age: 28 },
        { name: 'Eli', age: 25 }
      ]
    }

    )
  }

  render() {

    const style = {
      backgroundColer: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working.</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Jano')}>Swtich Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'Jony')}
        changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works now ?'))
  }
}

export default App;
