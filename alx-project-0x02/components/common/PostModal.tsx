 import {PostModalProps} from "@/interfaces"
 import { useState } from "react";

 const PostModal = ({ onSubmit} : PostModalProps ) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit  = (e: React.FormEvent) =>{
      e.preventDefault()
      onSubmit({title, content})
      setTitle("")
      setContent("")


    }


    return(
    
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input type="text" 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)} /> 

                        <input type ="text"
                        value={content}
                        onChange={(e)=>setContent(e.target.value)} /> 
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Submit
                        </button>
                    </form>        
                

            </div>
        </div>
    

       
       
     
    )
 }

 export default PostModal ;