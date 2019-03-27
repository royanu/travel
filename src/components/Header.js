import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <div className="App-header">
                <nav className="header">
                    <a href="#">Destinations</a>
                    <a href="#">Photo Stories</a>
                </nav>
            </div>
        )
    };
}

export default Header;