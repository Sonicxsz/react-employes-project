import React, { Component } from "react";
import './post-status-filter.css';

export default class PoststatusFilter extends Component{
    constructor(props){
        super(props);
    
        this.buttons=[
            {name:'all', label:'Все'},
            {name:'like', label:'Понравилось'}
        ]

    }


   render(){
       
    const buttons = this.buttons.map(i =>{
        const active = i.name == this.props.filter;
        const clazz = active ? 'btn btn-info' : 'btn btn-outline-secondary';
        return <button
         key={i.name} className={clazz}
         onClick={()=>{
             this.props.onUpdateFilter(i.name)
         }}
         >{i.label}</button>

    })
    
    
          
    return(
        <div className="btn-group">
            {buttons}
        </div>
    )
   }

}

