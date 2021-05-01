import React, { Component } from "react";
import Table from "./Table"
import API from "../utils/API";
import People from "./People"
import Header from "./Header"
import SearchBar from "./searchbar"

class Center extends Component {

    state = {
        people: []
    }

    componentDidMount() {
        API.search().then(res => {
            console.log(res.data);
            this.setState({people: res.data.results})
        })
    }

    sortBy = (key, key2, order) => {
        let sortType = [...this.state.people];
        sortType.sort((a, b) => {
            return a[key][key2] > b[key][key2] ? order * 1 : order * -1;
        });
        this.setState({people: sortType})
    }

    filterByName = event => {
        event.preventDefault();
        let filterName = document.getElementById("nameFilter").value;
        let listCopy = [...this.state.people];
        let selectedName = listCopy.filter(selected => (selected.name.last).toLowerCase() === (filterName).toLowerCase());
        this.setState({people: selectedName});
    }

    render() {
        return <>
            <Header sortBy = {this.sortBy}/>
            <br/><br/>
            <SearchBar filterByName = {this.filterByName}/>
            <Table>
                <People people={this.state.people}/>
            </Table>
        </>
    }
}

export default Center;