// state reducer

import React from 'react'

const callAll = (...fns) => (...args) =>
    fns.forEach(fn => fn && fn(...args));

export default class StateReducer extends React.Component {
    static defaultProps = {
        initialOn: false,
        onReset: () => {},
        stateReducer: (state, changes) => changes,
    };
    initialState = {on: this.props.initialOn};
    state = this.initialState;
    internalSetState(changes, callback) {
        this.setState(state => {
            // handle function setState call
            const changesObject =
                typeof changes === 'function' ? changes(state) : changes;
            // apply state reducer
            const reducedChanges =
                this.props.stateReducer(state, changesObject) || {};
            // return null if there are no changes to be made
            // (to avoid an unecessary rerender)
            return Object.keys(reducedChanges).length
                ? reducedChanges
                : null
        }, callback)
    }
        reset = () =>
            this.internalSetState(this.initialState, () =>
        this.props.onReset(this.state.on),
    );
    toggle = () =>
        this.internalSetState(
            ({on}) => ({on: !on}),
            () => this.props.onToggle(this.state.on),
        );
    getTogglerProps = ({onClick, ...props} = {}) => ({
        onClick: callAll(onClick, this.toggle),
        'aria-pressed': this.state.on,
        ...props,
    });
    getStateAndHelpers() {
        return {
            on: this.state.on,
            toggle: this.toggle,
            reset: this.reset,
            getTogglerProps: this.getTogglerProps,
        }
    }
    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}
