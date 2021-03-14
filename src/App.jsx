import React, { Component } from 'react';
import {CardList} from './components/card-list/Card-list.component.jsx';
import {SearchBox} from './components/card-list/search-box.component.jsx'
import './app.css'

class App extends Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    changeSearch = e => (this.setState({searchField: e.target.value}));

    render(){
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(
            monster => monster.name.toLowerCase().includes(
                searchField.toLowerCase()
                )
            );
        return (
            <div className='App'>
                <h1>Monster Rolodex</h1>
                <SearchBox changeSearch = {this.changeSearch} />
                <CardList monsters = {filteredMonsters} />
            </div>
        );
    }
}

export default App;