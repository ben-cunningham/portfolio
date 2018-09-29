import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from 'photo-blog';

class PersonalPortfolio extends React.Component {
    render() {
        return (
            <div>
                <h1>Portfolio component</h1>
                <Portfolio /> 
            </div>
        )
    }
}

ReactDOM.render((
    <PersonalPortfolio />
), document.getElementById('gallary'));
