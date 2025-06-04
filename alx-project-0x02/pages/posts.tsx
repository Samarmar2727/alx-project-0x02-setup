
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { useEffect, useState } from "react";


 interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function  Posts() {

    const [posts, setPosts] = useState<Post[]>([]);

     useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10))); 
  }, []);



    return (
    <>
    <Header/>
     <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          userId={post.userId}
          title={post.title}
          content={post.body}
        />
      ))}
    </div>
    </>
    )
}