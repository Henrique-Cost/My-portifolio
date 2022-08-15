import { Database, Gear, TerminalWindow } from 'phosphor-react';
import './style.css'
import React from 'react';

export default function Home() {

    const url = require('../../assets/logo.png')

    return (
        <div>
            <section>
                <div className="text-center">
                    <p className="text-7xl font-sans">Welcome to my portfolio</p><br />
                </div>
                <div className='flex justify-center my-16'>
                    <img className='h-[250px] w-[250px]' src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light' />
                </div>
                <div className="flex justify-center mt-2">
                    <img src={url} id='background' alt="background" />
                </div>
            </section>
            <section className='bg-blue-500 p-24 h-[600px]'>
                <span id='comece' className='text-4xl font-mono text-white flex justify-center'>Hello, I'm Henrique</span><br />
                <p className=" px-[300px] text-xl text-white  font-mono text-center">I started programming at 16, I have many dreams, ambitions and goals, one of them I'm investing in
                    some time in my life, is to become a fullstack dev. My first impression was already "I want this for life",
                    I started with visualG30, notepad++, but I always liked the backend, then I got to know my favorite language JAVA, with JAVA I felt comfortable programming,
                    I identified with the language.
                </p>
            </section>

            <section className='flex text-center h-[900px]'>
                <div className='container mx-32'>
                    <div className='rounded-xl bg-white h-[850px] grid grid-rows-1 grid-cols-3 mt-[-200px] border-4'>
                        <div className="my-16">
                            <span className='flex justify-center'><Gear size={85} /></span>
                            <h1 className='text-2xl mt-5 text-blue-600'>Backend</h1>
                            <p className='text-center mt-16 mx-4'>
                                I like to see how things are done on the inside, I like to make the gears turn.
                            </p>
                            <p className='mt-12 text-blue-600 text-lg'>
                                Languages i speak:
                            </p>
                            <p className='mb-8 text-lg'>Java, Node, Typescript, Python, VisualG 30, Git</p>
                            <p className='text-lg text-blue-600'>Dev Tools:</p>
                            <ul>
                                <li>VisualG30</li>
                                <li>Eclipse</li>
                                <li>Intellj</li>
                                <li>WebStorm</li>
                                <li>Visual Studio Code</li>
                            </ul>
                        </div>
                        <div className="my-16 border-x-4 border-x-slate-300">
                            <span className='flex justify-center'><TerminalWindow size={85} /></span>
                            <h1 className='text-2xl mt-5 text-blue-600'>Front-end</h1>
                            <p className='text-center mt-16 mx-4'>
                                Being able to put my ideas into code and see it graphically work is particularly wonderful.
                            </p>
                            <p className='mt-12 text-blue-600 text-lg'>
                                Languages i speak:
                            </p>
                            <p className='mb-8 text-lg'>React, HTML, CSS, Git</p>
                            <p className='text-lg text-blue-600'>Dev Tools:</p>
                            <ul>
                                <li>Notepad++</li>
                                <li>WebStorm</li>
                                <li>Visual Studio Code</li>
                                <li>HyGraph</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                        <div className="my-16">
                            <span className='flex justify-center'><Database size={85} /></span>
                            <h1 className='text-2xl mt-5 text-blue-600'>Database</h1>
                            <p className='text-center mt-16 mx-4'>
                                I particularly like organization, with database I can manage data in an organized way
                            </p>
                            <p className='mt-16 text-blue-600 text-lg'>
                                Languages i speak:
                            </p>
                            <p className='mb-8 text-lg'> MYSQL, MariaDB, MongoDB, SQLite</p>
                            <p className='text-lg text-blue-600'>Dev Tools:</p>
                            <ul>
                                <li>Datagrip</li>
                                <li>MySQL Shell</li>
                                <li>MySQL Workbench</li>
                                <li>Beekeeper studio</li>
                                <li>BR Modelo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}