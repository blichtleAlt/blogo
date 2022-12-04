import React from 'react'
import Post from "./Post"
import { useState, useEffect } from 'react';
import axios from 'axios';

export interface PostListProps {
    response: any
}

export const PostList = () => {
    const [getPosts, setPosts] =  useState([])

    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/posts/').then(res => {
        console.log(res.data.posts)
        setPosts(res.data.posts)
      }).catch((error: any) => {
        console.log(error)
      })
    }, [])

    return (
        <div>{(getPosts) != null ? 
            <div>      
              {(getPosts != null && getPosts.length !== 0) ?
              getPosts.map(function(post: any) { 
                return (<Post key={post.postId} title={post.title} author={post.userId} text={post.text} id={post.postId}/>) 
               }) 
               : 
            <h3>No Posts</h3>}
            </div>
            :
        <h3>LOADING</h3>}</div>
    );
}