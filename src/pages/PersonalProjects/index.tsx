import { TreeStructure } from 'phosphor-react';
import React from 'react';

export default function Projects() {
    return (
        <div className="my-16 text-center">
            <span className='flex justify-center'><TreeStructure size={85} /></span>
            <h1 className='text-2xl mt-5 text-blue-600'>Management</h1>
            <p className='text-center mt-16 mx-4'>
                Besides, I really like business management.
            </p>
            <p className='mt-16 text-blue-600 text-lg'>
                My courses:
            </p>
            <p className='mb-8 text-lg'>Small business management, Logistics, English</p>
            <p className='text-lg text-blue-600'>Work Tools:</p>
            <ul>
                <li>Word</li>
                <li>Excel</li>
                <li>Powerpoint</li>
                <li>Office 365</li>
                <li>Canva method</li>
                <li>Google Workspace</li>
                <li>Google Frameworks</li>
            </ul>
        </div>
    )
}