import react from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo, PinterestLogo, SnapchatLogo, TwitterLogo } from 'phosphor-react';

export default function Contact() {

    return(    
        <div className="flex" style={{"padding":"24px 48px"}}>
            <div className="p-8">
                <a href="https://pt-br.facebook.com/" target="_blank"><FacebookLogo size={50}/></a>
                <p className='mt-3'>Facebook</p>
            </div>
            <div className='p-8'>
                <a href="https://www.instagram.com/" target="_blank"><InstagramLogo size={50}/></a>
            </div>
            <div className='p-8'>
                <a href="https://www.snapchat.com/" target="_blank"><SnapchatLogo size={50}/></a>
            </div>
            <div className='p-8'>
                <a href="https://www.pinterest.com/" target="_blank"><PinterestLogo size={50}/></a>
            </div>
            <div className='p-8'>
                <a href="https://twitter.com/" target="_blank"><TwitterLogo size={50}/></a>
            </div>
            <div className='p-8'>
                <a href="https://www.linkedin.com/" target="_blank"><LinkedinLogo size={50}/></a> 
            </div>  
        </div>
    )

}