
import Link from "next/link"


export default function Header (){
    return (
        <>
        <h1>welcome to  Home page </h1>
        <Link href="/home">
            <span className="text-blue-500 underline">Go to home Page</span>
            </Link>
        <Link href="/about">
         <span className="text-blue-500 underline">Go to About Page</span>
        </Link>
        
        </>

    )
}