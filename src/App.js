import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {

    state = {
        initText: '...Loading',
        selectedItem: {},
        lastItem: null
    }

    getText = () => {
        getMockText().then((result) => {
            this.setState({
                initText: result.split(' ')
            })
        });
    }

    onMouseUp = (key, data) => {
        let selectedItem = this.state.selectedItem;
        selectedItem[key] = data || undefined;
        this.setState({
            ...this.state,
            ...selectedItem,
            lastItem: key
        })
    }

    bold = () => {
        let selectedItem = this.state.selectedItem;
        selectedItem[this.state.lastItem].isBold = !selectedItem[this.state.lastItem].isBold;
        this.setState({
            ...this.state,
            selectedItem
        })
    }

    italic = () => {
        let selectedItem = this.state.selectedItem;
        selectedItem[this.state.lastItem].isItalic = !selectedItem[this.state.lastItem].isItalic;
        this.setState({
            ...this.state,
            selectedItem
        })
    }

    underline = () => {
        let selectedItem = this.state.selectedItem;
        selectedItem[this.state.lastItem].isUnderline = !selectedItem[this.state.lastItem].isUnderline;
        this.setState({
            ...this.state,
            selectedItem
        })
    }

    componentDidMount() {
        this.getText();
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel bold={this.bold} italic={this.italic} underline={this.underline}/>
                    <FileZone data={this.state.initText} event={this.onMouseUp} bold={this.bold} newState={this.state.selectedItem} />
                </main>
            </div>
        );
    }
}

export default App;
