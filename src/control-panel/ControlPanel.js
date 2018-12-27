import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        let { bold, italic, underline } = this.props;
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={bold}><b>B</b></button>
                    <button className="format-action" type="button" onClick={italic}><i>I</i></button>
                    <button className="format-action" type="button" onClick={underline}><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
