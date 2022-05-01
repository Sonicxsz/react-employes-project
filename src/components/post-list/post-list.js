import React from "react";
import './post-list.css'
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from "reactstrap";

const PostList = (props) =>{
  
  

   let elemetsPost = props.data.map(i =>{
      
      return <PostListItem
         label={i.label} like={i.like}
        important={i.important}
        textInput={props.textInput}
        key={i.id}
        
        onToggleImportant={() =>{
          props.onToggleImportant(i.id);
      }}
        onDeletePost={() =>{
          props.onDeletePost(i.id)
        }}
        onToggleLike={() =>{
            props.onToggleLike(i.id)
        }}
      
      />
   });


       return( 
        <ListGroup >
            <ListGroupItem >
            {elemetsPost}

            </ListGroupItem>
            
       </ListGroup>
       );
    }


export default PostList;