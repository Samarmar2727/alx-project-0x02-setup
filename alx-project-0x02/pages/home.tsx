
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import {useState} from "react"; 
export default function Home (){
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

     const handleAddPost = (data: { title: string; content: string }) => {
        setPosts([...posts, data])
        setIsModalOpen (false)

     }


    return (
        <>
        <Header/>
         <Card title="Frontend Magic" content="This is a reusable card component!" />
         <button onClick={() => setIsModalOpen(true)}>Add Post</button>

        {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
         ))}
         {isModalOpen && <PostModal onSubmit={handleAddPost}/>}
         
        </>

    )
}