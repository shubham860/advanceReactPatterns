import React, {Component} from 'react';

const callAll = (...fns) => (...args) =>
    fns.forEach(fn => fn && fn(...args));


class StateInitializer extends Component {
    static defaultProps = {
        initialOn: false,
        onReset: () => {},
    };

    initialState = {on: this.props.initialOn};

    state = this.initialState;



    toggle = () => {
        this.setState(prevState => ({on: !prevState.on}),
            () => this.props.onToggle(this.state.on)
        )
    };

    reset = () =>
        this.setState(this.initialState, () =>
            this.props.onReset(this.state.on),
        );


    propsToggler = ({onClick,...props}) => ({
        onClick : callAll(onClick,this.toggle),
        ...props
    });


    propsCollection() {
        return {
            on: this.state.on,
            toggle: this.toggle,
            toggleProps : this.propsToggler,
            reset : this.reset

        }
    }


    render() {
        return this.props.children(this.propsCollection())
    }
}

export default StateInitializer;
