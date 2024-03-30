'use client'

import React, { useEffect, useState } from 'react'

export default function page({params}) {
 
    const postId = params.id;
    const [post,setPost]= useState({
         id : '',
         userId : '',
         title : '',
         body : ''
    })

   // destructure element from post
    const {userId , title , body} = post;
 
 
    // fetching data from jsonPlace holder
useEffect(()=>{
   
  const fetchSinglePost = ()=>{
     
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res=>res.json())
    .then(data=>setPost(data))
    .catch(err=>{
       console.log(err)
    })

  }

  fetchSinglePost()


},[])



  return (
    <div className='w-[450px] mx-auto border-2 border-white p-4 text-justify'>
         <h1>UserId : {userId}</h1>
         <h2>Tittle : {title}</h2>
         <p>Body : {body}</p>

    </div>
  )
}
