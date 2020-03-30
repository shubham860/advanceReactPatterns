import React, {Component} from 'react';

const Increment = (prevState,props) => {
    const {max,step} = props;
    if(prevState.count === max) return;
    return {count : prevState.count + step}
};

class Setstate extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    Inc = () => {
        this.setState(Increment);
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

export default Setstate;
