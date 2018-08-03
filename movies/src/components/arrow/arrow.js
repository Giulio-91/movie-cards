import React, {Component} from 'react';
import './arrow.css';

export class Arrow extends Component {

    constructor(props) {
        super(props);
        if(props.direction === 'left'){
            this.direction = 'arrow-left';
        } else {
            this.direction = 'arrow-right';
        }
    }

    render() {
        //
        return(
            <div className="arrow" onClick={this.props.onClick}>
                <div className={this.direction}></div>
            </div>
        )
    }
}