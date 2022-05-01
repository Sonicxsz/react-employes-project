import React, { Component } from "react";
import './search-panel.css'

export default class Searchpanel extends Component {
    constructor(props){
        super(props);
        this.state={
            term: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e){
        const term = e.target.value;
        this.setState({
            term
        });
        this.props.onUpdateSearch(term);
    }

    render(){
        return(
            <input className="form-control search-input"
            onInput={this.onInputChange}
            type="text"
            value={this.state.term}
            placeholder="Поиск по записям"
            ></input>
        );
    }
}
