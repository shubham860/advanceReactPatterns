import React, {Component} from 'react';

const callAll = (...fns) => (...args) =>
    fns.forEach(fn => fn && fn(...args));


class PropsGetter extends Component {
    state = {on: false};

    toggle = () => {
        this.setState(prevState => ({on: !prevState.on}),
            () => this.props.onToggle(this.state.on)
        )
    };


    propsToggler = ({onClick,...props}) => ({
       onClick : callAll(onClick,this.toggle),
        ...props
    });


    propsCollection() {
        return {
            on: this.state.on,
            toggle: this.toggle,
            toggleProps : this.propsToggler
            }
        }


    render() {
        return this.props.children(this.propsCollection())
    }
}

export default PropsGetter;
