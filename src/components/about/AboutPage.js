import React from 'react';
import Frame from '../common/Frame';
import Dummy from '../common/Dummy';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>React, Redux and React Router</p>
                <Frame onLoad={this.onLoadHandler}>
                    <Dummy />
                </Frame>
            </div>
        );
    }
}

export default AboutPage;