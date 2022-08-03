import { Code, Gear } from 'phosphor-react';
import React from 'react';
import '/home/henrique/Documents/my-portifolio/src/pages/Home/style.css';

export default function Home (){

return(
<html lang="pt-br">
<head>
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
</head>
<body>
<section className = "text">
    <div className="p-10 flex justify-center">
        <div className="mt-[130px]">
            <p className="text-7xl font-sans ">Welcome to my portfolio</p><br/>
            <p className="text-lg  font-sans ml-32">it's not lack of coffee or tequila, it's the code that doesn't compile...</p>
            <button className="bg-blue-400 p-3 opacity-60  mt-[120px] ml-[260px] font-sans text-lg hover:opacity-100 hover:text-white rounded-full">Learn more and start today</button>
        </div>
    </div> 
</section> 
    <section className='bg-blue-500 p-24 h-[600px]'>
        <span id='comece' className='text-5xl font-sans text-white flex justify-center'>Hello, i'm Henrique</span><br />
        <p className=" px-[300px] text-xl text-white font-sans text-center">I started programming at 16 years old, my first impression was already "I want this for life", I started in visualG30, notepad++, but I always liked the backend,
            later I got to know my favorite language JAVA, with JAVA I felt comfortable to program, I identified with the language.
        </p>
    </section>

<section className='flex text-center h-[900px]'>
    <div className='container max-w-[1344]'>
        <div className='rounded-xl bg-white h-[850px] grid grid-rows-1 grid-cols-3 mt-[-200px] border-4'>
            <div className="">
            <span className='flex justify-center'><Gear size={85} /></span>
            <h1>Row column</h1>
            </div>
            <div className="border-x-4 border-x-slate-300">
            <span className='flex justify-center'><Code size={85} /></span>
            <h1>Row column</h1>
            </div>
            <div className="">
            <span className='flex justify-center'><Code size={85} /></span>
            <h1>Row column </h1>
            </div>
        </div>
    </div>
    </section>  
</body>
<footer className='h-[200px] text-center'>
    cabeçalho
</footer>
</html>  
)
}