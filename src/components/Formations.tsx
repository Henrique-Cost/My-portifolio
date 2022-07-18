import { Code } from 'phosphor-react';

export default function Formations(){
    return(
        <html lang="pt-br">
        <head>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Formation</title>
        </head>
        <body className=''>
        <div className="container pb-32 flex justify-center w-full ">
            <div className="flex justify-center w-full">
                <div className="col m-0">
                <div className="p-6 bg-light text-center">Row column</div>
                <div className='pl-[165px]'><Code size={85} /></div>
                <p className='flex justify-center'>I value simple content structure, clean design patterns, and thoughtful interactions.Things I enjoy designing:UX, UI, Web, Mobile, Apps, LogosDesign Tools: Balsamiq Mockups Figma Invision Marvel Pen & Paper Sketch Webflow  Zeplin
</p>
                </div>
                <div className="col m-0">
                <div className="p-6 bg-light text-center justify-center">Row column</div>
                <div className='pl-[165px]'><Code size={85} /></div>
                <p className='flex justify-center'>TESTE </p>
                </div>
                <div className="col m-0">
                <div className="p-6 bg-light text-center">Row column</div>
                <div className='pl-[165px]'><Code size={85} /></div>
                <p className='flex justify-center'>TESTE </p>
                </div>
            </div>
         </div>
        </body>
        </html>
    )
}