import { ArrowLeft, ArrowRight, ArrowUp, DiscordLogo, Envelope, GithubLogo, GitlabLogo, LinkedinLogo, TelegramLogo } from "phosphor-react";


export default function Footer() {

    const url = require('../assets/icon.png');

    function topFunction() {
        window.scroll({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="bg-blue-600">
            <div className="p-20">
                <a href="/" className="flex justify-center">
                    <img src={url} className="mr-3 rounded-full h-24 w-24" alt="Portfolio Logo" />
                </a>
                <p className='flex justify-center pt-14'>
                    <a href="https://pt-br.facebook.com/" target="_blank" className='mx-3 text-slate-50 hover:text-black ease-in duration-150'><GithubLogo size={50} /></a>
                    <a href="https://www.instagram.com/" target="_blank" className='mx-3 text-slate-50 hover:text-black ease-in duration-150'><Envelope size={50} /></a>
                    <a href="https://www.snapchat.com/" target="_blank" className='mx-3 text-slate-50 hover:text-black ease-in duration-150'><DiscordLogo size={50} /></a>
                    <a href="https://www.pinterest.com/" target="_blank" className='mx-3 text-slate-50 hover:text-black ease-in duration-150'><TelegramLogo size={50} /></a>
                    <a href="https://twitter.com/" target="_blank" className='mx-3 text-slate-50 hover:text-black ease-in duration-150'><GitlabLogo size={50} /></a>
                    <a href="https://www.linkedin.com/in/henrique-costa-da-silva-6413b2203/" className='mx-3 text-slate-50 hover:text-black ease-in duration-150' target="_blank"><LinkedinLogo size={50} /></a>
                </p>
            </div>
            <div className="pb-6">
                <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-lg text-black sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:text-white ease-in duration-150 hover:underline">Henrique Costa™</a>. All Rights Reserved.</span>
            </div>
            <button onClick={topFunction} title="Go to top"></button>
            <a className="back-to-top" href="#"><ArrowRight size={32} /></a>
        </footer>

    )
}