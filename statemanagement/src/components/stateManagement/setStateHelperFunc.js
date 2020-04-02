import React, {Component} from 'react';

const getStateFromLocalStorage = () => {
  let storage = localStorage.getItem('State');
  if(storage) return JSON.parse(storage);
  return {count : 0}
};

const setStateToLocalStorage = (state) => {
    localStorage.setItem('State',JSON.stringify(state));
};

class SetstateHelperFunc extends Component {
    constructor(props){
        super(props);
        this.state = getStateFromLocalStorage();
    }

    setDocumentTitle = () => {
      document.title = this.state.count
    };

    Inc = () => {
        this.setState((prevState,props) => {
                const {max,step} = props;
                if(prevState.count >= max) return;
                return {count : prevState.count + step}
            },
            // () =>  localStorage.setItem('count',this.state.count)
            () => {
                setStateToLocalStorage(this.state);
                this.setDocumentTitle();
            }
        );
    };

    Dec = () => {
        this.setState({
            count : this.state.count - 1
        },this.setDocumentTitle);
    };

    Reset = () => {
        this.setState({
            count : 0
        },this.setDocumentTitle)
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

export default SetstateHelperFunc;
