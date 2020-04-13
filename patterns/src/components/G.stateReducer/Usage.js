import React from "react";
import StateReducer from "./StateReducer";

class Usage extends React.Component {
    static defaultProps = {
        onToggle: (...args) => console.log('onToggle', ...args),
        onReset: (...args) => console.log('onReset', ...args),
    }
    initialState = {timesClicked: 0}
    state = this.initialState
    handleToggle = (...args) => {
        this.setState(({timesClicked}) => ({
            timesClicked: timesClicked + 1,
        }));
        this.props.onToggle(...args)
    };
    handleReset = (...args) => {
        this.setState(this.initialState);
        this.props.onReset(...args)
    };
    toggleStateReducer = (state, changes) => {
        if (this.state.timesClicked >= 4) {
            return {...changes, on: false}
        }
        return changes
    };
    render() {
        const {timesClicked} = this.state
        return (
            <StateReducer
                stateReducer={this.toggleStateReducer}
                onToggle={this.handleToggle}
                onReset={this.handleReset}
            >
                {toggle => (
                    <div>
                        <button
                            {...toggle.getTogglerProps({
                                on: toggle.on,
                            })}
                        >Clickme</button>
                        {timesClicked > 4 ? (
                            <div data-testid="notice">
                                Whoa, you clicked too much!
                                <br />
                            </div>
                        ) : timesClicked > 0 ? (
                            <div data-testid="click-count">
                                Click count: {timesClicked}
                            </div>
                        ) : null}
                        <button onClick={toggle.reset}>Reset</button>
                    </div>
                )}
            </StateReducer>
        )
    }
}
Usage.title = 'State Reducers'

export default Usage;
