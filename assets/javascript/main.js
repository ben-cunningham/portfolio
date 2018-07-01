import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <h1>Portfolio component</h1>
            </div>
        )
    }
}

ReactDOM.render((
    <Portfolio />
), document.getElementById('gallary'));
