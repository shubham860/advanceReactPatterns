import React from 'react';
import StateInitializer from "./StateIntializer";
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
        }))
        this.props.onToggle(...args)
    }
    handleReset = (...args) => {
        this.setState(this.initialState)
        this.props.onReset(...args)
    }
    toggleStateReducer = (state, changes) => {
        if (this.state.timesClicked >= 4) {
            return {...changes, on: false}
        }
        return changes
    }
    render() {
        const {timesClicked} = this.state
        return (
            <StateReducer
                stateReducer={this.toggleStateReducer}
                onToggle={this.handleToggle}
                onReset={this.handleReset}
            >

                {
                    ({on, toggleProps, reset}) =>
                        <div>
                            <h1>{on ? "I'm on" : "I'm off"}</h1>
                            <button {...toggleProps({onClick: greet})}>{on ? "on" : "off"}</button>
                            <button onClick={() => reset()}>{on ? "on" : "off"}</button>
                        </div>
                }
                {toggle => (
                    <div>
                        <Switch
                            {...toggle.getTogglerProps({
                                on: toggle.on,
                            })}
                        />
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
export {StateReducer, Usage as default}

export default function Usage({
                                  onReset = (...args) => console.log('onReset', ...args)}){
    const  greet = () => alert("rolla");

    const onToggle = (...args) => console.log('onToggle', ...args);

    const onInitial = false;
    return(
        <StateInitializer onToggle={onToggle} onInitial={onInitial} onReset={onReset}>
            {
                ({on, toggleProps, reset}) =>
                    <div>
                        <h1>{on ? "I'm on" : "I'm off"}</h1>
                        <button {...toggleProps({onClick: greet})}>{on ? "on" : "off"}</button>
                        <button onClick={() => reset()}>{on ? "on" : "off"}</button>
                    </div>
            }
        </StateInitializer>
    )
}
