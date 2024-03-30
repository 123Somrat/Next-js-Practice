'use client'

import { useState , useEffect} from "react"
import Post from "@/app/components/Post"

export default function page() {
 const [post ,setPost] = useState('')


 useEffect(()=>{

   const fetchBookData = async()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res=>res.json())
       .then(data=>setPost(data))
       .catch(error=>{
           console.log(error)
       })
   }

    fetchBookData()


 },[])



  return (
 
     <div className="container mx-auto grid grid-cols-3 gap-5">
         {post && post.map(post=><Post 
             key={post.id}
             post={post}
         
         />)}
    </div>
   
   
  )
}
