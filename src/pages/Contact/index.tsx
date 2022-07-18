import react from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo, PinterestLogo, SnapchatLogo, TwitterLogo } from 'phosphor-react';

export default function Contact() {

    return(
        <html lang="pt-br">
        <head>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Contact</title>
        </head>
        <body>
    
        <div className="flex flex-col" style={{"padding":"24px 48px"}}>
            <div className="flex">
                <a href="https://pt-br.facebook.com/" target="_blank"><FacebookLogo size={50}/></a>
                <p className='mt-3'>Facebook</p>
            </div>
            <a href="https://www.instagram.com/" target="_blank"><InstagramLogo size={50}/></a>
            <a href="https://www.snapchat.com/" target="_blank"><SnapchatLogo size={50}/></a>
            <a href="https://www.pinterest.com/" target="_blank"><PinterestLogo size={50}/></a>
            <a href="https://twitter.com/" target="_blank"><TwitterLogo size={50}/></a>
            <a href="https://www.linkedin.com/" target="_blank"><LinkedinLogo size={50}/></a>   
        </div>
        </body>
        </html>
    )

}