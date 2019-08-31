import React, {Component} from 'react';

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5
        }
    }

    addCount() {
        this.setState({count: this.state.count + 1});
    }

    subtractCount() {
        this.setState({count: this.state.count - 1});

    }

    resetCount() {
        this.setState({count: 0});

    }

    render() {
        return (
            <div className="border d-inline-block m-3 p-3">
                <h1>{this.props.counterName}</h1>
                <button className="btn btn-primary mr-3" onClick={this.addCount.bind(this)}>+</button>
                <button className="btn btn-danger mr-3" onClick={this.subtractCount.bind(this)}>-</button>
                <button className="btn btn-info" onClick={this.resetCount.bind(this)}>Reset</button>
                <h4>Counter {this.state.count}</h4>
            </div>
        );

    }
}

/*
* 1. Component
* 2. Render
* 3. State
* */
