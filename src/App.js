import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import Search from './components/search/search-component';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
      searchTerm : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters: users}))
  }

  findMonsters = () =>  {
    const { monsters, searchTerm} = this.state;
    if(searchTerm) {
      return monsters.filter((monster)=>
            monster.name.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      return monsters;
    }
  }

  // this keyword here is bind to the app component because arrow functions bind the this keyword to the context
  // where they are defined. 
  handleChange= (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    const monsters = this.findMonsters()
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder='search monster' handleChange={this.handleChange}/>
        <CardList monsters = {monsters}/>
      </div>
    );
  }
}
export default App;
