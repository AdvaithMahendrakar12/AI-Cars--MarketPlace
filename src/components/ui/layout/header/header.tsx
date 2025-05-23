
import Link from 'next/link'
import React from 'react'
import  GitHubAuthLogo  from './githubauthlogo'
import {ThemeChange} from './themeChange'
import AiSearch from './aisearch'
import { FaCarCrash } from "react-icons/fa";

export const  Header = () =>{
  return (
    <div className='h-11 flex items-center'>
        <Link
            href="/"
            className="flex items-center space-x-2 text-sm font-medium text-zinc-800 dark:text-zinc-100">
            <FaCarCrash className='text-4xl'/>
            </Link>
        <AiSearch/>
        <GitHubAuthLogo/> 
        {/* <ThemeChange/> */}
      
    </div>
  )
}


