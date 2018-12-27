import React, { Component } from 'react'
import './Word.css';
class Word extends Component {
    state = {
        isBold: false,
        isItalic: false,
        isUnderline: false,
        index: this.props.index,
        word: this.props.word,
        syn: []
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            ...this.props.newState
        })
    }

    onMouseUp = () => {
        fetch(`http://api.datamuse.com/words?rel_syn=car&max=3`)
            .then(item => item.json())
            .then(data => {
                let words = data.map(item => item.word)
                this.setState({
                    ...this.state,
                    syn: [...words]
                })
            });
        let data = this.state;
        let key = this.state.index;
        this.props.event(key, data);
    }

    render() {
        let {word} = this.props;
        return (
            <span onMouseUp={this.onMouseUp} style={{fontWeight: this.state.isBold ? 900 : 'normal', fontStyle: this.state.isItalic ? 'italic' : 'normal', textDecoration: this.state.isUnderline ? 'underline' : 'none'}} data-syn={this.state.syn ? this.state.syn.join(' ') : null}>{word} </span>
        )
    }
}

export default Word;