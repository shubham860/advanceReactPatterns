import React, {Component} from 'react';

class PropsCollection extends Component {
    state = {on: false};

    toggle = () => {
        this.setState(prevState => ({on: !prevState.on}),
            () => this.props.onToggle(this.state.on)
        )
    };

    propsCollection() {
        return {
            on: this.state.on,
            toggle: this.toggle,
            propsHeap : {
                on : this.state.on,
                onClick : this.toggle
            }
        }
    }

    render() {
        console.log(this.props);
        return this.props.children(this.propsCollection())
    }
}

export default PropsCollection;
