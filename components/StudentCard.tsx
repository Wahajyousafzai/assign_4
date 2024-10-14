interface card {
    name: string;
    age: number;
    Class: string;
    rollno: number;
    src:string;
}

export default function StudentCard({name="wahaj",age=18,Class="monday",rollno=484914 , src="https://i.pinimg.com/564x/41/b7/6c/41b76c8693bac0b39ba389cbb1aec7c3.jpg"}:card){
    return <>
<div className="text-2xl flex h-64 font-bold bg-gradient-to-r from-violet-200 to-pink-200 justify-between p-5 px-10 rounded-2xl text-white border-2 border-spacing-6 border-yellow-300 m-5 w-[460px]">

<span className="flex flex-col justify-center gap-5">
<h1>Name : {name}</h1>
            <h1>Age : {age}</h1>
            <h1>Roll No : {rollno}</h1>
            <h1>Class : {Class}</h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
        <img className="rounded-xl" src={src} alt="" height={100} width={100} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" height={100} width={100} />
        </span>
</div>
    </>
}