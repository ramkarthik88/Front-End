import React, {Component} from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    }    

    onClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    
    render() {
        return (
            <div>
                <li onClick={this.onClick}>
                    {this.props.title}
                </li>
                <div className={this.state.isToggleOn ? 'active' : 'hidden'}>
                    {this.props.description}
                </div>
            </div>
        )
    }

}