import React, { Component } from "react";
import './post-list-item.css';

export default class PostListItem extends Component {
    

    render(){
     
        let classes = "app-list-item d-flex justify-content-between";
        
        if(this.props.important){
            classes += ' important'
        }
        if(this.props.like){
            classes += ' like'
        }
        return(
            <div className={classes}>
            <span className="app-list-item-label" onClick={this.props.onToggleLike}>
              {this.props.label}
            </span>
            <div className="d-flex justify-content-center aligh-items-center">
                <button type="button" className="btn-star btn-sm" onClick={this.props.onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" className="btn-trash btn-sm" onClick={this.props.onDeletePost} >
                <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        )
    }
}




