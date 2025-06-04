
// user.tsx
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";


type Props = {
    users: UserProps[];

}

export default function Users ({users}: Props ) { 
    return(
        <>
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {users.map((user) => (
            <UserCard
            key= {user.id} 
            id ={user.id}
            name = {user.name}
            email = {user.email}
            address = {user.address}

            />

        ))}
       
        </>
       

    )

}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
   return {
    props: {
      users: data,
    },

}}