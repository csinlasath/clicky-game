import React, { Component, Fragment } from 'react';
import './gameBoard.css';

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Fragment>
                <div className='container' id='game-board'>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default GameBoard;