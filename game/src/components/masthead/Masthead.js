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
            gifOriginalArr: [],
            gifDuplicateArr: [],
            gifSearchResults: [],
            hasSearched: false,
            gameStart: false,
            clickNumber: 0,
            firstClickId: '',
            secondClickId: '',
            foundMatch: false
        }
    }

    componentDidMount() {
        if (this.state.foundMatch) {

        }
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
            let resultsArr = [];   
            let tempArr = [];  
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {

                    resultsArr = JSON.parse(this.responseText);
                    resultsArr = resultsArr.data;
                    console.log(resultsArr);
                    if (resultsArr.length === 15) {
                        tempArr = JSON.parse(this.responseText);
                        tempArr = tempArr.data;
                        for (let i = 0; i < tempArr.length; i++) {
                            tempArr[i].id += '-duplicate';
                        }

                        console.log(tempArr);
                        console.log(resultsArr);
                        let matchedArr = resultsArr.concat(tempArr);
                        matchedArr.sort(function (a, b) {
                            return 0.5 - Math.random()
                        });
    
                        component.setState({
                            gifSearchResults: matchedArr,
                            gifSearchField: '',
                            hasSearched: true,
                            gameStart: true
                        });
                        console.log(component.state);
                    }
                    else {
                        component.setState({
                            gifSearchResults: resultsArr,
                            gifSearchField: '',
                            hasSearched: false,
                            gameStart: false
                        }); 
                    }
                }
            }
            xhttp.open("GET", queryURL, true);
            xhttp.send();
        }
    }

    disableSearch = () => {
        if (this.state.gifSearchResults >= 30) {
            if (this.state.hasSearched) {
                return 'btn btn-outline-danger disabled';
            }
            else {
                return 'btn btn-outline-danger disabled';
            }
        }
        else {
            return 'btn btn-outline-danger';
        }
    }

    checkForMatch = (e) => {
        if (this.state.clickNumber === 0) {
            this.setState((state) => ({
                firstClickId: e,
                clickNumber: state.clickNumber + 1
            }), () => console.log(this.state));
        }
        if (this.state.clickNumber === 1) {
            this.setState((state) => ({
                secondClickId: e,
                clickNumber: 0
            }), () => {
                console.log(this.state);
                if (this.state.firstClickId === this.state.secondClickId) {
                    console.log('Found a match!');
                    this.setState({
                        foundMatch: true
                    });
                }
            });
        }
        // if (this.state.clickNumber === 1) {
        //     this.setState({
        //         secondClickId: e,
        //         clickNumber: 2
        //     }, () => {
        //         console.log(this.state)
        //         if (this.state.firstClickId === this.state.secondClickId) {
        //             console.log("Found a match!");
        //             this.setState({
        //                 clickNumber: 0
        //             });
        //         }
        //     });
        // }
    }

    shortenDataId = (gifId) => {
        const updatedId = gifId.replace('-duplicate', '');
        return updatedId;
    }

    resetGame = () => {
        document.getElementById('game-board').innerHTML = '';
        window.location.assign('/');
    }

    render() {
        if (this.state.gifSearchResults.length >= 30) {
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
                                    return <GifCard key={`${gifCard.id}`} gifImage={gifCard.images.fixed_height.url} gifTitle={index + 1} dataId={this.shortenDataId(gifCard.id)} isMatched={false} checkForMatch={(e) => this.checkForMatch(e)}/>
                                }
                                else {
                                    return (
                                        <div key={`card-row-1-${index}`}></div>
                                    )
                                }
                            })}
                        </CardDeck>
                        <CardDeck>
                            {this.state.gifSearchResults.map((gifCard, index) => {
                                if (index > 5 && index <= 11) {
                                    return <GifCard key={`${gifCard.id}`} gifImage={gifCard.images.fixed_height.url} gifTitle={index + 1} dataId={this.shortenDataId(gifCard.id)} isMatched={false} checkForMatch={(e) => this.checkForMatch(e)} />
                                }
                                else {
                                    return (
                                        <div key={`card-row-2-${index}`}></div>
                                    )
                                }
                            })}
                        </CardDeck>
                        <CardDeck>
                            {this.state.gifSearchResults.map((gifCard, index) => {
                                if (index > 11 && index <= 17) {
                                    return <GifCard key={`${gifCard.id}`} gifImage={gifCard.images.fixed_height.url} gifTitle={index + 1} dataId={this.shortenDataId(gifCard.id)} isMatched={false} checkForMatch={(e) => this.checkForMatch(e)} />
                                }
                                else {
                                    return (
                                        <div key={`card-row-3-${index}`}></div>
                                    )
                                }
                            })}
                        </CardDeck>
                        <CardDeck>
                            {this.state.gifSearchResults.map((gifCard, index) => {
                                if (index > 17 && index <= 23) {
                                    return <GifCard key={`${gifCard.id}`} gifImage={gifCard.images.fixed_height.url} gifTitle={index + 1} dataId={this.shortenDataId(gifCard.id)} isMatched={false} checkForMatch={(e) => this.checkForMatch(e)} />
                                }
                                else {
                                    return (
                                        <div key={`card-row-4-${index}`}></div>
                                    )
                                }
                            })}
                        </CardDeck>
                        <CardDeck>
                            {this.state.gifSearchResults.map((gifCard, index) => {
                                if (index > 23 && index <= 29) {
                                    return <GifCard key={`${gifCard.id}`} gifImage={gifCard.images.fixed_height.url} gifTitle={index + 1} dataId={this.shortenDataId(gifCard.id)} isMatched={false} checkForMatch={(e) => this.checkForMatch(e)} />
                                }
                                else {
                                    return (
                                        <div key={`card-row-5-${index}`}></div>
                                    )
                                }
                            })}
                        </CardDeck>
                        <button type='submit' className='btn btn-danger' id='reset-game' onClick={(e) => this.resetGame(e)}>Reset Game</button>
                    </GameBoard>
                </Fragment>
            )
        }
        else if ((this.state.gifSearchResults.length > 2) && (this.state.gifSearchResults.length < 30)) {
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
                        <h2>Not Enough Gifs to fill the board.  Try Searching again!</h2>
                    </GameBoard>
                </Fragment>
            )
        }
        else {
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
                        <h2>Search for Gifs to Start</h2>
                    </GameBoard>
                </Fragment>
            )
        }

    }
}

export default Masthead;