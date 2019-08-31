import React, {Component} from 'react';
import {Counter} from "./components/Counter";

export class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Counter counterName="Asia Counter 1"></Counter>
                <Counter counterName="Asia Counter 2"></Counter>
                <Counter counterName="Asia Counter 3"></Counter>
            </div>
        );
    }
}
