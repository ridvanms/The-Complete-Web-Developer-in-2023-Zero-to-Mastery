import React, { Component } from "react";

import CardList from '../components/cardList'
import SearchBox from "../components/searchBox";
import Scroll from "../components/scroll";
import '../assets/style/app.css'
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(respons => {
            return respons.json();
        }).then(users => {
            this.setState({ robots: users })
        })
    }

    onSearchChange = (event) => this.setState({ searchfield: event.target.value })

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc" >
                <h1>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}
export default App;
