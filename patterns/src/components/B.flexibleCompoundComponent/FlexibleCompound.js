import React, { Component} from 'react';

const ToggleContext = React.createContext({
    on : false,
    toggle : () => {}
});

class FlexibleCompound extends Component {
    static On = ({children}) => (
        <ToggleContext.Consumer>
            {
                contextValue => contextValue.on ? children : null
            }
        </ToggleContext.Consumer>
    );

    static Off = ({children}) => (
        <ToggleContext.Consumer>
            {
                contextValue => contextValue.on ? null : children
            }
        </ToggleContext.Consumer>
    );

    static Button = (props) => (
        <ToggleContext.Consumer>
            {
                contextValue => <button onClick={contextValue.toggle} {...props} >Click</button>
            }
        </ToggleContext.Consumer>

    );


    toggle = () => {
        this.setState( prevState => ({ on : !prevState.on}),
            () => this.props.onToggle(this.state.on)
        )
    };

    state = { on : false, toggle : this.toggle};

    render() {
        console.log(ToggleContext);
        return <ToggleContext.Provider value={this.state}>
                  {
              </ToggleContext.Provider>
    }
}

export default FlexibleCompound;
