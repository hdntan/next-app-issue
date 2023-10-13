import Link from 'next/link'
import React from 'react'

const NavBar = () => {

  const links = [
    {
      label :"Dashboard",
      href: "/"
    },
    {
      label :"Issues",
      href: "/"
    }
  ]
  return (
   <nav className='flex space-x-6 border-b mb-5 mx-5 py-5 h-14 items-center'>
    <Link href={'/'}>LOGO</Link>
    <ul className='flex space-x-6'>
      {
        links.map(link =>  <li key={link.href}>
          <Link href={link.href} className='text-zinc-500 hover:text-zinc-800 transition-colors'>{link.label}</Link>
      </li>)
      }
       
       
    </ul>
   </nav>
  )
}

export default NavBar