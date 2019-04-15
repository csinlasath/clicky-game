import React, {Component, Fragment} from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: props.initialState
        };
    }

    render() {
        return (
            <Fragment>
                <header>
                    <nav className='navbar navbar-dark bg-dark'>
                        <a className='navbar-brand' href='/'>Giphy-Clicky</a>
                    </nav>
                </header>
            </Fragment>
        );
    }
}

export default Navbar;