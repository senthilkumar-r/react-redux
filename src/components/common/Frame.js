import React from 'react';

class Frame extends React.Component {
    render() {
        return (
            <iframe ref="iframe" width="800" height="400">
            </iframe>
        );
    }
}

Frame.propTypes = {
};

export default Frame;