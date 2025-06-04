import {  type PostProps } from "@/interfaces";

const PostCard = ({id, userId, title, content}: PostProps) => {

    return(
         <div className="bg-yellow-400 text-white px-4 py-6 rounded mb-4">
            <h1>{id}</h1>
            <h2 className="font-bold">User ID: {userId}</h2>
            <h3 className="text-xl">{title}</h3>
            <p>{content}</p>
        </div>


    )
}

export default PostCard; 