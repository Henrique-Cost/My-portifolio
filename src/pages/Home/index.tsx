import { Code, Gear, TerminalWindow, TreeStructure } from 'phosphor-react';
import React from 'react';

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
        <span id='comece' className='text-4xl font-mono text-white flex justify-center'>Hello, i'm Henrique</span><br />
        <p className=" px-[300px] text-xl text-white  font-mono text-center">I started programming at 16 years old, I have several dreams, goals, ambitions and goals, and one of them that I'm investing some time of my life in, is to become a fullstack. My first impression was already "I want this for life", I started in visualG30, notepad++, but I always liked the backend,
            later I got to know my favorite language JAVA, with JAVA I felt comfortable to program, I identified with the language.
        </p>
    </section>

<section className='flex text-center h-[900px]'>
    <div className='container mx-32'>
        <div className='rounded-xl bg-white h-[850px] grid grid-rows-1 grid-cols-3 mt-[-200px] border-4'>
            <div className="my-16">
            <span className='flex justify-center'><Gear size={85} /></span>
            <h1>Backend</h1>
            <p  className='text-center mt-16 mx-4'>
                I like to see how things are done on the inside, I like to make the gears turn
            </p>
            <p className='mt-12 text-blue-500 text-lg'>
                Languages i speak:
            </p>
            <p className='mb-8 text-lg'>Java, Node, Typescript, Python, VisualG 30</p>
            <p className='text-lg text-blue-500'>Dev Tools:</p>
            <ul>
                <li>VisualG30</li>
            </ul>
            </div>
            <div className="my-16 border-x-4 border-x-slate-300">
            <span className='flex justify-center'><TerminalWindow size={85} /></span>
            <h1>Front-end</h1>
            </div>
            <div className="my-16">
            <span className='flex justify-center'><TreeStructure size={85} /></span>
            <h1>Management</h1>
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