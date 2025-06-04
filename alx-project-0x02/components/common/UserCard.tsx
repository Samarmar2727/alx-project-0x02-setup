
//postCard 
import {type UserProps } from "@/interfaces";

export default function UserCard ({id ,name, email, address}:UserProps ) {
    return(
          <div className="bg-black-400 text-white px-4 py-6 rounded mb-4">
            <h1>Id :{id}</h1>
            <h2>Name:{name}</h2>
            <h3 className="font-bold">Email: {email}</h3>
            <p className="text-xl">  Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
        </div>
    )


    

}