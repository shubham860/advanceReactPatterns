import React, {Component} from 'react';

class RenderProps extends Component {
    state = {on: false};

    toggle = () => {
        this.setState(prevState => ({on: !prevState.on}),
            () => this.props.onToggle(this.state.on)
        )
    };

     args() {
         return {on: this.state.on, toggle: this.toggle}
     }

    render() {
         console.log(this.props);
        return this.props.children(this.args())
    }
}

export default RenderProps;
