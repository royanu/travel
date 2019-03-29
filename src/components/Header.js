import React, {Component} from 'react';

const header = (props) => {
    return(
        <div className="App-header">
            <nav className="header">
                <a className="header-link" href="#">Destinations</a>
                <a className="header-link" href="#">Photo Stories</a>
            </nav>
        </div>
    )
};

export default header;