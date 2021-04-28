import React, { Component } from "react";
import Table from "./Table"
import API from "../utils/API";
import People from "./People"

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

    render() {
        return <>
            <Table>
                <People people={this.state.people}/>
            </Table>
        </>
    }
}

export default Center;