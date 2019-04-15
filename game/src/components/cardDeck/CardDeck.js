import React, { Component, Fragment } from 'react';
import './cardDeck.css';

class CardDeck extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    };

    render() {
        return (
            <Fragment>
                <div className='container'>
                    <div className='card-deck'>
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CardDeck;