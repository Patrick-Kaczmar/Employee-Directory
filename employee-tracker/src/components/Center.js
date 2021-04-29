import React, { Component } from "react";
import Table from "./Table"
import API from "../utils/API";
import People from "./People"
import Header from "./Header"

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

    render() {
        return <>
            <Header sortBy = {this.sortBy}/>
            <Table>
                <People people={this.state.people}/>
            </Table>
        </>
    }
}

export default Center;