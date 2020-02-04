import React, { Component } from 'react';
import './App.css';
import './components/card-list/card-list.components';
import { CardList } from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {              //state
      monsters : [],
      searchField : ""
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())  // we need to convert to corresponding json format
    .then(users => this.setState({monsters : users}))  // set the state with user array
  }

  handleChange = e =>{
    this.setState({searchField : e.target.value})
  }

  render() {
      /*
        const monster = this.state.monsters
        const searchField = this.state.searchFiled
        */
         const {monsters,searchField } = this.state;
         const filteredMonsters = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchField.toLowerCase())
          );
    return (
      <div className="App">
        <h1>Monster rolodex</h1>
        <SearchBox 
         placeholder="search monsters" 
         handleChange={this.handleChange} />

        <CardList monsters = {filteredMonsters} />    {/*cardlist component recieves state has prop*/}
        
      </div>
    );
  }
}

export default App;
