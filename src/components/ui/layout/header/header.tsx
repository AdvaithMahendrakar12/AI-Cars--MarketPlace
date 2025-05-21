
import Link from 'next/link'
import React from 'react'
import  GitHubAuthLogo  from './githubauthlogo'
import ThemeChange from './themeChange'
import AiSearch from './aisearch'

export const  Header = () =>{
  return (
    <div className='h-11 flex items-center'>
        <Link
            href="/"
            className="flex items-center space-x-2 text-sm font-medium text-zinc-800 dark:text-zinc-100">
                Logo
            </Link>
        <AiSearch/>
        <GitHubAuthLogo/> 
        {/* <ThemeChange/> */}
      
    </div>
  )
}


