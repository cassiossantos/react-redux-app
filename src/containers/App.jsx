import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import Card from "../components/card";
import Loading from "../components/loading";

import "./index.scss";

export class App extends Component {
    componentWillMount() {
        this.props.get();
    }
    render() {
        const { loading, users } = this.props.store;
        return (
            <div className="main">
                {loading ? (
                    <Loading />
                ) : (
                    users.map(user => <Card key={user.id} {...user} />)
                )}
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
        get: () => dispatch(fetchData())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
