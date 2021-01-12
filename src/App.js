import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: [],
      searchFiled: ''
    }
   // this.handleChange=this.handleChange.bind(this)
  }


  handleChange=(e)=> {
    this.setState({ searchFiled: e.target.value })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => { this.setState({ monsters: users }) });
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeHolder="search monster" handler={this.handleChange} />
        <CardList monsters={this.state.monsters} searchField={this.state.searchFiled} />
      </div>
    );
  }


}

export default App;
