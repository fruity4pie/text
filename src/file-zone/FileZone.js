import React, { Component } from 'react';
import './FileZone.css';
import Word from '../word/Word';

class FileZone extends Component {
    // elemRef = React.createRef();
    // onMouseUp={event} ref={this.elemRef}
    render() {
        let { data, event, newState } = this.props;
        return (
            <div id="file-zone">
                <div id="file">
                    {data !== '...Loading' ? data.map((item, index) => <Word word={item} key={index} index={index + 1} event={event} newState={newState.index === index ? newState : null} />) : data}
                </div>
            </div>
        );
    }
}

export default FileZone;
