import React, { Component } from "react";
import { connect } from "react-redux";
import { display, fetchData } from "../actions";
import Card from "../components/card";
import "./index.scss";

export class App extends Component {
    state = {
        users: [1, 3, 3]
    };
    render() {
        const { users } = this.state;
        return (
            <div className="main">
                {users.map((user, index) => (
                    <Card key={index} />
                ))}
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    return {
        mostrar: () => dispatch(display()),
        get: () => dispatch(fetchData())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
