import { useRouter } from 'next/navigation'
export default function Post({post}) {
 
  const router = useRouter()

  const handleClick = (id)=>{
       router.push(`/dashboard/books/${id}`)
  }




  return (
    <div className="border-2 border-white p-2" onClick={()=>handleClick(post.id)}>
       <h1>Tittle : {post?.title}</h1>
       <p>Body : {post?.body}</p>
    </div>
  )
}
