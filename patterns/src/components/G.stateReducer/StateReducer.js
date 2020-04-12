import React, {Component} from 'react';

const callAll = (...fns) => (...args) =>
    fns.forEach(fn => fn && fn(...args));


class StateReducer extends Component {
    static defaultProps = {
        initialOn: false,
        onReset: () => {},
        stateReducer: (state, changes) => changes,
    };

    initialState = {on: this.props.initialOn};

    state = this.initialState;

    internalSetState(changes, callback) {
        this.setState(state => {
            const changesObject = typeof changes === 'function' ? changes(state) : changes;
            const reducedChanges = this.props.stateReducer(state, changesObject) || {};
            return Object.keys(reducedChanges).length
                ? reducedChanges
                : null
        }, callback)
    }


    toggle = () => {
        this.internalSetState(prevState => ({on: !prevState.on}),
            () => this.props.onToggle(this.state.on)
        )
    };

    reset = () =>
        this.internalSetState(this.initialState, () =>
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

export default StateReducer;
