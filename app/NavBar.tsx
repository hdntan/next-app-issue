
'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  const links = [
    {
      label :"Dashboard",
      href: "/"
    },
    {
      label :"Issues",
      href: "/issues"
    }
  ]
  return (
   <nav className='flex space-x-6 border-b mb-5 mx-5 py-5 h-14 items-center'>
    <Link href={'/'}>LOGO</Link>
    <ul className='flex space-x-6'>
      {
        links.map(link =>  
          <Link href={link.href}
          key={link.href}
          className={classnames({ 
            'text-zinc-900' : link.href === currentPath,
            'text-zinc-500' : link.href !== currentPath,
            'hover:text-zinc-800 transition-colors': true,
          })}>{link.label}</Link>
      )
      }
       
       
    </ul>
   </nav>
  )
}

export default NavBar