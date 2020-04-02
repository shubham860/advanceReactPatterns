import React, {Component} from 'react';

class SetstateCallback extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    Inc = () => {
        this.setState((prevState,props) => {
            const {max,step} = props;
            if(prevState.count === max) return;
            return {count : prevState.count + step}
        },
            () => console.log(`hello count is updated to ${this.state.count}`)
        );
        console.log("before update",this.state.count);
    };

    Dec = () => {
        this.setState({
            count : this.state.count - 1
        });
    };

    Reset = () => {
        this.setState({
            count : 0
        })
    };

    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.Inc}>Increment</button>
                <button onClick={this.Dec}>Decrement</button>
                <button onClick={this.Reset}>Reset</button>
            </div>
        );
    }
}

export default SetstateCallback;
