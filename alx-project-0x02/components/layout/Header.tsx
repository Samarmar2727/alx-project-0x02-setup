
import Link from "next/link"


export default function Header (){
    return (
        <>
        <h1>welcome to  Home page </h1>
        <Link href="/home">
            <span className="text-blue-500 underline"> Home </span>
            </Link>
        <Link href="/about">
         <span className="text-blue-500 underline"> About </span>
        </Link>
        <Link href="/Posts">
         <span className="text-blue-500 underline">Posts</span>
        </Link>
        
        </>

    )
}