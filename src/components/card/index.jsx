import React, { Component } from "react";
import "./index.scss";

export default class Card extends Component {
    render() {
        const { email, name } = this.props;
        return (
            <div className="card">
                <div className="name">{name}</div>
                <div className="email">{email}</div>
            </div>
        );
    }
}
