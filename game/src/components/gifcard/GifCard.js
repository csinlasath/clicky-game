import React, { Component, Fragment } from 'react';
import './gifcard.css';

class GifCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            isMatched: this.props.isMatched,
            checkForMatch: this.props.checkForMatch,
            gifId: this.props.gifId,
            gifImage: this.props.gifImage,
            gifCoverImg: 'http://assets.materialup.com/uploads/5d38e79f-3463-4f72-8716-5c62b2d9847b/0x0ss-85.jpg',
        };
    }

    componentDidMount() {
    }

    handleClick = () => {
        if (this.state.isMatched === false) {
            this.setState({
                isClicked: true,
            });
        }
    }

    showGif = () => {
        if (this.state.isClicked) {
            return this.state.gifImage;
        }
        else {
            return this.state.gifCoverImg;
        }
    }

    isMatched = () => {
        if (this.state.isMatched) {
            return 'success';
        }
        else {
            return 'dark';
        }
    }

    render() {
        return (
            <Fragment>
                    <div className={`card bg-${this.isMatched()} text-center text-white revealed-card bg-${this.isMatched()} border-${this.isMatched()}`} style={{ width: '300px', height: '125px' }} onClick={(e) => {this.state.checkForMatch(e.target.dataset.id); this.handleClick()}} data-id={this.props.dataId}>
                        <img className='card-img' src={this.showGif()} alt={this.props.gifTitle} style={{ width: '100%', height: '90px' }} data-id={this.props.dataId}></img>
                        <p className={`card-title bg-${this.isMatched()} text-muted`} data-id={this.props.dataId}>{this.props.gifTitle}</p>
                    </div>
            </Fragment>
        )
    }
}

export default GifCard;