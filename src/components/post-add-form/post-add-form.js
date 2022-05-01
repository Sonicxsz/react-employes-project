import React, { Component } from "react";
import './post-add-form.css'
export default class PostAddForm extends Component{
   
    constructor(props){
        super(props);
        this.state= {
            label:this.text
        }
        this.text = ''
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onChangeInput(e){
        this.text = e.target.value;

        this.setState({
            label: this.text
        });
    }
    
    onAdd(e){
        e.preventDefault();
        if(this.state.label){
            this.props.addMessage(this.state.label);
            this.setState({
                label:''
            });
        }
    }
   render(){
    return(
        <form className="botton-panel d-flex botton-margin"
            onSubmit={this.onAdd}
        >
            <input
                type="text"
                placeholder="о чем вы думаете"
                className="form-control new-post-label"
                onChange={this.onChangeInput}
                value={this.state.label}
                
            ></input>
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >Добавить
            </button>
            

        </form>
    )
   }
}

