import React, { Component, Fragment } from 'react';
import GameBoard from '../gameBoard';
import CardDeck from '../cardDeck';
import GifCard from '../gifcard';
import './masthead.css';

class Masthead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mastheadInitialState: props,
            gifSearchField: '',
            gifSearchResults: [],
            hasSearched: false
        }
    }

    componentDidMount() {

    }

    formStateChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitSearch = (e) => {
        e.preventDefault();
        if (!this.state.hasSearched) {
            const APIKey = 'c1BJcDvA6sWBiMUAcncBxkaoqiYADfoL';
            const queryURL = `https://api.giphy.com/v1/gifs/search?q=${this.state.gifSearchField}&limit=15&api_key=${APIKey}`;
            let component = this;
    
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    let resultsArr = [];
                    let tempArr = [];
                    resultsArr = JSON.parse(this.responseText);
                    resultsArr = resultsArr.data;
                    tempArr = resultsArr;
                    let duplicatedArr = resultsArr.concat(tempArr);
                    duplicatedArr.sort(function(a, b) {
                        return 0.5 - Math.random()
                    });
    
                    component.setState({
                        gifSearchResults: duplicatedArr,
                        gifSearchField: '',
                        hasSearched: true
                    });
                    console.log(component.state);
                }
            }
            xhttp.open("GET", queryURL, true);
            xhttp.send();
        }
    }

    disableSearch = () => {
        if (this.state.hasSearched) {
            return 'btn btn-outline-danger disabled';
        }
        else {
            return 'btn btn-outline-danger';
        }
    }

    render() {
        return (
            <Fragment>
                <div className='jumbotron jumbotron-fluid bg-dark'>
                    <div className='container'>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='gifSearch' className='text-light'>Search for Gif</label>
                                <div className='input-group mb-2 mr-sm-2'>
                                    <input type='text' name='gifSearchField' className='form-control' id='gifSearch' placeholder='Search for a Gif' value={this.state.gifSearchField} onChange={this.formStateChange}></input>
                                    <div className='input-group-append'>
                                        <button type='submit' className={this.disableSearch()} id='submitGif' onClick={this.submitSearch}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <GameBoard>
                    <CardDeck>
                        {this.state.gifSearchResults.map((gifCard, index) => {
                            if (index <= 5) {
                                return <GifCard key={`${gifCard.id}-1`} gifImage={gifCard.images.fixed_height.url} gifTitle={index + 1} />
                            }
                        })}
                    </CardDeck>
                    <CardDeck>
                        {this.state.gifSearchResults.map((gifCard, index) => {
                            if (index > 5 && index <= 11) {
                                return <GifCard key={`${gifCard.id}-1`} gifImage={gifCard.images.fixed_height.url} gifTitle={index + 1} />
                            }
                        })}
                    </CardDeck>
                    <CardDeck>
                        {this.state.gifSearchResults.map((gifCard, index) => {
                            if (index > 11 && index <= 17) {
                                return <GifCard key={`${gifCard.id}-1`} gifImage={gifCard.images.fixed_height.url} gifTitle={index + 1} />
                            }
                        })}
                    </CardDeck>
                    <CardDeck>
                        {this.state.gifSearchResults.map((gifCard, index) => {
                            if (index > 17 && index <= 23) {
                                return <GifCard key={`${gifCard.id}-1`} gifImage={gifCard.images.fixed_height.url} gifTitle={index + 1} />
                            }
                        })}
                    </CardDeck>
                    <CardDeck>
                        {this.state.gifSearchResults.map((gifCard, index) => {
                            if (index > 23 && index <= 29) {
                                return <GifCard key={`${gifCard.id}-1`} gifImage={gifCard.images.fixed_height.url} gifTitle={index + 1} />
                            }
                        })}
                    </CardDeck>
                </GameBoard>
            </Fragment>
        )
    }
}

export default Masthead;