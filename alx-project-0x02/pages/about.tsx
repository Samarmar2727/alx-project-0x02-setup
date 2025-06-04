import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function About (){
    return (
        <>
        <Header/>
        <h1>welcome to  About page </h1>
        <div className="p-4 space-y-4">
            <Button size="small" shape ="rounded-sm">small button</Button>
            <Button size="medium" shape ="rounded-md">medium button</Button>
            <Button size="large" shape ="rounded-full">large button</Button>
        </div>
        </>

    )
}