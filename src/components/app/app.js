import React, { Component } from "react";
import AppHeader from "../app-header";
import Searchpanel from "../search-panel";
import PoststatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            postListData: [
                {label:'Здарова дауны', important: false, like: true, id:1},
                {label:'Здарова loyers', important: false, like: false, id:2},
                {label:'Здарова miders', important: false, like: false, id:3}
            ],
            term: '',
            filter:'all'
        };

        this.id = 4;
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.onDeletePost = this.onDeletePost.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.searchLike = this.searchLike.bind(this);
        this.onUpdateFilter = this.onUpdateFilter.bind(this);
    }

    onDeletePost(id){
        this.setState(({postListData}) =>{
            const index = postListData.findIndex(elem => elem.id === id);

            let newArr = [...postListData.slice(0, index), ...postListData.slice(index + 1)];

            return{
                postListData: newArr
            }
        })
    }
    

    onToggleImportant(id){
 
        this.setState(({postListData}) => {
            const index = postListData.findIndex(elem => elem.id === id);
            const old = postListData[index],
                  newItem = {...old, important: !old.important},
                  newArr = [...postListData.slice(0,index), newItem, ...postListData.slice(index + 1)]
 
            return {
                postListData: newArr
            }

        });

        
    }       

    onToggleLike(id){
        
        const index = this.state.postListData.findIndex(elem => elem.id === id);
        let newItem = this.state.postListData[index];
            newItem.like = !newItem.like;
        let newArr = this.state.postListData.slice(0, index); newItem; this.state.postListData.slice(index);
        this.setState({
           state: newArr
        });
        
    } 
    
    addMessage(text){
        let message = {
            label: text,
            important: false,
            like: false,
            id: this.id++
        };
        
        
        
        this.setState(({postListData}) =>{
            let newArr = [...postListData, message];
            return{
                postListData: newArr
            }
        });
        
    }

    searchPost(items, term){
        if(this.state.term.length === 0){
            return items
        }else{
            return items.filter((item) =>{
                return item.label.indexOf(term) > - 1
            });
        }
        
    }
   
    onUpdateSearch(term){
        this.setState({
            term
        });
        
    }

    searchLike(items, filter){
        if(filter == 'like'){
            return items.filter(item =>{
               return item.like
            })
        }else{
            return items
        }
    }
    onUpdateFilter(filter){
        this.setState({
            filter: filter
        });
    }
  
    render(){
        let liked = this.state.postListData.filter(i =>{
            if(i.like) return i
        }).length;

        let allPost = this.state.postListData.length;
         
        let variables = this.searchLike(this.searchPost(this.state.postListData, this.state.term), this.state.filter);
          
        return(
            <div className="app">
                <AppHeader liked={liked} allPost={allPost}/>
            <div className="search-panel d-flex">
                <Searchpanel 
                onUpdateSearch={this.onUpdateSearch}
                />
                <PoststatusFilter 
                    filter={this.state.filter}
                    onUpdateFilter={this.onUpdateFilter}
                />
            </div>
            
            <div className="app appMax">
            <PostList 
            onDeletePost={this.onDeletePost}
            onToggleLike={this.onToggleLike}
            data={variables} 
            
            onToggleImportant={this.onToggleImportant}/>
            </div>
            <PostAddForm 
                addMessage={this.addMessage}
            />
            </div>
        );
    }

    
}

