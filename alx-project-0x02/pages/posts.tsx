
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces"; 

type Props = {
  posts: PostProps[];
};

export default function Posts({ posts }: Props) {
  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post) => (
          
          <PostCard
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
          content={post.content} 
          />
        ))}
      </div>
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts: PostProps[] = data.slice(0, 10).map((post: any) => ({
    id: post.id,
    userId: post.userId,
    title: post.title,
    content: post.body, 
  }));

  return {
    props: {
      posts,
    },
  };
}
