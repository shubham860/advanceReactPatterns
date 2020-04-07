import React, {Component, Children, cloneElement} from 'react';

class CompoundToggle extends Component {
    static On = ({on, children}) => (on ? children : null);

    static Off = ({on, children}) => (on ? null : children);

    static Button = ({on, toggle, ...props}) => (
        <button onClick={toggle} {...props} >Click</button>
    );

    state = { on : false};

    toggle = () => {
      this.setState( prevState => ({ on : !prevState.on}),
          () => this.props.onToggle(this.state.on)
      )
    };

    render() {
        return Children.map(this.props.children, child =>
            cloneElement(child, {
                on: this.state.on,
                toggle: this.toggle,
            })
        )}
}

export default CompoundToggle;
