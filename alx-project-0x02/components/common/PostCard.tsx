import {  type PostProps } from "@/interfaces";

const PostCard = ({userId, title, content}: PostProps) => {

    return(
         <div className="bg-yellow-400 text-white px-4 py-6 rounded mb-4">
            <h1 className="font-bold">User ID: {userId}</h1>
            <h2 className="text-xl">{title}</h2>
            <p>{content}</p>
        </div>


    )
}

export default PostCard; 