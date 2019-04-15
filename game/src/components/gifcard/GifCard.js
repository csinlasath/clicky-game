import React, { Component, Fragment } from 'react';
import './gifcard.css';

class GifCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            gifId: '',
            numberInSet: ''

        };
    }

    componentDidMount() {
        this.setState({
            isClicked: false,
            gifId: this.props.gifId,
            numberInSet: ''
        })
    }

    handleClick = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <button key={this.props.gifId} className='card bg-dark text-center text-white' style={{ width: '300px', height: '125px' }}>
                    <img className='card-img' src={this.props.gifImage} alt={this.props.gifTitle} style={{ width: '100%', height: '90px' }}></img>
                    <p className='card-title text-muted'>{this.props.gifTitle}</p>
                </button>
            </Fragment>
        )
    }
}

export default GifCard;